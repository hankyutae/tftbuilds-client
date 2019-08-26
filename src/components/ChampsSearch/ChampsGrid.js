import React from 'react';
import ImgLink from '../../services/create-img-link-service';
import './ChampsGrid.css';

export default class ChampsGrid extends React.Component {
  render() {
    return (
      <div className='champs-grid'>
        <table>
          <tbody>
            {
              <tr>
                <td>

                </td>
                {this.props.classes.map((aClass, index) => {
                  return (
                    <td key={index}>
                      <div>
                        <img className='grid-champ-class' src={ImgLink.createLink(aClass.icon)} alt={`${aClass.name} icon`} />
                      </div>
                      <div className='grid-class-name'>
                        {aClass.name}
                      </div>

                    </td>
                  )
                })}
              </tr>

            }
            {
              this.props.origins.map((origin, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div>
                        <img className='grid-champ-class' src={ImgLink.createLink(origin.icon)} alt={`${origin.name} icon`} />
                      </div>
                      <div className='grid-class-name'>
                        {origin.name}
                      </div>
                    </td>
                    {
                      this.props.classes.map((aClass, index) => {
                        return (
                          <td key={index}>
                            {Object.keys(this.props.champs).map(key=>this.props.champs[key]).filter(champ => {
                              return champ.traits.includes(aClass.name) && champ.traits.includes(origin.name)
                            }).sort((a,b)=>a.cost-b.cost)
                              .map((champ, index) => {
                                return (
                                  <div className={`build-champ-icon-box  grid-champ-icon-box`} key={index}>
                                    <img className={`build-champ-icon button-cursor cost${champ.cost}`} src={ImgLink.createLink(champ.splash)} alt={`${champ.name} icon`} onClick={() => this.props.handleAdd(champ)} />
                                  </div>
                                );
                              })}
                          </td>
                        )
                      })
                    }

                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    );
  }
}
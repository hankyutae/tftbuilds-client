import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import TftBuildsApiService from '../../services/tftbuilds-api-service';
import TftContext from '../../contexts/TftContext'

export default function BuildIdRoute({ component, ...props }) {
  
  //const Component = component;

  return (
    <TftContext.Consumer>
      {({setCurrentBuild})=>(
        <Route
        {...props}
        render={componentProps => {
          TftBuildsApiService.getPublicBuild(componentProps.match.params.id)
            .then(resJson=>{
              return setCurrentBuild(resJson["build_data"])
            })
            .catch((error)=>{
              console.log(error);
            })
          return <Redirect
            to={{
              pathname: '/create-build',
              state: { from: componentProps.location }
            }}
          />
          
          }
  
        }
  
      />
      )}
    </TftContext.Consumer>
    
  )
}

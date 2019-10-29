import React from 'react';
import ReactDOM from 'react-dom';
import ChampsGrid from './ChampsGrid';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

let origins = [];
let classes = [];

Object.keys(traits).forEach(trait=>{
  if(traits[trait].isOrigin){
    origins.push(traits[trait])
  }
  else{
    classes.push(traits[trait])
  }
})
origins.sort((a,b)=>a.name<b.name?-1:a.name>b.name?1:0);
classes.sort((a,b)=>a.name<b.name?-1:a.name>b.name?1:0);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ChampsGrid champs={champions} classes={classes} origins={origins}/>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <ChampsGrid champs={champions} classes={classes} origins={origins}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
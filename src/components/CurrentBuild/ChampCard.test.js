import React from 'react';
import ReactDOM from 'react-dom';
import ChampCard from './ChampCard';
import {BrowserRouter} from 'react-router-dom';
import {TftProvider} from '../../contexts/TftContext';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";


let champ=champions[(Object.keys(champions)[0])];
let syn={};
let currentBuild= [ 
  {
    id:Object.keys(champions)[0],
    items: [2],
    stars: 2
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TftProvider champions={champions} items={items} traits={traits} currentBuild={currentBuild}>
      <BrowserRouter>
        <ChampCard champ={champ} syn={syn} index={0} screensize={2}/>
      </BrowserRouter>
    </TftProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <TftProvider champions={champions} items={items} traits={traits} currentBuild={currentBuild}>
        <BrowserRouter>
          <ChampCard champ={champ} syn={syn} index={0} screensize={2}/>
        </BrowserRouter>
      </TftProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

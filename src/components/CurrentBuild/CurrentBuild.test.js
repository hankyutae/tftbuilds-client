import React from 'react';
import ReactDOM from 'react-dom';
import CurrentBuild from './CurrentBuild';
import {BrowserRouter} from 'react-router-dom';
import {TftProvider} from '../../contexts/TftContext';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

let currentBuild= [ 
  {
    id:Object.keys(champions)[0],
    items: [23, 11],
    stars: 2
  },
  {
    id:Object.keys(champions)[1],
    items: [12, 11],
    stars: 3
  },
  {
    id:Object.keys(champions)[2],
    items: [12, 11],
    stars: 3
  },
  {
    id:Object.keys(champions)[3],
    items: [12, 11],
    stars: 3
  },
  {
    id:Object.keys(champions)[4],
    items: [12, 11],
    stars: 3
  },
  {
    id:Object.keys(champions)[5],
    items: [12, 11],
    stars: 3
  },
  {
    id:Object.keys(champions)[6],
    items: [12, 11],
    stars: 3
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TftProvider champions={champions} items={items} traits={traits} currentBuild={currentBuild}>
      <BrowserRouter>
        <CurrentBuild />
      </BrowserRouter>
    </TftProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <TftProvider champions={champions} items={items} traits={traits} currentBuild={currentBuild}>
        <BrowserRouter>
          <CurrentBuild />
        </BrowserRouter>
      </TftProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

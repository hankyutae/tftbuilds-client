import React from 'react';
import ReactDOM from 'react-dom';
import ChampsSearch from './ChampsSearch';
import {TftProvider} from '../../contexts/TftContext';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TftProvider champions={champions} items={items} traits={traits}>
      <ChampsSearch />
    </TftProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <TftProvider champions={champions} items={items} traits={traits} >
        <ChampsSearch />
      </TftProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
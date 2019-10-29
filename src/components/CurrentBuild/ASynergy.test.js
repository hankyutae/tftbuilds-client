import React from 'react';
import ReactDOM from 'react-dom';
import ASynergy from './ASynergy';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ASynergy />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( <ASynergy />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
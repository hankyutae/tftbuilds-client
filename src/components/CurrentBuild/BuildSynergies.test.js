import React from 'react';
import ReactDOM from 'react-dom';
import BuildSynergies from './BuildSynergies';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BuildSynergies syn={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( <BuildSynergies syn={{}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

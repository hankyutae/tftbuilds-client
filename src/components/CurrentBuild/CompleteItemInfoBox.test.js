import React from 'react';
import ReactDOM from 'react-dom';
import CompleteItemInfoBox from './CompleteItemInfoBox';
import items from '../TestHelpers/items';
import renderer from "react-test-renderer";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CompleteItemInfoBox items={items} item={11} isExpanded={true} itemIndex={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <CompleteItemInfoBox items={items} item={11} isExpanded={true} itemIndex={0} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

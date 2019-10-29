import React from 'react';
import ReactDOM from 'react-dom';
import BuildingPage from './BuildingPage';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BuildingPage/>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <BuildingPage/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
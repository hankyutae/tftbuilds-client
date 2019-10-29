import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Dashboard/>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <Dashboard/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
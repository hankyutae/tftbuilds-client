import React from 'react';
import ReactDOM from 'react-dom';
import ChampIcon from './ChampIcon';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ChampIcon/>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <ChampIcon/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
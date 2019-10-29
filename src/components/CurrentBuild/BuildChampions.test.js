import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import BuildChampions from './BuildChampions';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <BuildChampions/>
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <BrowserRouter>
        <BuildChampions/>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
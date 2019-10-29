import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Nav from './Nav';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Nav location={{pathname:'/'}}/>
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <BrowserRouter>
        <Nav location={{pathname:'/'}}/>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
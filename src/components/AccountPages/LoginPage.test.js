import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import LoginPage from './LoginPage';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LoginPage/>
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <BrowserRouter>
        <LoginPage/>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
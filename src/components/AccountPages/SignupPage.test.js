import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import SignupPage from './SignupPage';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SignupPage/>
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create( 
      <BrowserRouter>
        <SignupPage/>
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
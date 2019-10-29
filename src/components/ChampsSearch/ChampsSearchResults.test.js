import React from 'react';
import ReactDOM from 'react-dom';
import ChampsSearchResults from './ChampsSearchResults';
import champions from '../TestHelpers/champions';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ChampsSearchResults champs={champions} locale={'build-page'}/>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <ChampsSearchResults champs={champions} locale={'build-page'}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
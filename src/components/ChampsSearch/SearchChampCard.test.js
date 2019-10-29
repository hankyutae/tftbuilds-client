import React from 'react';
import ReactDOM from 'react-dom';
import SearchChampCard from './SearchChampCard';
import champions from '../TestHelpers/champions';
import renderer from "react-test-renderer";

let champ = champions[Object.keys(champions)[0]];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <SearchChampCard champ={champ} locale={'build-page'}/>
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <SearchChampCard champ={champ} locale={'build-page'}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
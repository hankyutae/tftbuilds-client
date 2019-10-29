import React from 'react';
import ReactDOM from 'react-dom';
import SingleStat from './SingleStat';
import calcStats from '../../services/calculate-final-stats-service';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

let champInfo=champions[(Object.keys(champions)[0])];
let statMod= calcStats(
  {...champInfo, items:[], stars:2 },
  {},
  items
);
let champ={stars: 2};
let statType='hp';

it('renders without crashing', () => {
  const div = document.createElement('tr');
  ReactDOM.render(
    <SingleStat champ={champ} statMod={statMod} champInfo={champInfo} statType={statType}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <SingleStat champ={champ} statMod={statMod} champInfo={champInfo} statType={statType} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

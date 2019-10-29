import React from 'react';
import ReactDOM from 'react-dom';
import DashboardABuildDisplay from './DashboardABuildDisplay';
import {BrowserRouter} from 'react-router-dom';
import {TftProvider} from '../../contexts/TftContext';
import champions from '../TestHelpers/champions';
import items from '../TestHelpers/items';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

let build={
  build_data: [{"id": 38, "items": [16, 15, 5], "stars": 1}, {"id": 103, "items": [5, 17, 25], "stars": 3}, {"id": 25, "items": [], "stars": 1}, {"id": 136, "items": [], "stars": 1}, {"id": 30, "items": [], "stars": 1}, {"id": 421, "items": [], "stars": 1}, {"id": 31, "items": [], "stars": 1}],
  date_created:'',
  date_modified:'',
  is_public:false,
  user_id:''
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <TftProvider champions={champions} items={items} traits={traits} >
      <BrowserRouter>
        <DashboardABuildDisplay build={build} index={0} />
      </BrowserRouter>
    </TftProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(
      <TftProvider champions={champions} items={items} traits={traits} >
        <BrowserRouter>
          <DashboardABuildDisplay build={build} index={0} />
        </BrowserRouter>
      </TftProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import ReactDOM from 'react-dom';
import ChampsSearchFilter from './ChampsSearchFilter';
import traits from '../TestHelpers/traits';
import renderer from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChampsSearchFilter traits={traits} prices={[1,2,3,4,5]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer
    .create(<ChampsSearchFilter traits={traits} prices={[1,2,3,4,5]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
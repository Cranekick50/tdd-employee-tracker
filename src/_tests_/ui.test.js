// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
test('title component renders', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Title').length).toEqual(1);
});

});
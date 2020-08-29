// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import App from "../App";
import Title from "../component/Title";

describe('App', () => {
test('title displays correctly', () => {
    render (<Title />)
    expect(screen.getByLabelText('h1')).toContain('employee');
});

});
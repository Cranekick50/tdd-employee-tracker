// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import App from "../App";

describe('App', () => {

test('title displays correctly', async () => {
    expect('title').toContain('employee');
});

});
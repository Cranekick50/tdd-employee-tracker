// import dependencies
// import React from "react";
// import react-testing methods
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios'

configure({ adapter: new Adapter() });


describe("GET / ", () => {
    test("there should be a list of employees", async () => {
      const response = await request(app).get("/");
      expect(response.body).toEqual();
      expect(response.statusCode).toBe(200);
    });
  });


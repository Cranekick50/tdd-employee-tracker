// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

describe("App", () => {
  test("title component renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Title").length).toEqual(1);
  });
});

describe("App", () => {
  test("title component renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Users").length).toEqual(1);
  });
});



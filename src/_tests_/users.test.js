// import dependencies
import React from "react";
import { Table } from "react-bootstrap";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Users from "../component/Users";

configure({ adapter: new Adapter() });

describe("Users", () => {
    test("Users contains a div", () => {
      const wrapper = shallow(<Users />);
      expect(wrapper.find("div").length).toEqual(1);
    });
 
    test("Users contains a Table", () => {
      const wrapper = shallow(<Users />);
      expect(wrapper.find("tr").length).toEqual(1);
    });


  });
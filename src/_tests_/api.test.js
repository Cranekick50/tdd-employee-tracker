// import dependencies
import React from "react";
// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import Users from "../component/Users";

configure({ adapter: new Adapter() });

const renderUsers = () => {
  return render(<Users />);
};

describe("GET / ", () => {
  test("should render the user component", () => {
    renderUsers();
    expect(screen.getByTestId("users")).toBeInTheDocument();
  });

  test("should render first name header", () => {
    renderUsers();
    expect(screen.getByTestId("column-firstname")).toBeInTheDocument();
  });

  test("should render last name header", () => {
    renderUsers();
    expect(screen.getByTestId("column-lastname")).toBeInTheDocument();
  });

  test("should render phone number header", () => {
    renderUsers();
    expect(screen.getByTestId("column-phone")).toBeInTheDocument();
  });

  test("should render email header", () => {
    renderUsers();
    expect(screen.getByTestId("column-email")).toBeInTheDocument();
  });

//   test('should render users with data', ()=> {
//       const users = {
//           name: {
//               first: 'Bryan',
//               last: 'Silva'
//           },
//           phone: '484-777-7489',
//           email: 'bryan.silva@example.com'
//       };
//       axios.get.mockImplementation(() => Promise.resolve(resp));
//       expect(Users).toContain(users);
//   })
});

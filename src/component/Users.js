import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);


  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=200&nat=us")
      .then((res) => {
        setUsers(res.data.results);
        setFilteredUsers(res.data.results);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchHandler = (value, column) => {
    if (column === "first") {
      const filteredUsers = users.filter(
        (user) =>
          user.name.first.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      console.log(filteredUsers);
      setFilteredUsers(filteredUsers);
    } else {
      const filteredUsers = users.filter(
        (user) =>
          user.name.last.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      console.log(filteredUsers);
      setFilteredUsers(filteredUsers);
    }
  };
  //   console.log(users);
  //   console.log(firstName);

  return (
    <div style={{ margin: "0 10%" }}>
      <form>
        <label>First Name</label>
        <input
          type="text"
          onChange={(event) => {
            searchHandler(event.target.value, "first");
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          onChange={(event) => {
            searchHandler(event.target.value, "last");
          }}
        />
      </form>

      <Table striped bordered hover>
        <tr>
          <th className="tableHeader">First Name</th>
          <th className="tableHeader">Last Name</th>
          <th className="tableHeader">Phone#</th>
          <th className="tableHeader">Email</th>
        </tr>
        {filteredUsers.map((user, index) => {
          return (
            <React.Fragment key={index}>
              <tr>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
              </tr>
            </React.Fragment>
          );
        })}
      </Table>
    </div>
  );
};

export default Users;

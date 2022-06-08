import React, { Component, useState, useEffect } from "react";
import "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const URL = "https://gorest.co.in/public/v2/users";
  const showData = async () => {
    const resp = await fetch(URL);
    const data = await resp.json();
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      maxWidth: "30px",
      center: true,
    },
    {
      name: "NAME",
      selector: (row) => row.name,
      center: true,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
      center: true,
    },
  ];

  createTheme(
    "custom",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: "#d1d1d1",
      },
      context: {
        background: "#cb4b16",
        text: "#212121",
      },
      divider: {
        default: "#a8a8a8",
      },
      action: {
        button: "#2a2a2a",
        hover: "rgba(255,0,255,.08)",
        disabled: "rgba(0,255,0,.12)",
      },
    },
    "light"
  );

  const MyComponent = () => (
    <DataTable title="Gorest" columns={columns} theme="custom" />
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Fetching data !</h1>
      </header>
      <p className="App-intro">
        Vite + React + Datatable + Styled Components !
      </p>
      <DataTable columns={columns} data={users} theme="custom" pagination />
    </div>
  );
};

export default App;

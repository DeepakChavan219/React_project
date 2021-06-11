import React, { useState } from "react";
const Table = () => {
  const Tablehead = ({ headings }) => {
    return (
      <tr>
        {headings &&
          headings.map((head, i) => {
            return <th key={head + i}>{head}</th>;
          })}
      </tr>
    );
  };
  const Tabledata = ({ items, column }) => {
    return (
      items &&
      items.map((item, i) => {
        return (
          <tr key={i}>
            {column &&
              column.map((col, i) => {
                return <td key={col + i}>{item[col]}</td>;
              })}
          </tr>
        );
      })
    );
  };

  return (
    <div
      style={{
        marginLeft: "400px",
        marginTop: "100px",
        backgroundColor: " rgb(146, 149, 146, 0.7)",
        width: "500px",
        height: "400px",
      }}
    >
      <h1 style={{ color: "red", marginLeft: "50px" }}>REGISTRATION DETAILS</h1>
      <table border="2px" style={{ marginLeft: "10px" }}>
        <Tablehead
          headings={[
            "Name",
            "Mobile",
            "Email",
            "Address",
            "Permanent-Address",
            "Addhar",
          ]}
        />
        <Tabledata
          items={JSON.parse(localStorage.getItem("users"))}
          column={["name", "mobile", "email", "address1", "address2", "addhar"]}
        />
      </table>
    </div>
  );
};

export default Table;

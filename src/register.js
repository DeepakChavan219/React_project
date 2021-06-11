import React, { useState } from "react";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  // const onChange = (e) => {
  //   e.preventDefault();
  //   alert(JSON.stringify({ ...user }));
  // };
  const valid = () => {
    if (user.name == "" && user.mobile == "") {
      setUser({ name: "invalid name", mobile: "enter valid number" });
    } else {
      return true;
    }
  };
  const onSubmit = () => {
    setUser({ name: "", mobile: "" });
    if (valid()) {
      alert("form is submit");
    }
  };
  return (
    <>
      <label>Name</label>
      <input
        type="text"
        // value={user.name}
        // name="name"
        onChange={(e) => setUser({ name: e.target.value })}
      />
      <p>{user.name}</p>
      <br />
      <label>Mobile</label>
      <input
        type="text"
        // name="mobile"
        // value={user.mobile}
        onChange={(e) => setUser({ mobile: e.target.value })}
      />
      <p>{user.mobile}</p>
      <br />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={(e) => setUser(e.target.value)}
      />
      <p>{user.email}</p>
      <br />
      <input onClick={onSubmit} type="submit" value="Submit" />
    </>
  );
};

export default Register;

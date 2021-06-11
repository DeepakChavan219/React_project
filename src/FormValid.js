import React, { useState } from "react";
const Formvalid = () => {
  const [user, setUser] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState(false);
  const [pass, setpass] = useState(false);
  const onSubmit = (e) => {
    if (user.length < 3 && password.length < 3) {
      alert("incorrect");
    } else {
      alert("correct");
    }
    e.preventDefault();
  };
  const handlename = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setname(true);
    } else {
      setname(false);
    }
    setUser(item);
  };
  const handlepass = (e) => {
    let item = e.target.value;
    if (item.length < 3) {
      setpass(true);
    } else {
      setpass(false);
    }
    setpassword(item);
  };
  return (
    <>
      <h1>Form Validation</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="enter name" onChange={handlename} />
        {name ? <span>enter valid name</span> : ""}
        <input
          type="password"
          placeholder="enter password"
          onChange={handlepass}
        />
        {pass ? <span>enter password</span> : ""}
        <button>Sumbit</button>
      </form>
    </>
  );
};

export default Formvalid;

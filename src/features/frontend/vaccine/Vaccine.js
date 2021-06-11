import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Vaccine = () => {
  const [user, setuser] = useState({
    name: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
    addhar: "",
  });
  const classes = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    var users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      users = [];
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    reset();
    return false;
  };
  const reset = () => {
    setuser({
      name: "",
      mobile: "",
      email: "",
      address1: "",
      address2: "",
      addhar: "",
    });
  };
  return (
    <div
      style={{
        marginLeft: "400px",
        marginTop: "100px",
        backgroundColor: " rgb(46, 49, 146, 0.8)",
        width: "500px",
        height: "400px",
      }}
    >
      <h1
        style={{
          marginLeft: "28px",
        }}
      >
        REGISTER FOR VACCINATION
      </h1>
      <form
        onSubmit={handleClick}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          name="name"
          value={user.name}
          label="Full Name"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
        <TextField
          id="filled-basic"
          name="email"
          value={user.email}
          label="Email-id"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
        <br />
        <TextField
          id="outlined-basic"
          name="mobile"
          value={user.mobile}
          label="Mobile"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
        <TextField
          id="outlined-basic"
          name="address1"
          value={user.address1}
          label="Address"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
        <br />
        <TextField
          id="outlined-basic"
          name="addhar"
          value={user.addhar}
          label="Addhar-Number"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
        <TextField
          id="outlined-basic"
          name="address2"
          value={user.address2}
          label="Permanent-Address"
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginLeft: "20px",
          }}
        />
        <br />
        <input
          style={{
            padding: "15px",
            fontSize: "15px",
            fontWeight: "600",
            backgroundColor: "chartreuse",
            marginLeft: "130px",
            marginTop: "50px",
          }}
          type="submit"
          value="Sumbit"
        />
      </form>
    </div>
  );
};

export default Vaccine;

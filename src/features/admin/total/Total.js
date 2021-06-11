import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
const useStyle = makeStyles({
  h1: {
    color: "red",
    marginLeft: 40,
    fontSize: 28,
    marginTop: "150px",
  },
});
const Total = () => {
  const [total, settotal] = useState(0);

  const classes = useStyle();
  // const total1 = () => {
  //   var items = JSON.parse(localStorage.getItem("users"));
  //   return settotal(items.length);
  // };
  useEffect(() => {
    var items = JSON.parse(localStorage.getItem("users"));
    return settotal(items.length);
  }, []);
  return (
    <>
      {/* <h1>Total component</h1> */}
      <h1 className={classes.h1}>
        TO KNOW THE NUMBER OF PEOPLES WHO REGISTRATED PLEASE CLICK THE BUTTON
      </h1>
      {/* <Button
        variant="contained"
        onClick={total1}
        color="primary"
        style={{ marginLeft: "550px" }}
      >
        Click
      </Button> */}
      {/* <button onClick={total1}>clcik</button> */}
      <h1
        style={{
          marginLeft: "560px",
          fontSize: "100px",
          color: "red",
          marginTop: "-10px",
        }}
      >
        {total}
      </h1>
    </>
  );
};

export default Total;

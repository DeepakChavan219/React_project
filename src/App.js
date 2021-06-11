import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import Blank from "./layoutes/blank/Blank";
import Full from "./layoutes/full/Full";
import AuthContext from "../src/shared/contexts/AuthContext";
import { useState } from "react";
import Register from "./register";
import Formvalid from "./FormValid";

function App() {
  const [log, setlog] = useState(false);
  const Protect = (props) => {
    return log ? (
      <Route {...props}>{props.children}</Route>
    ) : (
      <Redirect to="/login" />
    );
  };
  return (
    <div
      style={{
        backgroundImage: "URL(/images/img1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPositionX: "50%",
        backgroundPositionY: "70%",
        height: "100vh",
      }}
    >
      <Switch>
        <Protect path="/secured">
          <Full />
        </Protect>
        <Route path="/">
          <AuthContext.Provider value={setlog}>
            <Blank />
          </AuthContext.Provider>
        </Route>
      </Switch>
    </div>
    /* <Register /> */
    // <Formvalid />
  );
}

export default App;

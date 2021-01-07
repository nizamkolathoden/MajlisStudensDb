import React from "react";
import Auth from './Components/User/Authentication/Auth'
import Nav from './Components/User/Navigation/Nav'
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Nav />
      <Auth />
    </div>
  );
}

export default App;

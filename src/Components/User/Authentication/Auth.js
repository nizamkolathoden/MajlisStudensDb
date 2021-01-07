import React from "react";
import Logo from "../../../Asset/Logo-removebg-preview1.png";
import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={classes.Auth}>
      <div className={classes.card}>
          <h2>Login</h2>
        <img src={Logo} alt="" />
        <p>invalid Password or Username*</p>
        <form>
         <label>Username</label><input className={`${classes.Input} ${classes.Username}`} type="text" placeholder="Username" required /> <br/>
         <label>Password</label><input className={`${classes.Input} ${classes.Password}`} type="password" placeholder="Password" required /> <br />
          <input className={`${classes.Input} ${classes.Submit}`} type="submit" value="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Auth;

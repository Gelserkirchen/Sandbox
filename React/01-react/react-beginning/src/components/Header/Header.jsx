import React from "react";
import classes from "./Header.module.css";
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  // debugger
  return (
    <header className={classes.header}>
      <img
        src="https://opportunities.sriexecutive.com/wp-content/uploads/2018/08/IMG-Academy.jpg"
        className="imagine"
        alt="23"
      />

      <div className={classes.authLink}>
        <NavLink to={"/login/"}>
          { props.isAuth ? <div>{props.id}</div> : <div>Login</div>} 
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

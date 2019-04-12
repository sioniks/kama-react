import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>
          Massages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/df" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dfd" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dfdss" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

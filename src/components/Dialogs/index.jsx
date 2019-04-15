import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <DialogItem name="test1" id="1" />
        <DialogItem name="test2" id="2" />
        <DialogItem name="test3" id="3" />
        <DialogItem name="test4" id="4" />
        <DialogItem name="test5" id="5" />
        <DialogItem name="test6" id="6" />
      </div>

      <div className={s.messages}>
        <Message message="lorem2" />
        <Message message="lorem2sdf sfsd fsdfsdf sdf" />
        <Message message="lorem sdf sdf sdfsd fsdf sd fsdf" />
      </div>
    </div>
  );
};

export default Dialogs;

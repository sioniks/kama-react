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
  let dialogsData = [
    {
      id: 1,
      name: "Andrey"
    },
    {
      id: 2,
      name: "DIma"
    },
    {
      id: 3,
      name: "Tron"
    },
    {
      id: 4,
      name: "Smel"
    },
    {
      id: 5,
      name: "Folover"
    }
  ];

  let messagesData = [
    {
      id: 1,
      message: "loresdfgdfgdfgd fdf gdfgfd gdfgd fgdm2"
    },
    {
      id: 2,
      message: "lorem2"
    },
    {
      id: 3,
      message: "lodfgdfg dfgdf gdfgd fgdf gdfgd frem2"
    },
    {
      id: 4,
      message: "lorem2"
    },
    {
      id: 5,
      message: "lorem2"
    }
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {dialogsData.map(dialog => {
          return <DialogItem name={dialog.name} id={dialog.id} />;
        })}
      </div>

      <div className={s.messages}>
        {messagesData.map(message => {
          return <Message message={message.message} id={message.id} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;

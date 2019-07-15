import React from "react";
import s from "./style.module.css";

import DialogItem from "./DialogsItem";
import Message from "./Meassage";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        {props.dialogsData.map(dialog => {
          return <DialogItem name={dialog.name} id={dialog.id} />;
        })}
      </div>

      <div className={s.messages}>
        {props.messagesData.map(message => {
          return <Message message={message.message} id={message.id} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;

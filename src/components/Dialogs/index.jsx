import React from "react";
import s from "./style.module.css";

import DialogItem from "./DialogsItem";
import Message from "./Meassage";

const Dialogs = props => {
  let dialogsElements = props.state.dialogsData.map((dialog, index) => (
    <DialogItem name={dialog.name} id={dialog.id} key={index} />
  ));
  let messagesElements = props.state.messagesData.map((message, index) => (
    <Message message={message.message} id={message.id} key={index} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;

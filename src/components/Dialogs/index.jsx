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

  let newMessage = React.createRef();
  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>

      <div className={s.new_message}>
        <textarea className={s.input_message} ref={newMessage} />
        <button className={s.button_message} onClick={ addMessage } >Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;

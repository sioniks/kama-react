import React from "react";
import s from "./style.module.css";

const Message = props => {
  
  return (
    <div className={s.message_wrap}>
      <p className={s.message}>{props.message}</p>
      

    </div>
  );
};

export default Message;

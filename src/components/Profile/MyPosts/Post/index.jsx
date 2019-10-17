import React from "react";
import s from "./style.module.css";

const Post = props => {
  return (
    <div className={s.post__item}>
      <img
        src={`https://picsum.photos/200/200?random=${props}`}
        alt=""
      />
      <h3>{props.message}</h3>
      <div className="">
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;

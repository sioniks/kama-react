import React from "react";
import s from "./style.module.css";

const Post = props => {
  return (
    <div className={s.post__item}>
      <img
        src="http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg"
        alt=""
      />
      <h3>{props.massage}</h3>
      <div className="">
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;

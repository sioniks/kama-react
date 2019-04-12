import React from "react";
import s from "./style.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <p>My posts</p>
      <div className="">
        <textarea name="" id="" cols="30" rows="10" />
        <button>Add posts</button>
      </div>
      <div className={s.posts}>
        <Post massage="Azazazazaazaa" />
        <Post massage="Boba" />
      </div>
    </div>
  );
};

export default MyPosts;

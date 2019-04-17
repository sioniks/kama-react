import React from "react";
import s from "./style.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div className="">
        <div>
          <textarea name="" id="" />
        </div>
        <div>
          <button>Add posts</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post massage="Azazazazaazaa" />
        <Post massage="Boba" />
      </div>
    </div>
  );
};

export default MyPosts;

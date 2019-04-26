import React from "react";
import s from "./style.module.css";
import Post from "./Post";

const MyPosts = props => {
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
        {props.postsData.map(post => {
          return (
            <Post
              message={post.name}
              id={post.id}
              likesCount={post.likesCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;

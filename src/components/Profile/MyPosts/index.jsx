import React from "react";
import s from "./style.module.css";
import Post from "./Post";

const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      name: "Hi? popel",
      likesCount: 22
    },
    {
      id: 2,
      name: "Go to hell",
      likesCount: 0
    },
    {
      id: 3,
      name: "Insadrill das unterriht",
      likesCount: 1
    },
    {
      id: 4,
      name: "Gelder smkin ungolden",
      likesCount: 2223232
    },
    {
      id: 5,
      name: "Der himmel und der bandershtadt",
      likesCount: 223
    }
  ];
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
        {postsData.map(post => {
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

import React from "react";
import s from "./style.module.css";
import Post from "./Post";

const MyPosts = props => {
  let postsElements = props.postsData.map((post, index) => {
    return (
      <Post
        message={post.name}
        id={post.id}
        likesCount={post.likesCount}
        key={index}
      />
    );
  })
  let newPostElement = React.createRef();
  let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div className="">
        <div>
          <textarea ref={newPostElement} />
        </div>
        <div>
          <button onClick={ addPosts } >Add posts</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;

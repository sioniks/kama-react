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
    
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return (
    <div className={s.content}>
      <h3>My posts</h3>
      <div className="">
        <div>
          <textarea
            onChange={onPostChange} 
            ref={newPostElement} value={props.newPostText}/>
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

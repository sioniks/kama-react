import React from "react";
import s from "./style.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = props => {
  return (
    <div className={s.content}>
      <div className="">
        <img
          className={s["top-image"]}
          src="https://picsum.photos/980/370"
          alt=""
        />
      </div>
      <ProfileInfo />
      <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;

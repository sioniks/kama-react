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
          src="http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg"
          alt=""
        />
      </div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default Profile;

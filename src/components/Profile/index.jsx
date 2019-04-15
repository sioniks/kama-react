import React from "react";
import "./style.css";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div className="">
        <img
          className="top-image"
          src="http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg"
          alt=""
        />
      </div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;

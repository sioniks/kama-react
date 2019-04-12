import React from "react";
import "./style.css";
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
      <div className="user-info">
        <img
          src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
          alt=""
        />
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;

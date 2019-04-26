import React from "react";
import s from "./style.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPosts from "./MyPosts";

const Profile = () => {
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
      <div className="">
        <img
          className={s["top-image"]}
          src="http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg"
          alt=""
        />
      </div>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;

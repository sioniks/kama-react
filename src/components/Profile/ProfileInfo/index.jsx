import React from "react";
import s from "./style.module.css";

const ProfileInfo = props => {
  return (
    <div className={s["profile-info"]}>
      <img
        src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
        alt=""
      />
    </div>
  );
};

export default ProfileInfo;

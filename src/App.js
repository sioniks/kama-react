import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Massages</a>
        </div>
        <div>
          <a href="#s">News</a>
        </div>
        <div>
          <a href="#s">Music</a>
        </div>
        <div>
          <a href="#s">Settings</a>
        </div>
      </nav>

      <div className="content">
        <div className="">
          <img
            className="top-image"
            src="http://wowslider.com/sliders/demo-81/data1/images/redkite50498.jpg"
            alt=""
          />
        </div>
        <div className="">
          <img
            src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default App;

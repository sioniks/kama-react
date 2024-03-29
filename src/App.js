import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile 
              profilePage={props.state.profilePage} 
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.messagesPage} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

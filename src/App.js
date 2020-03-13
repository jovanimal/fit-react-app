import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/css/hexagons.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import MyProfilePage from "./pages/MyProfilePage";
import UserProfile from "./pages/UserProfile";
import Challenges from "./pages/Challenges";
import UploadPage from "./pages/UploadPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

import axios from "axios";
import { Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import Image from "react-graceful-image";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // for Reference if you need to use useEffect

  useEffect(() => {
    axios
      .get("https://fivehive.herokuapp.com/api/v1/users/show")
      .then(result => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/main">
        <MainPage />
      </Route>
      <Route path="/nearby">
        <UserProfile users={users} />
      </Route>
      <Route path="/challenges">
        <Challenges />
      </Route>
      <Route path="/myprofile">
        <MyProfilePage />
      </Route>
      <Route path="/navbar">
        <NavBar />
      </Route>

    </div>
  );
}
// <HomePage />
// <LoginForm />
// <SignUpForm />
// <MainPage />
// <MyProfilePage />
// <Challenges />

export default App;

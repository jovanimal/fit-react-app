import React, { useState, useEffect } from "react";
import "./App.css";
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
// import { Route } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import Image from "react-graceful-image";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // for Reference if you need to use useEffect

  useEffect(() => {
    axios
      .get("https://fivehive.herokuapp.com/api/v1/users/info/1")
      .then(result => {
        console.log(result);
        setUsers(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <HomePage />
      <LoginForm />
      <SignUpForm />
      <MainPage />
      <UserProfile users={users} />
      <MyProfilePage />
      <Challenges />
    </div>
  );
}

export default App;

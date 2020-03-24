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
import MentorForm from "./components/MentorForm";

import axios from "axios";
import { Route, useHistory } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import Image from "react-graceful-image";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isloggedin, setisloggedin] = useState(false); //for login-required content in subsequent pages
  const [usernameInput, setusernameInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [loggedUser, setloggedUser] = useState("");
  const [myinfo, setmyinfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://fivehive.herokuapp.com/api/v1/users/profile/${loggedUser}`)
      .then(result => {
        setmyinfo(result.data);
        history.push("/main");
        console.log("mounted");
      })
      .catch(console.log("cannot render page"));
  }, [loggedUser]);

  const handleUser = e => {
    setusernameInput(e.target.value);
  };

  const handlePassword = e => {
    setpasswordInput(e.target.value);
  };

  let history = useHistory();

  const submitlog = e => {
    e.preventDefault();
    if (usernameInput && passwordInput) {
      console.log(`username = ${usernameInput}, password=${passwordInput}`);
      axios({
        method: "POST",
        // change me
        url: "https://fivehive.herokuapp.com/api/v1/users/signin",
        data: {
          username: usernameInput,
          password: passwordInput
        }
      })
        .then(result => {
          // console.log(result.data[1]);
          // showUsers(result.data["user_id"]);
          setisloggedin(true);
          setloggedUser(result.data["user_id"]);
          localStorage.setItem("jwt", result.data["jwt"]);
          console.log(localStorage);
          console.log(localStorage["jwt"]);
        })
        .catch(error => {
          console.log("cannot leh");
        });
    }
  };

  const showUsers = id => {
    axios
      .get(`https://fivehive.herokuapp.com/api/v1/users/show/${id}`)
      .then(result => {
        console.log(result.data);
        setUsers(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginForm
          isloggedin={isloggedin}
          setisloggedin={setisloggedin}
          usernameInput={usernameInput}
          setusernameInput={usernameInput}
          passwordInput={passwordInput}
          setpasswordInput={setpasswordInput}
          handleUser={handleUser}
          handlePassword={handlePassword}
          submitlog={submitlog}
        />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/main">
        <MainPage
          loggedUser={loggedUser}
          myinfo={myinfo}
          setmyinfo={setmyinfo}
          myinfo={myinfo}
        />
      </Route>
      <Route path="/nearby">
        <UserProfile users={users} />
      </Route>
      <Route path="/challenges">
        <Challenges />
      </Route>
      <Route path="/myprofile">
        <MyProfilePage
          loggedUser={loggedUser}
          myinfo={myinfo}
          setmyinfo={setmyinfo}
        />
      </Route>
      <Route path="/userprofile">
        <UserProfile users={users} setUsers={setUsers} />
      </Route>
      <Route path="/mentorform">
        <MentorForm />
      </Route>
      <Route path="/navbar">
        <NavBar />
      </Route>
    </div>
  );
}

export default App;

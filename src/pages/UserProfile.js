import React from "react";
import NavBar from "../components/NavBar";
// import Image from "react-graceful-image";

const UserProfile = ({ users }) => {
  return (
    <div>
      <div style={{ columnCount: 3, columnGap: "1em" }}>
        <p>{users.username}</p>
      </div>
      <NavBar />
    </div>
  );
};

export default UserProfile;

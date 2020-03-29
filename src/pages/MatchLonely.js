import React from "react";
import "./Match.css";
import profilePic from "../assets/images/calcifer.png";

const MatchLonely = ({ likedUsers, superLikedUsers }) => (
  <div id="lonely">
    <h6 className="lonelyTitle">There is no new buddy around you.</h6>

    <span className="pulse">
      <img src={profilePic} alt="You..." />
    </span>

    <div id="liked-people">
      {likedUsers.length > 0 ?
        (<p>People you wish to workout with. <br />Let's hope they like you too!</p>) : (
          ""
        )
      }
      <div className="container">
        {likedUsers.map(person => (
          <div key={person.id} className="liked-person">
            <div className="liked-person-image">
              <img
                src={`/images/${person.image}`}
                alt={`You liked ${person.name}`}
              />
            </div>
          </div>
        ))}
      </div>

      <p>
        {superLikedUsers.length > 0
          ? "People you would die to workout with!"
          : ""}
      </p>

      <div className="container">
        {superLikedUsers.map(person => (
          <div key={person.id} className="liked-person">
            <div className="liked-person-image">
              <img
                src={`/images/${person.image}`}
                alt={`You liked ${person.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MatchLonely;

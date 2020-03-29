import React from "react";
import "./Match.css";
import like from "../assets/images/like.png";
import superlike from "../assets/images/superlike.png";
import dislike from "../assets/images/dislike.png";
import rewind from "../assets/images/rewind.png";

const MatchActions = ({ person, modifySuperficialChoices }) => (
  <div id="actions">
    <button type="button">
      {/* <img src={rewind} alt="Rewind User" /> */}
      <img src="https://img.icons8.com/metro/48/f89940/undo.png" className="rewindIcon" />
      <img src="https://img.icons8.com/metro/48/cf8035/undo.png" className="rewindIconShadow" />
    </button>
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoices(person.id, "ADD_TO_DISLIKED_USERS")
      }
    >
      {/* <img src={dislike} alt="Dislike User" /> */}
      <i className="fas fa-times dislikeIcon"></i>
      <i className="fas fa-times dislikeIconShadow"></i>
    </button>
    <button
      type="button"
      onClick={() => modifySuperficialChoices(person.id, "ADD_TO_LIKED_USERS")}
    >
      <img src="https://img.icons8.com/ios-filled/100/d4b38d/flex-biceps.png" className="likeIcon" />
      <img src="https://img.icons8.com/ios-filled/100/6b573e/flex-biceps.png" className="likeIconShadow" />
      {/* <img src={like} alt="Like User" /> */}
    </button>
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoices(person.id, "ADD_TO_SUPERLIKED_USERS")
      }
    >
      {/* <img src={superlike} alt="Superlike User" /> */}
      <i className="fas fa-medal superLikeIcon"></i>
      <i className="fas fa-medal superLikeIconShadow"></i>
    </button>
  </div>
);

export default MatchActions;

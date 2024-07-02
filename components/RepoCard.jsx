import React from "react";
import { Link } from "react-router-dom";

export default function RepoCard(props) {
  return (
    <div className="cardContainer">
      <img src={props.image} alt="ronak" />
      <div className="userInfo">
        <div style={{ fontSize: "16px" }}>{props.name}</div>
        <div style={{ color: "red", fontSize: "16px", marginBottom: "8px" }}>
          Language:{props.language}
        </div>
        <span>
          Owned By:{" "}
          <Link
            style={{ textDecoration: "none", color: "red"}}
            to={`/userProfile/${props.ownerName}`}
          >
            {props.ownerName}
          </Link>
        </span>
        <Link to={props.url} target="_blank">
          <button className="userBtn">Repo Details</button>
        </Link>
      </div>
    </div>
  );
}

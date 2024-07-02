import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AuthProfile({ userName }) {
  const [gitUser, setGituser] = useState([]);
  const getGitUser = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    setGituser(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUser().catch((e) => console.error(e));
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{marginTop:"20px", color:"white"}}>Authorize Profile</h2>
      <div className="profileContainer">
        <img src={gitUser.avatar_url} alt="" />
        <div className="profileInfo">
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>
            {gitUser.login}
          </span>
          <span>{gitUser.name}</span>
          <div style={{color:"red", }}>Public Repo:{gitUser.public_repos}</div>
          <div className="publicCount">
            <span style={{marginRight:"4px"}}>Followers: {gitUser.followers}</span>
            <span>Following: {gitUser.following}</span>
          </div>
          <span>Location: {gitUser.location}</span>
          <Link to={`${gitUser.html_url}`} target="_blank">
            <button className="repoBtn">View On GitHub</button>
          </Link>
        </div>
      </div>
      <div className="line"></div>
      <span>{gitUser.bio}</span>
    </div>
  );
}

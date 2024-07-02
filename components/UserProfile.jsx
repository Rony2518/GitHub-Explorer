import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { username } = useParams();
  const [gitUser, setGituser] = useState([]);

  const getGitUser = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
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
      <h2 style={{marginTop:"20px", color:"white"}}>User Profile</h2>
      <div className="profileContainer">
        <img src={gitUser.avatar_url} alt="" />
        <div className="profileInfo">
          <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)" }}>
            {gitUser.login}
          </span>
          <span>{gitUser.name}</span>
          <div className="publicCount">
            <span style={{marginRight:"4px"}}>Followers: {gitUser.followers}</span>
            <span>Following: {gitUser.following}</span>
          </div>
          <Link to={`${gitUser.html_url}`} target="_blank">
            <button className="repoBtn">Show Repos</button>
          </Link>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

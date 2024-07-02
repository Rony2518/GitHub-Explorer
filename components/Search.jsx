import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Search() {
  const [userName, setUserName] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState("Submit");
  const [attempts, seAttempts] = useState(3);
  const navigate = useNavigate();

  const getGitUser = async (e) => {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    if (response.status === 200) {
      navigate(`/userProfile/${userName}`);
    }
    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      setLoading("Loading");
      getGitUser().catch(() => {
        setLoading("submit");
        seAttempts((currentAttempts) => currentAttempts - 1);
        setErrorMsg(`User Does Not Exist! ${attempts} is Left`);
      });
    }
  };

  useEffect(() => {
    if (attempts <= 0) {
      setErrorMsg("Too Many Attempts, REDIRECTING!!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [attempts, navigate]);
  return (
    <div className="formContainer">
      {errorMsg ? (
        <p style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
          {errorMsg}
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value)
            setErrorMsg(null)
          }}
          placeholder="Github Surname"
          value={userName ? userName : ""}
        />
        <input type="submit" className="formBtn" value={loading}/>
      </form>
    </div>
  );
}

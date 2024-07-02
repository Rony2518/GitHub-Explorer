import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Login({ setUserName, setIsLogged }) {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState("Submit");
  const Navigate = useNavigate()

  const dummyDataObject = {
    login: "mojombo",
    password: "1234",
  };

  function handleSubmit(e) {
    e.preventDefault()
    if (
      loginUserName === dummyDataObject.login &&
      loginPassword === dummyDataObject.password
    ) {
      setUserName(loginUserName);
      setIsLogged(true);
      Navigate('/authProfile')
    } else {
      setErrorMsg("Cradietials Not Matched")
    }
  }

  return (
    <div className="formContainer">
      <h2 style={{marginTop:"20px", color:"white", textAlign:"center",marginBottom:"20px"}}>Login</h2>
       {errorMsg ? (
        <p style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
          {errorMsg}
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UserName"
          onChange={(e) => setLoginUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <input type="submit" className="formBtn" value={loading} />
      </form>
    </div>
  );
}

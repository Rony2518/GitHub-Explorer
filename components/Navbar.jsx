import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { activate } from "firebase/remote-config";
import { disableNetwork } from "firebase/firestore";

export default function Navbar({ isLogged }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar">
      <nav>
        <Link to={"/"}>
          <h3 className="logo">GitHub Explorer</h3>
        </Link>
        <ul className={`navContainer ${isActive ? "active" : ""}`}>
          <li>
            <NavLink to={"/"}>Repos</NavLink>
          </li>
          <li>
            <NavLink to={"/users"}>Users</NavLink>
          </li>
          <li>
            <NavLink to={"/authProfile"}>Profile</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
          </li>
          {!isLogged && (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}
          <button className="navBtn closeBtn" onClick={toggleNavbar}>
            <FaTimes />
          </button>
        </ul>
        <button className="navBtn" onClick={toggleNavbar}>
          <FaBars />
        </button>
      </nav>
      <Outlet />
    </div>
  );
}

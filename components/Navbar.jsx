import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
            <div className="hoverLine"></div>
          </li>
          <li>
            <NavLink to={"/users"}>Users</NavLink>
            <div className="hoverLine"></div>
          </li>
          <li>
            <NavLink to={"/authProfile"}>Profile</NavLink>
            <div className="hoverLine"></div>
          </li>
          <li>
            <NavLink to={"/search"}>Search</NavLink>
            <div className="hoverLine"></div>
          </li>
          {!isLogged && (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
              <div className="hoverLine"></div>
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

import React, { useState, useEffect, Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <>
      <nav
        className={[...navbarClasses, "navbar", "container"].join(" ")}
        id="navbar"
      >
        <div className="navbar-main">
          <div className="navbar-logo">
            <img src="./IMG/HEADER/logo (1).png"></img>
          </div>

          <div className="navbar-tabs">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/feature">Feature</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/pricing">pricing</Link>
              <Link to="/contact">contact</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

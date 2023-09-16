import React from "react";
import "./Header.css";
// import { AiFillApple } from "react-icons/ai";
// import { DiAndroid } from "react-icons/di";
// import {react-icon} from 'react-icon';
const Header = () => {
  return (
    <>
      <header className="header container">
        <div className="header-back-img">
          <img src="./IMG/HEADER/Artwork.png"></img>
        </div>
        <div className="header-main">
          <div className="header-text">
            <div className="header-text-main">
              <h1>Software solutions in your hands.</h1>
              <p>
                Orions is a universal app that helps you setup your apps in a
                beautiful and effective way to get more downloads across Android
                and iOS platforms.
              </p>
              <div className="button-main ">
                <div className="header-button same">
                  <a className="header-button-btn1 ">
                    <div className="header-button-btn1-part1">
                      <i class="fa-brands fa-google-play"></i>
                    </div>
                    <div className="header-button-btn1-part2">
                      <span className="span1">GET IT ON</span>
                      <span className="span2">Google Play</span>
                    </div>
                  </a>
                </div>
                <div className="header-button1 ">
                  <a className="header-button-btn2 same1">
                    <div className="header-button-btn2-part2 ">
                      <i class="fa-brands fa-apple"></i>
                    </div>
                    <div className="header-button-btn1-part2">
                      <span className="span1">GET IT ON</span>
                      <span className="span2">App Store</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-img">
            <img src="./IMG/HEADER/hero-phone.png"></img>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

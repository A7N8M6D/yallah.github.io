import React, { useCallback, useState } from "react";
import "./Feature.css";
import "../../App.css";
import Feature_menu from "./Feature.api";
// import { AiFillSetting} from "react-icons/ai";
// import { BiAccessibility } from "react-icons/bi";
const Feature = () => {
  return (
    // console.log(useCallback());
    <div className="Feature container">
      <div className="feature-main">
        <div className="feature-banner">
          {/* <a>{ BiAccessibility } </a> */}
          <div className="feature-heading">
            <p>1</p>
            <p>APP FEATURES</p>
            
          </div>
          <h1>
            <span> Get surprised by amazing features.</span>
          </h1>
        </div>

        <div className="feature-Menu">
          {Feature_menu.map((currElem) => {
            return (
              <>
                <div className="feature-background">
                  <div className="feature-Menu-main">
                    <h1> {currElem.iframe}</h1>
                    <p> {currElem.id}</p>
                    <p>{currElem.des}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;

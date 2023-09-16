import React from "react";
import "../Banner2/Banner2.css";
import "../../App.css";
import "./Banner3.css";
import { data,data1} from "../Pages/Home/Home";
import { useContext } from "react";
const Banner3 = () => {
    const nam=useContext(data);
    const na=useContext(data1);
  return (
    <div className="Banner2 container">
      <div className="Banner2-main Banner3-main">
        <div className="Banner2-img">
          <div className="Banner2-img-main Banner3-img-main">
            <div className="backgroundd backgroundd3"></div>
            <img
              className="img1"
              src="./IMG/Banner3/feature-section-2-img.jpg"
            ></img>
            <img className="img2" src="./IMG/Banner3/Banner3-mob.png"></img>
          </div>
        </div>
        <div className="Banner2-text Banner3-text">
          <div className="Banner2-text-main Banner3-text-main">
            <p className="p"> `{na}App Features{nam}`</p>
            <h1>Accessible from everywhere.</h1>
            {/* <p>
                            Seed doesn't he dry, male creepeth god them their in which by firmament to days two deep yielding darkness bring likeness.
                        </p> */}
            <div className="Banner2-menu">
              <div className="Banner2-menu-1">
                <i class="fa-solid fa-photo-film"></i>
                <span> Video calls</span>
                He saw lesser whales man air. Seasons void fly replenish man
                divided open fifth own fruitful.
              </div>

              <div className="Banner2-menu-1">
                <i class="fa-regular fa-rectangle-list"></i>
                <span> Private groups</span>
                <p>
                  Give whales creeping sixth. Blessed itself created dry they're
                  firmament face whose face lesser spirit day dry.
                </p>
              </div>
              <div className="Banner2-menu-1">
                <i class="fa-regular fa-rectangle-list"></i>
                <span> Cloud storage</span>
                <p>
                  Waters seasons of place likeness good day let they're evening
                  replenish years of over that.
                </p>
              </div>
            </div>
            <div className="button1">
              <a>GetStarted</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;

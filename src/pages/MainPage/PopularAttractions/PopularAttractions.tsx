import React from "react";

import { useNavigate } from "react-router";

import { RateStareIcon } from "../MainPageIcons";

import cablecar from "../../../assests/img/CableCar.jpg";
import monument from "../../../assests/img/TarasShevchenko.jpg";
import cathedral from "../../../assests/img/TheCathedral.jpg";

import "./style.scss";

export const PopularAttractions: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    // navigate(PageRoutes.Home);
    alert(`It's working!`);
  };
  return (
    <>
      <p className="mainpage__subtext">Popular attractions</p>
      <div className="mainpage__attractionsBlock">
        <div className="mainpage__attractions">
          <img
            onClick={handleRedirect}
            className="cabelcar"
            src={cablecar}
            alt=""
          />
          {/* <div className="mainpage__rateBlock">{RateStareIcon}</div> */}
          <div className="mainpage__textAttraction">
            <h2 className="attraction__title">Cable Car</h2>
            <p>
              Suspended cable car in Kharkov is a walking and transport system
              that connects Sumskaya Street with Pavlovo Pole microdistrict
              through the...
            </p>
          </div>
        </div>
        <div className="mainpage__attractions">
          <img
            onClick={handleRedirect}
            className="monument"
            src={monument}
            alt=""
          />
          {/* <div className="mainpage__rateBlock">{RateStareIcon}</div> */}
          <div className="mainpage__textAttraction">
            <h2 className="attraction__title">Monument to Taras Shevchenko</h2>
            <p>
              The monument to Taras Shevchenko is a monument to the Ukrainian
              poet, writer, artist and thinker Taras Grigorievich Shevchenko...
            </p>
          </div>
        </div>
        <div className="mainpage__attractions">
          <img
            onClick={handleRedirect}
            className="cathedral"
            src={cathedral}
            alt=""
          />
          {/* <div className="mainpage__rateBlock">{RateStareIcon}</div> */}
          <div className="mainpage__rightCard ">
            <h2 className="attraction__title">The Cathedral</h2>
            <p>Text</p>
          </div>
        </div>
      </div>
    </>
  );
};

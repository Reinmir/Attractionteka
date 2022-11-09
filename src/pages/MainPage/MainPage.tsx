import React from "react";
import { useNavigate } from "react-router";

import { Header } from "src/components/Header/Header";
import { PageRoutes } from "src/constants/routeNames";
import { RateStareIcon } from "./MainPageIcons";
import "./style.scss";

const MainPage = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    // navigate(PageRoutes.Home);
    alert(`It's working!`);
  };

  return (
    <>
      <Header />
      <div className="mainpage__container">
        <div className="mainpage__wrapper">
          <div className="mainpage__photoContainer">
            <div className="mainpage__entrancePhoto">
              <img
                src={require("../../assests/img/mainpage.png")}
                alt="Kharkiv fountain"
              />
              <div className="mainpage__textContainer">
                <h1 className="mainpage__title">Attractionteka</h1>
                <h2 className="mainpage__subtitle">
                  Kharkiv is a cozy home for your soul
                </h2>
                <div className="mainpage__textBlock">
                  <h3 className="mainpage__text">Find interesting sights</h3>
                </div>
              </div>
            </div>
          </div>
          <p className="mainpage__subtext">Popular attractions</p>
          <div className="mainpage__attractionsBlock">
            <div className="mainpage__attractions">
              <img
                onClick={handleRedirect}
                className="cabelcar"
                src={require("../../assests/img/CableCar.jpg")}
                alt=""
              />
              <div className="mainpage__textAttraction">
                <div className="mainpage__rateBlock">{RateStareIcon}</div>
                <h2>Cable Car</h2>
                <p>
                  Suspended cable car in Kharkov is a walking and transport
                  system that connects Sumskaya Street with Pavlovo Pole
                  microdistrict through the...
                </p>
              </div>
            </div>
            <div className="mainpage__attractions">
              <img
                onClick={handleRedirect}
                className="monument"
                src={require("../../assests/img/TarasShevchenko.jpg")}
                alt=""
              />
              <div className="mainpage__rateBlock">{RateStareIcon}</div>
              <div className="mainpage__textAttraction">
                <h2>Monument to Taras Shevchenko</h2>
                <p>
                  The monument to Taras Shevchenko is a monument to the
                  Ukrainian poet, writer, artist and thinker Taras Grigorievich
                  Shevchenko...
                </p>
              </div>
            </div>
            <div className="mainpage__attractions">
              <img
                onClick={handleRedirect}
                className="cathedral"
                src={require("../../assests/img/TheCathedral.jpg")}
                alt=""
              />
              <div className="mainpage__rateBlock">{RateStareIcon}</div>
              <div className="mainpage__textAttraction">
                <h2>The Cathedral</h2>
                <p>Text</p>
              </div>
            </div>
          </div>
          <div className="mainpage__newsBlock">
            <div className="mainpage__news">1</div>
            <div className="mainpage__news">2</div>
            <div className="mainpage__news">3</div>
          </div>
          <div className="mainpage__newsBlock">
            <div className="mainpage__news">4</div>
            <div className="mainpage__news">5</div>
            <div className="mainpage__news">6</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

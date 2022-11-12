import React from "react";

import { Header } from "src/components/Header/Header";

import { News } from "./News/News";
import { PopularAttractions } from "./PopularAttractions/PopularAttractions";
import "./style.scss";

const MainPage = () => {
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
          <PopularAttractions />
          <News />
        </div>
      </div>
    </>
  );
};

export default MainPage;

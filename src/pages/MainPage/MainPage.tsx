import React from "react";

import { Header } from "src/components/Header/Header";

import { NewsBlock } from "./News/NewsBlock";
import { PopularAttractions } from "./PopularAttractions/PopularAttractions";
import mainpage from "../../assests/img/mainpage.png"
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
                src={mainpage}
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
          <NewsBlock />
        </div>
      </div>
    </>
  );
};

export default MainPage;

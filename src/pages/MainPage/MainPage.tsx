import React from "react";
import { Header } from "src/components/Header/Header";
import "./style.scss";

const MainPage = () => {
  return (
    <>
      <Header />
      <div className="mainpage__container">
        <div className="mainpage__wrapper">
          <div>
            <div className="mainpage__entrancePhoto">
              <img
                src={require("../../assests/img/mainpage.png")}
                alt="Kharkiv fountain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;

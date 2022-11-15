import React, { useRef } from "react";

import { useNavigate } from "react-router";

import "./style.scss";

import { PageRoutes } from "src/constants/routeNames";

import Attractions, { Attraction } from "./Attractions";

import { RateStareIcon } from "../MainPageIcons";
import { RateStarBlock } from "../RateStarBlock/RateStarBlock";


export const PopularAttractions: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(PageRoutes.Home);
    // alert(`It's working!`);
  };

  const config: Attraction[] = Attractions;
  return (
    <>

      <p className="mainpage__subtext">Popular attractions</p>
      <div className="mainpage__attractionsBlock">
        {config.map((item) =>

          <div className="mainpage__attractions" >
            <RateStarBlock peopleRated={item.peopleRated} rate={item.rate} />
            <img
              onClick={handleRedirect}
              className="imgAttr"
              src={item.img}
              alt=""
            />
            <div className="mainpage__textAttraction">
              <h2 className="attraction__title">{item.title}</h2>
              <p>
                {item.text}
              </p>
            </div>
          </div>
        )}</div>
    </>
  );
};

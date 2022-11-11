import React from "react";
import "./style.scss";

import news_1 from "src/assests/img/News/News_1.png";
import news_2 from "src/assests/img/News/News_2.png";
import news_3 from "src/assests/img/News/News_3.png";
import news_4 from "src/assests/img/News/News_4.png";
import news_5 from "src/assests/img/News/News_5.png";
import news_6 from "src/assests/img/News/News_6.png";

export const News: React.FC = () => {
  return (
    <>
    <p className="mainpage__subtext">News</p>
      <div className="mainpage__newsBlock">
        <div className="mainpage__news">
          <img src={news_1} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">News title</h2>
            <p>
              Text
            </p>
          </div>
        </div>
        <div className="mainpage__news">
          <img src={news_2} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">News title</h2>
            <p>
              Text
            </p>
          </div>
        </div>
        <div className="mainpage__news">
          <img src={news_3} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">News title</h2>
            <p>
              Text
            </p>
          </div>
        </div>
      </div>
      <div className="mainpage__newsBlock">
        <div className="mainpage__news">
          <img src={news_4} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">News title</h2>
            <p>
              Text
            </p>
          </div>
        </div>
        <div className="mainpage__news">
          <img src={news_5} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">News title</h2>
            <p>
              Text
            </p>
          </div>
        </div>
        <div className="mainpage__news">
          <img src={news_6} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">News title</h2>
            <p>
              Text
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

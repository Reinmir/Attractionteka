import React from "react";
import NewsCard,{ News } from "./News";
import "./style.scss";



export const NewsBlock: React.FC = () => {

  const config: News[] = NewsCard;


  return (
    <>
      <p className="mainpage__subtext">News</p>
      <div className="mainpage__newsBlock">
        {config.map(item => <div className="mainpage__news">
          <img src={item.img} alt="" />
          <div className="news__textBlock">
            <h2 className="news__title">{item.title}</h2>
            <p>
              {item.text}
            </p>
          </div>
        </div>)}
        {/* <div className="mainpage__news">
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
        </div> */}
      </div>
    </>
  );
};

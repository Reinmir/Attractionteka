import news_1 from "src/assests/img/News/News_1.png";
import news_2 from "src/assests/img/News/News_2.png";
import news_3 from "src/assests/img/News/News_3.png";
import news_4 from "src/assests/img/News/News_4.png";
import news_5 from "src/assests/img/News/News_5.png";
import news_6 from "src/assests/img/News/News_6.png";


export interface News {
    title: string,
    text: string,
    img: string
}

const NewsCard: News[] = [
    {
        title: 'News Title',
        text: "text",
        img: news_1
    },
    {
        title: 'News Title',
        text: "text",
        img: news_2
    },
    {
        title: 'News Title',
        text: "text",
        img: news_3
    },
    {
        title: 'News Title',
        text: "text",
        img: news_4
    },
    {
        title: 'News Title',
        text: 'text',
        img: news_5
    },
    {
        title: 'News Title',
        text: "text",
        img: news_6
    }
]

export default NewsCard
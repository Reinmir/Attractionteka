import cablecar from "src/assests/img/CableCar.jpg";
import monument from "src/assests/img/TarasShevchenko.jpg";
import cathedral from "src/assests/img/TheCathedral.jpg";

export interface Attraction {
    title: string,
    text: string,
    img: string
}


const Attractions: Attraction[] = [
    {
        title: 'Cable car',
        text: ' Suspended cable car in Kharkov is a walking and transport system that connects Sumskaya Street with Pavlovo Pole microdistrict through the...',
        img: cablecar,
    },
    {
        title: 'Monument to Taras Shevchenko',
        text: ' The monument to Taras Shevchenko is a monument to the Ukrainian poet, writer, artist and thinker Taras Grigorievich Shevchenko...',
        img: monument,
    },
    {
        title: 'The Cathedral',
        text: ' Text',
        img: cathedral,
    },

]


export default Attractions
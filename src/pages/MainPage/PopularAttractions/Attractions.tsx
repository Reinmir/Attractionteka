import cablecar from "src/assests/img/CableCar.jpg";
import monument from "src/assests/img/TarasShevchenko.jpg";
import cathedral from "src/assests/img/TheCathedral.jpg";

export interface Attraction {
    title: string,
    text: string,
    img: string,
    peopleRated: string,
    rate: string,
}


const Attractions: Attraction[] = [
    {
        title: 'Cable car',
        text: ' Suspended cable car in Kharkov is a walking and transport system that connects Sumskaya Street with Pavlovo Pole microdistrict through the...',
        img: cablecar,
        peopleRated: '(322)',
        rate: '5.0'
    },
    {
        title: 'Monument to Taras Shevchenko',
        text: ' The monument to Taras Shevchenko is a monument to the Ukrainian poet, writer, artist and thinker Taras Grigorievich Shevchenko...',
        img: monument,
        peopleRated: '(218)',
        rate: '5.0'
    },
    {
        title: 'The Cathedral',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ad incidunt dignissimos, vitae omnis veniam adipisci dolore sequi in deleniti beatae natus?',
        img: cathedral,
        peopleRated: '(184)',
        rate: '4.9'
    },

]


export default Attractions
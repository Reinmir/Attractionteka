import React from 'react';

import { RateStareIcon } from '../MainPageIcons';

import './style.scss'

interface RateStarBlockProps {
    peopleRated: string,
    rate: string
}

export const RateStarBlock: React.FC<RateStarBlockProps> = ({ peopleRated, rate}) => {

    return (
        <div className='ratestar__container'>
            <div className="ratestar__wrapper">
                <div className='ratestar__rateIcon'>{RateStareIcon}</div>
                <p className='ratestar__rate'>{rate}</p>
                <p className='ratestar__peopleRated'>{peopleRated}</p>
            </div>
        </div>
    )
}
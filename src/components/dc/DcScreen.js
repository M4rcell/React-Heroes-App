import React from 'react'
import { HeroeList } from '../heroes/HeroeList';

export const DcScreen = ({hero}) => {

    console.log(hero);

    return (
        <div>
            <HeroeList publisher={'DC Comics'}/>
        </div>
    )
}

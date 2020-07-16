
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { DcScreen } from '../dc/DcScreen';
import { HeroCard } from './HeroCard';

export const HeroeList = ({publisher}) => {

    const heroes =  useMemo(() => getHeroesByPublisher(publisher), [publisher]); //lo memorizamos para no estar refrescando y llamando cada vez
 
    //const heroes = getHeroesByPublisher(publisher);


    return (
        <div className="card-columns animate__animated animate__fadeIn"> 
            {
                heroes.map(hero =>(
                    
                        <HeroCard 
                          key={hero.id}
                          {...hero}
                         
                        >

                        </HeroCard>
                    
                ))
            }
            
        </div>
    )
}

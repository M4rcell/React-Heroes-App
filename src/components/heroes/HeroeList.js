
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { DcScreen } from '../dc/DcScreen';
import { HeroCard } from './HeroCard';

export const HeroeList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher);


    return (
        <div className="card-columns"> 
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

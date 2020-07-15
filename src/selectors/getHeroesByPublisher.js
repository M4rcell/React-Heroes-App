
import {heroes} from '../data/heroes';


export const getHeroesByPublisher =(publisher)=>{

    const validPublisher = ['DC Comics', 'Marvel Comics'];//validar solo permiter estos valores

    if (!validPublisher.includes(publisher)) {

        throw new Error(`Publiher "${publisher}" no es Correcto`);
        
    }

    return heroes.filter(hero => hero.publisher===publisher);
}
import queryString  from 'query-string';

import React, { useMemo } from 'react';
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
   // console.log(location.search);
   //console.log(queryString.parse(location.search));

   const {q=''} =queryString.parse(location.search);
   console.log(q);


  
    const [values,handleInputChange,reset] =useForm({
                                                    searchText:''     
                                                    });
    const {searchText}=values;

    const heroesFilters = useMemo(() => getHeroesByName(q), [q])// se dispara cuando q cambie

    //const heroesFilters=getHeroesByName(searchText);


    const handleSearch=(e)=>{
        e.preventDefault();

        history.push(`?q=${searchText}`);

        reset();
    }

    return (
        <div>
            <h1> Search Screem</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                    <hr/>

                    <form onSubmit={handleSearch}>
                        <input 
                        type="text"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        placeholder="Find your hero"
                        className="form-control"
                        onChange={handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                        search..
                        </button>
                    </form>

                </div>

                <div className="col-7">
                  <h4> Resultados</h4>
                  <hr/>
                   {
                       (q==='')
                        && <div className="alert alert-info">
                          Search a Heroes
                        </div>
                   }
                   {
                       (q!=='' && heroesFilters.length===0)
                        && <div className="alert alert-danger">
                           There is no hero with {q}
                        </div>
                   }
               
                  {
                    heroesFilters.map(hero=>(
                        <HeroCard 
                            key={hero.id}
                            {...hero}
                        />
                    ))
                  }
                </div>

            </div>
        </div>
    )
}

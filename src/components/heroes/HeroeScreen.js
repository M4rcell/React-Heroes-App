import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroeScreen = ({history}) => {
  const { heroeId } = useParams();
  
  const hero =  useMemo(() => getHeroesById(heroeId), [heroeId]);//lo memorizamos para no estar refrescando y llamando cada vez

  //const hero = getHeroesById(heroeId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handlReturn =()=>{
    if (history.length) {
        
        history.push('/');
    }else{

        history.goBack();
    }
  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  return (
    <div>
      <div className="row mt-5" >
        <div className="col-4">
            <img 
                
                src={`../assets/heroes/${heroeId}.jpg`}
                alt={superhero}
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
        </div>

        <div className="col-8">
           <h3>{superhero}</h3>
           <ul className="list-group list-group-flush">
              <li className="list-group-item">Alter Ego        : <b>{alter_ego}</b></li>
              <li className="list-group-item">Publisher        : <b>{publisher}</b></li>
              <li className="list-group-item"> First Apparence : <b>{first_appearance}</b></li>

           </ul>
           <h5>Charactres</h5>
           <p>{characters}</p>
           <button className="btn btn-outline-info"
                   onClick={handlReturn}>
               Return
           </button>

        </div>
      </div>
    </div>
  );
};

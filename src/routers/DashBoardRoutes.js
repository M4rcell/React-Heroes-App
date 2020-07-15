
import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { DcScreen } from '../components/dc/DcScreen'

export const DashBoardRoutes = () => {
    return (
        <>
         <Navbar/>

         <div>
             
             <Switch>
                 <Route exact path="/marvel" component={MarvelScreen}/> 
                 <Route exact path="/heroe/:heroeId" component={HeroeScreen}/>
                 <Route exact path="/dc" component={DcScreen}/>
                 
                 <Redirect to="/marvel"/> {/* si no estamo en niguno de estos  rutas redirecciona a marve  */}
                 
             </Switch>
         </div>
            
        </>
    )
}

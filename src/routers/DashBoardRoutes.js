
import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashBoardRoutes = () => {
    return (
        <>
         <Navbar/>

         <div className="container mt-5">
             
             <Switch>
                 <Route exact path="/marvel" component={MarvelScreen}/> 
                 <Route exact path="/hero/:heroeId" component={HeroeScreen}/>
                 <Route exact path="/dc" component={DcScreen}/>
                 <Route exact path="/search" component={SearchScreen}/>

                 <Redirect to="/marvel"/> {/* si no estamo en niguno de estos  rutas redirecciona a marve  */}
                 
             </Switch>
         </div>
            
        </>
    )
}

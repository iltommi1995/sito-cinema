import React from "react";

import Home from "../../home/Home";
import OrariFilmBicocca from "../../orariFilm/orariFilmBicocca";
import OrariFilmCentrale from "../../orariFilm/orariFilmCentrale";

import {Switch, Route} from "react-router-dom";
import NomiFilm from "../../cercaFilm/cercaFilm";


function MainTemplate() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path={"/orariFilmBicocca"} component={OrariFilmBicocca}/>
                <Route path={"/orariFilmCentrale"} component={OrariFilmCentrale}/>
                <Route path={"/cercaFilm"} component={NomiFilm}/>
            </Switch>
        </div>
    )
}

export default MainTemplate;
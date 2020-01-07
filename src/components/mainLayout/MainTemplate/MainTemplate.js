import React from "react";

import Home from "../../home/Home";
import OrariFilmBicocca from "../../orariFilm/orariFilmBicocca";
import OrariFilmCentrale from "../../orariFilm/orariFilmCentrale";

import {Switch, Route} from "react-router-dom";
import CercaFilm from "../../cercaFilm/cercaFilm";


function MainTemplate() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path={"/orariFilmBicocca"} component={OrariFilmBicocca}/>
                <Route path={"/orariFilmCentrale"} component={OrariFilmCentrale}/>
                <Route path={"/cercaFilm"} component={CercaFilm}/>
            </Switch>
        </div>
    )
}

export default MainTemplate;
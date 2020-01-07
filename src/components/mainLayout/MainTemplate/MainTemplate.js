import React from "react";

import Home from "../../home/Home";
import OrariFilmBicocca from "../../orariFilm/orariFilmBicocca";
import OrariFilmCentrale from "../../orariFilm/orariFilmCentrale";

import {Switch, Route} from "react-router-dom";
import CercaFilm from "../../cercaFilm/cercaFilm";
import AreaPersonale from "../../AreaPersonale/AreaPersonale";


function MainTemplate() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path={"/orariFilmBicocca"} component={OrariFilmBicocca}/>
                <Route path={"/orariFilmCentrale"} component={OrariFilmCentrale}/>
                <Route path={"/cercaFilm"} component={CercaFilm}/>
                <Route path={"/areaPersonale"} component={AreaPersonale}/>
            </Switch>
        </div>
    )
}

export default MainTemplate;
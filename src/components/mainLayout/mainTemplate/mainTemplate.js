import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../../home/home";
import OrariFilmBicocca from "../../orariFilm/orariFilmBicocca";
import OrariFilmCentrale from "../../orariFilm/orariFilmCentrale";
import CercaFilm from "../../cercaFilm/cercaFilm";
import AreaPersonale from "../../areaPersonale/areaPersonale";
import Articolo from "../../blog/articoli/articolo";
import Blog from "../../blog/blog";

function MainTemplate() {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path={"/orariFilmBicocca"} component={OrariFilmBicocca}/>
                <Route path={"/orariFilmCentrale"} component={OrariFilmCentrale}/>
                <Route path={"/cercaFilm"} component={CercaFilm}/>
                <Route path={"/areaPersonale"} component={AreaPersonale}/>
                <Route path={"/blog"} component={Blog}/>
                <Route exact path='/articoli/:id' component={Articolo} />
            </Switch>
        </div>
    )
}

export default MainTemplate;
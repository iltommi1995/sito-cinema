import React, {Component} from 'react';
import FilmData from '../../data/filmCentrale';
import "../../css/components/schedaFilm/schedaFilm.css";

import SchedaOrariFilm from "./schedaOrariFilm";
import FilmUscita from "../countdown/filmUscita";


class OrariFilmCentrale extends Component {
    render() {
        return(
            <div>
                <h1>Cinema Milano Centrale</h1>
                {FilmData.map(filmDetail =><SchedaOrariFilm film={filmDetail} />)}
                 <FilmUscita />
            </div>
        )
    }
}

export default OrariFilmCentrale;
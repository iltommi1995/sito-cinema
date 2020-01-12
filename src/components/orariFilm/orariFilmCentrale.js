
import React, {Component} from 'react';
import FilmData from '../../data/filmCentrale';
import "../../css/components/schedaFilm/schedaFilm.css";


import SchedaOrariFilmV2 from "./schedaOrariFilmV2";


class OrariFilmCentrale extends Component {
    render() {
        return(
            <div>
                <h1 className="acca1">Cinema Milano Centrale. </h1>

                {
                    FilmData.map(filmDetail =><SchedaOrariFilmV2 film={filmDetail} />)}
            </div>
        )
    }
}

export default OrariFilmCentrale;
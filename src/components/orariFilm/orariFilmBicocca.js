
import React, {Component} from 'react';
import FilmData from '../../data/filmBicocca';
import "../../css/components/schedaFilm/schedaFilm.css";


import SchedaOrariFilmV2 from "./schedaOrariFilm";


class OrariFilmBicocca extends Component {
    render() {
        return(
            <div>
                <h1>Cinema Milano Bicocca </h1>

                {FilmData.map(filmDetail =><SchedaOrariFilmV2 film={filmDetail} />)}
            </div>
        )
    }
}

export default OrariFilmBicocca;
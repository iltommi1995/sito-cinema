
import React, {Component} from 'react';
import FilmData from '../../data/filmBicocca';
import "../../css/components/schedaFilm/schedaFilm.css";


import SchedaOrariFilmV2 from "./schedaOrariFilmV2";


class OrariFilmBicocca extends Component {
    render() {
        return(
            <div>
                <h2>Cinema Milano Bicocca </h2>

                {
                    FilmData.map(filmDetail =><SchedaOrariFilmV2 film={filmDetail} />)}
            </div>
        )
    }
}

export default OrariFilmBicocca;
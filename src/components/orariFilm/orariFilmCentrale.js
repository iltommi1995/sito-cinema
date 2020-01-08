
import React, {Component} from 'react';
import FilmData from '../../data/filmCentrale';
import "../../css/components/schedaFilm/schedaFilm.css";

import SchedaOrariFilm from "./schedaOrariFilm";


class OrariFilmCentrale extends Component {
    render() {
        return(
            <div>
                <h2>Cinema Milano Centrale</h2>

                {FilmData.map((filmDetail, index)=>
                       <SchedaOrariFilm
                           film={{img: filmDetail.img, id:filmDetail.id, regista:filmDetail.regista, genere:filmDetail.genere,
                               durata:filmDetail.durata, cast:filmDetail.cast, titolo:filmDetail.titolo, sinossi:filmDetail.sinossi,
                               orariprimo: filmDetail.orari.primo, orarisecondo:filmDetail.orari.secondo,
                               orariterzo:filmDetail.orari.terzo, orariquarto:filmDetail.orari.quarto}}/>
                )}
            </div>
        )
    }
}

export default OrariFilmCentrale;
import React        from "react";
import ModalExample from "../schedaFilm/schedaFilm";
import "../../css/components/orariFilm/schedaOrariFilm.css";

function schedaGiorni (data, day) {
    return(
        <div className="row div-orari">
            <div className="col-md-4 giorno col-sm-12 col-xs-12">
                <b className="h4-giorno">{day}:</b>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
                <p className="orario-film">{data.primo}</p>
                <p className="orario-film">{data.secondo}</p>
                <p className="orario-film">{data.terzo}</p>
                <p className="orario-film">{data.quarto}</p>
            </div>
        </div>

    )
}

function SchedaOrariFilm (data) {
    return(
            <div className="row scheda-film">

                <div className="col-lg-3 col-md-4 col-sm-12">
                    <img src={data.film.img} alt="immagine" className="img-scheda-film" fluid />
                </div>

                <div className="col-lg-4 col-md-8 col-sm-12 dati-film">
                    <h2 className="titolo-orari-film">{data.film.titolo}</h2>
                        <p><b>Regia:</b> {data.film.regista}</p>
                        <p><b>Genere:</b> {data.film.genere}</p>
                        <p><b>Durata:</b> {data.film.durata}</p>
                        <p><b>Cast:</b> {data.film.cast}</p>
                        <ModalExample
                            buttonLabel="Scheda del Film"
                            nomeFilm={data.film.titolo}
                            regista={data.film.regista}
                            genere={data.film.genere}
                            durata={data.film.durata}
                            cast={data.film.cast}
                            sinossi={data.film.sinossi}
                            immagine={data.film.img}
                        />
                </div>
                <div className="col-lg-5 col-md-12 orari">
                    { Object.keys(data.film.orari).map(key =>
                            schedaGiorni(data.film.orari[key], key)
                    )}
                </div>
            </div>
    )
}

export default SchedaOrariFilm;

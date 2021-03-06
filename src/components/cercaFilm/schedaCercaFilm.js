import React from "react";
import ModalExample from "../schedaFilm/schedaFilm";

function SchedaCercaFilm(props) {
    return(
        <div key={props.film.id} className="div-cerca-film col-lg-6 col-md-12">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={props.film.img} alt={"locandina " + props.film.titolo} className="img-cerca-film"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>{props.film.titolo}</h3>
                        <br/>
                        <p><b>Regia:</b> {props.film.regista}</p>
                        <p><b>Genere:</b> {props.film.genere}</p>
                        <p><b>Durata:</b> {props.film.durata}</p>
                        <p><b>Cast:</b> {props.film.cast}</p>
                        <ModalExample className="className"
                                      buttonLabel="Scheda del Film"
                                      nomeFilm={props.film.titolo}
                                      regista={props.film.regista}
                                      genere={props.film.genere}
                                      durata={props.film.durata}
                                      cast={props.film.cast}
                                      sinossi={props.film.sinossi}
                                      immagine={props.film.img}
                        />
                </div>
            </div>
        </div>
    )
}

export default SchedaCercaFilm;
import React from "react";
import ModalExample from "../schedaFilm/schedaFilm";


function SchedaCercaFilm(props) {
    return(
        <div key={props.film.id} className="prova-nuovo row">

                <div className="col-xl-3 ">
                    <img src={props.film.img} alt="immagine" className="imgCercaFilm"/>
                </div>
                <div className="col-xl-3 ">
                        <h3>{props.film.titolo}</h3>
                        <br/>
                        <p><b>Regia:</b> {props.film.regista}</p>
                        <p><b>Genere:</b> {props.film.genere}</p>
                        <p><b>Durata:</b> {props.film.durata}</p>
                        <p><b>Cast:</b> {props.film.cast}</p>
                        <ModalExample className="bottoneScheda"
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
    )
}

export default SchedaCercaFilm;
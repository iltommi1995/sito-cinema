import React from "react";
import {Col, Row} from "reactstrap";
import ModalExample from "../schedaFilm/schedaFilm";


function SchedaCercaFilm(props) {
    return(
        <div key={props.film.id} className="prova-nuovo">
            <Row >
                <Col className="col-xs-3">

                    <img src={props.film.img} alt="immagine" className="imgCercaFilm"/>

                </Col>
                <Col className="col-xs-3">
                    <div id="testoCercaFilm">
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
                </Col>
            </Row>
        </div>
    )
}

export default SchedaCercaFilm;
import React from "react";
import {Col, Row} from "reactstrap";
import ModalExample from "../schedaFilm/schedaFilm";

function SchedaOrariFilm (props) {
    return(
        <container>
            <Row className="scheda-film">
                <Col xs="3">
                    <img src={props.film.img} alt="immagine" className="img-scheda-film"/>
                </Col>
                <Col xs="3" className="colonna-dati-film">
                    <h3>{props.film.titolo}</h3>
                    <br/>
                    <p><b>Regia:</b> {props.film.regista}</p>
                    <p><b>Genere:</b> {props.film.genere}</p>
                    <p><b>Durata:</b> {props.film.durata}</p>
                    <p><b>Cast:</b> {props.film.cast}</p>
                    <ModalExample
                        buttonLabel="Scheda del Film"
                        nomeFilm={props.film.titolo}
                        regista={props.film.regista}
                        genere={props.film.genere}
                        durata={props.film.durata}
                        cast={props.film.cast}
                        sinossi={props.film.sinossi}
                        immagine={props.film.img}
                    />
                </Col>
                <Col xs="6" className="colonna-orari">
                    <Row>
                        <div className="giorno">
                            <h4 className="h4-giorno">Lunedì 06/01</h4>
                        </div>
                        <div>
                            <p className="orario-film">{props.film.orariprimo}</p>
                            <p className="orario-film">{props.film.orarisecondo}</p>
                            <p className="orario-film">{props.film.orariterzo}</p>
                            <p className="orario-film">{props.film.orariquarto}</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="giorno">
                            <h4 className="h4-giorno">Martedì 07/01</h4>
                        </div>
                        <div>
                            <p className="orario-film">{props.film.orariprimo}</p>
                            <p className="orario-film">{props.film.orarisecondo}</p>
                            <p className="orario-film">{props.film.orariterzo}</p>
                            <p className="orario-film">{props.film.orariquarto}</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="giorno">
                            <h4 className="h4-giorno">Mercoledì 08/01</h4>
                        </div>
                        <div>
                            <p className="orario-film">{props.film.orariprimo}</p>
                            <p className="orario-film">{props.film.orarisecondo}</p>
                            <p className="orario-film">{props.film.orariterzo}</p>
                            <p className="orario-film">{props.film.orariquarto}</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="giorno">
                            <h4 className="h4-giorno">Giovedì 09/01</h4>
                        </div>
                        <div>
                            <p className="orario-film">{props.film.orariprimo}</p>
                            <p className="orario-film">{props.film.orarisecondo}</p>
                            <p className="orario-film">{props.film.orariterzo}</p>
                            <p className="orario-film">{props.film.orariquarto}</p>
                        </div>
                    </Row>
                    <Row>
                        <div className="giorno">
                            <h4 className="h4-giorno">Venerdì 10/01</h4>
                        </div>
                        <div>
                            <p className="orario-film">{props.film.orariprimo}</p>
                            <p className="orario-film">{props.film.orarisecondo}</p>
                            <p className="orario-film">{props.film.orariterzo}</p>
                            <p className="orario-film">{props.film.orariquarto}</p>
                        </div>
                    </Row>
                </Col>
            </Row>

        </container>

    )
}

export default SchedaOrariFilm;
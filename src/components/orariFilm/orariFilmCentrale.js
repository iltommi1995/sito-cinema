import React, {Component} from 'react';
import FilmData from '../../data/FilmCentrale';
import "../../css/components/schedaFilm/SchedaFilm.css";
import {Button, Col, Row} from "reactstrap";
import ModalExample from "../mainLayout/schedaFilm/schedaFilm";

class OrariFilmCentrale extends Component {
    render() {
        return(
            <div>
                <h2>Cinema Milano Centrale</h2>

                {FilmData.map((filmDetail, index)=> {
                    return (
                        <container>
                            <Row className="scheda-film">
                                <Col xs="3">
                                    <img src={filmDetail.img} alt="immagine" className="img-scheda-film"/>
                                </Col>
                                <Col xs="3" className="colonna-dati-film">
                                    <h3>{filmDetail.titolo}</h3>
                                    <br/>
                                    <p><b>Regia:</b> {filmDetail.regista}</p>
                                    <p><b>Genere:</b> {filmDetail.genere}</p>
                                    <p><b>Durata:</b> {filmDetail.durata}</p>
                                    <p><b>Cast:</b> {filmDetail.cast}</p>
                                    <ModalExample
                                        buttonLabel="Scheda del Film"
                                        nomeFilm={filmDetail.titolo}
                                        regista={filmDetail.regista}
                                        genere={filmDetail.genere}
                                        durata={filmDetail.durata}
                                        cast={filmDetail.cast}
                                        sinossi={filmDetail.sinossi}
                                        immagine={filmDetail.img}
                                    />
                                </Col>
                                <Col xs="6" className="colonna-orari">
                                    <Row>
                                        <div className="giorno">
                                            <h4 className="h4-giorno">Lunedì 06/01</h4>
                                        </div>
                                        <div>
                                            <p className="orario-film">{filmDetail.orari.primo}</p>
                                            <p className="orario-film">{filmDetail.orari.secondo}</p>
                                            <p className="orario-film">{filmDetail.orari.terzo}</p>
                                            <p className="orario-film">{filmDetail.orari.quarto}</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="giorno">
                                            <h4 className="h4-giorno">Martedì 07/01</h4>
                                        </div>
                                        <div>
                                            <p className="orario-film">{filmDetail.orari.primo}</p>
                                            <p className="orario-film">{filmDetail.orari.secondo}</p>
                                            <p className="orario-film">{filmDetail.orari.terzo}</p>
                                            <p className="orario-film">{filmDetail.orari.quarto}</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="giorno">
                                            <h4 className="h4-giorno">Mercoledì 08/01</h4>
                                        </div>
                                        <div>
                                            <p className="orario-film">{filmDetail.orari.primo}</p>
                                            <p className="orario-film">{filmDetail.orari.secondo}</p>
                                            <p className="orario-film">{filmDetail.orari.terzo}</p>
                                            <p className="orario-film">{filmDetail.orari.quarto}</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="giorno">
                                            <h4 className="h4-giorno">Giovedì 09/01</h4>
                                        </div>
                                        <div>
                                            <p className="orario-film">{filmDetail.orari.primo}</p>
                                            <p className="orario-film">{filmDetail.orari.secondo}</p>
                                            <p className="orario-film">{filmDetail.orari.terzo}</p>
                                            <p className="orario-film">{filmDetail.orari.quarto}</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="giorno">
                                            <h4 className="h4-giorno">Venerdì 10/01</h4>
                                        </div>
                                        <div>
                                            <p className="orario-film">{filmDetail.orari.primo}</p>
                                            <p className="orario-film">{filmDetail.orari.secondo}</p>
                                            <p className="orario-film">{filmDetail.orari.terzo}</p>
                                            <p className="orario-film">{filmDetail.orari.quarto}</p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>

                        </container>
                    )
                })}

            </div>
        )
    }
}

export default OrariFilmCentrale;
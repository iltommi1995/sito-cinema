import React from "react";
import {Col, Row} from "reactstrap";
import ModalExample from "../schedaFilm/schedaFilm";

function schedaGiorni (data, day) {
    return(
        <Row>
        <div>
            <div className="giorno">
                <h4 className="h4-giorno">{day}</h4>
            </div>
            <div>
                <p className="orario-film">{data.primo}</p>
                <p className="orario-film">{data.secondo}</p>
                <p className="orario-film">{data.terzo}</p>
                <p className="orario-film">{data.quarto}</p>
            </div>
        </div>
        </Row>

    )
}

function SchedaOrariFilmV2 (data) {
    return(
        <container>
            <Row className="scheda-film">
                <Col xs="3">

                    <img src={data.film.img} alt="immagine" className="img-scheda-film"/>
                </Col>
                <Col xs="3" className="colonna-dati-film">
                    <h3>{data.film.titolo}</h3>
                    <br/>
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
                </Col>
                <Col xs="6" className="colonna-orari">

                        { Object.keys(data.film.orari).map(key =>
                            schedaGiorni(data.film.orari[key], key)
                        )}

                    <Row>
                    { Object.keys(data.film.orari).map(key =>
                        schedaGiorni(data.film.orari[key], key)
                )}
                    </Row>
                </Col>
            </Row>

        </container>

    )
}

export default SchedaOrariFilmV2;
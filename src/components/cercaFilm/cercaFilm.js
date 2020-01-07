import React, {Component} from 'react'
import FilmData from '../../data/FilmBicocca';

import "../../css/components/cercaFilm/cercaFilm.css";
import {Col, Row} from "reactstrap";
import ModalExample from "../mainLayout/schedaFilm/schedaFilm";


function searchingFor(parolaRicerca){
    return function(x){
        return x.titolo.toLowerCase().includes(parolaRicerca.toLowerCase()) || !parolaRicerca;
    }
}

class NomiFilm extends Component {
    constructor(props){
        super(props);
            this.state = {
                titoloFilm: FilmData,
                parolaRicerca: ''
            }
            this.cercaTitoli =this.cercaTitoli.bind(this);
    }

    cercaTitoli(event){
        this.setState({parolaRicerca: event.target.value})
    }


    render() {
        const {parolaRicerca, titoloFilm} = this.state;
        return (
            <container>
                <h2>Cerca tra i film:</h2>
                <form>
                    <input type="text"
                            onChange={this.cercaTitoli}
                            value={parolaRicerca}
                            placeholder="Titolo film">
                    </input>
                    </form>
                {
                    titoloFilm.filter(searchingFor(parolaRicerca)).map(filmDetail =>

                            <div key={filmDetail.id} className="film-ricerca">
                                <Row className="scheda-film">
                                    <Col xs="6">
                                        <div className="img-cerca-film">
                                            <img src={filmDetail.img} alt="immagine" className="img-scheda-film"/>
                                        </div>
                                        <div className="testo-cerca-film">
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
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                    )
                }
            </container>
        )
    }
}

export default NomiFilm;
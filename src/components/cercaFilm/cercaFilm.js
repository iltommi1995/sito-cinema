import React, {Component} from 'react'

import FilmData from '../../data/tuttiFilm';

import "../../css/components/cercaFilm/cercaFilm.css";
import SchedaCercaFilm from "./schedaCercaFilm";


function searchingFor(parolaRicerca){
    return function(x){
        return x.titolo.toLowerCase().includes(parolaRicerca.toLowerCase()) || !parolaRicerca;
    }
}

class CercaFilm extends Component {
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
                <h2>FILM IN PROGRAMMAZIONE NEGLI SDV CINEMAS</h2>
                <form>
                    <input type="text"
                           onChange={this.cercaTitoli}
                           value={parolaRicerca}
                           placeholder="Titolo film">
                    </input>
                </form>
                {
                    titoloFilm.filter(searchingFor(parolaRicerca)).map(filmDetail =>
                        <SchedaCercaFilm
                            film={{img: filmDetail.img, id:filmDetail.id, regista:filmDetail.regista, genere:filmDetail.genere,
                                durata:filmDetail.durata, cast:filmDetail.cast, titolo:filmDetail.titolo, sinossi:filmDetail.sinossi}}/>
                    )
                }
            </container>
        )
    }
}

export default CercaFilm;
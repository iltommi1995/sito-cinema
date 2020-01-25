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
            <div>
                <h1 className="acca1">Film in programmazione degli SDV Cinemas</h1>
                <form>
                    <input type="text"
                           onChange={this.cercaTitoli}
                           value={parolaRicerca}
                           placeholder="Titolo film">
                    </input>
                </form>

                {titoloFilm.filter(searchingFor(parolaRicerca)).map(filmDetail =>
                        <SchedaCercaFilm film={filmDetail}/>
                    )}

            </div>
        )
    }
}

export default CercaFilm;
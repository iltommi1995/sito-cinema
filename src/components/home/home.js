import React, {Component} from 'react';
import "../../css/components/home/home.css";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return(
            <div >
                <h1 className="acca1">BENVENUTI DA SDV CINEMAS</h1>
                <p>SDV Cinemas è una catena di multisala in espansione, con al momento due complessi, entrambi a Milano.
                    Con una distribuzione variegata SDV Cinemas cerca di accontentare tutti i tipi di spettatori.
                    Presso il multisala SDV Cinema- Bicocca, si possono vedere i maggiori film del momento.
                    SDV Cinema- Centrale invece può vantare una ricercata selezione di film d'essai.
                </p>
                <h2 className="titoliCentrati acca2">VISITA LE NOSTRE SALE</h2>
                <div className="row text-center">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <img src="img/cinema_bicocca.png" className="imgCinemaHome" alt="cinema milano bicocca"/>
                        <h3 className="acca3">CINEMA MILANO BICOCCA</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/orariFilmBicocca"><Button id="bottoneHome2">VAI ALLA PROGRAMMAZIONE</Button></Link>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src="img/cinema_centrale.png" className="imgCinemaHome" alt="cinema milano centrale"/>
                        <h3 className="acca3">CINEMA MILANO CENTRALE</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/orariFilmCentrale" ><Button id="bottoneHome2">VAI ALLA PROGRAMMAZIONE</Button></Link>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}
//
export default Home;
//
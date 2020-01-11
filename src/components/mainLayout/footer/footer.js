
import React from "react";

import {Link} from "react-router-dom";


import "../../../css/components/mainLayout/footer/footer.css";

function Footer() {
    return(
        <footer style={{
            "background-color": "#983232",
            "color": "#fef1e7"
        }}>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <hr style={{"backgroundColor": "#fef1e7"}}></hr>
                        <h5>MENU</h5>
                        <hr style={{"backgroundColor": "#fef1e7"}}></hr>
                        <p><Link to="/" className="linkFooter">Home</Link></p>
                        <p><Link to="/orariFilmBicocca" className="linkFooter">Cinema Milano Bicocca</Link></p>
                        <p><Link to="/orariFilmCentrale" className="linkFooter">Cinema Milano Centrale</Link></p>
                        <p><Link to="/cercaFilm" className="linkFooter">Cerca film</Link></p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>I NOSTRI ORARI</h5>
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <p>Dal lunedì al venerdì: 10.00-1.00</p>
                        <p>Sabato e domenica: 10.00-2.00</p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>DOVE SIAMO</h5>
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <p>Cinema Milano Bicocca: viale Sarca 235</p>
                        <p>blobloblo</p>
                        <p>Blablabla</p>
                    </div>
                    <div className="col-12">
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>© SDVCinemas</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

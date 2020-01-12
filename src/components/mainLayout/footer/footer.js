
import React from "react";

import {Link} from "react-router-dom";


import "../../../css/components/mainLayout/footer/footer.css";

function Footer() {
    return(
        <footer style={{
            "background-color": "#983232",
            "color": "#fef1e7"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <hr style={{"backgroundColor": "#fef1e7"}}></hr>
                        <h5>MENU</h5>
                        <hr style={{"backgroundColor": "#fef1e7"}}></hr>
                        <p><Link to="/" className="linkFooter">Home</Link></p>
                        <p><Link to="/orariFilmBicocca" className="linkFooter">Cinema Milano Bicocca</Link></p>
                        <p><Link to="/orariFilmCentrale" className="linkFooter">Cinema Milano Centrale</Link></p>
                        <p><Link to="/cercaFilm" className="linkFooter">Cerca film</Link></p>
                    </div>
                    <div className="col-md-3">
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
                    <div className="col-md-3">
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>DOVE SIAMO</h5>
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <p>Cinema Milano Bicocca: viale Sarca 235</p>
                        <p>Cinema Milano Centrale: via Vittor Pisani 20</p>
                    </div>
                    <div className="col-md-3">
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>SOCIAL</h5>
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <div id="divSocial">
                            <div className="linkSocial">
                                <a href="https://www.facebook.com/scheggedivetroblog/">
                                    <img src="img/fb_logo.png" className="socialIconOn"/>
                                    <img src="img/fb_logo_hover.png" className="socialIconOff"/>
                                </a>
                            </div>
                            <div className="linkSocial">
                                <a href="https://www.instagram.com/sdv.scheggedivetro/">
                                    <img src="img/ig_logo.png" className="socialIconOn"/>
                                    <img src="img/ig_logo_hover.png" className="socialIconOff"/>
                                </a>
                            </div>
                            <div className="linkSocial">
                                <a href="https://twitter.com/scheggedivetro1">
                                    <img src="img/twitter_logo.png" className="socialIconOn"/>
                                    <img src="img/twitter_logo_hover.png" className="socialIconOff"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center">
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

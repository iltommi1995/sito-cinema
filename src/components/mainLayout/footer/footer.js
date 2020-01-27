import React from "react";
import {Link} from "react-router-dom";
import "../../../css/components/mainLayout/footer/footer.css";

function Footer() {
    return(
        <footer className="footer-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <hr></hr>
                        <h5>MENU</h5>
                        <hr></hr>
                        <p><Link to="/" className="link-footer">Home</Link></p>
                        <p><Link to="/orariFilmBicocca" className="link-footer">Cinema Milano Bicocca</Link></p>
                        <p><Link to="/orariFilmCentrale" className="link-footer">Cinema Milano Centrale</Link></p>
                        <p><Link to="/cercaFilm" className="link-footer">Cerca film</Link></p>
                    </div>
                    <div className="col-md-3">
                        <hr></hr>
                        <h5>I NOSTRI ORARI</h5>
                        <hr></hr>
                        <p>Dal lunedì al venerdì: 10.00-1.00</p>
                        <p>Sabato e domenica: 10.00-2.00</p>
                    </div>
                    <div className="col-md-3">
                        <hr></hr>
                        <h5>DOVE SIAMO</h5>
                        <hr></hr>
                        <p>Cinema Milano Bicocca: viale Sarca 235</p>
                        <p>Cinema Milano Centrale: via Vittor Pisani 20</p>
                    </div>
                    <div className="col-md-3">
                        <hr></hr>
                        <h5>SOCIAL</h5>
                        <hr></hr>
                        <div>
                            <div className="link-social">
                                <a href="https://www.facebook.com/scheggedivetroblog/">
                                    <img src="img/fb_logo.png" className="social-icon-on"/>
                                    <img src="img/fb_logo_hover.png" className="social-icon-off"/>
                                </a>
                            </div>
                            <div className="link-social">
                                <a href="https://www.instagram.com/sdv.scheggedivetro/">
                                    <img src="img/ig_logo.png" className="social-icon-on"/>
                                    <img src="img/ig_logo_hover.png" className="social-icon-off"/>
                                </a>
                            </div>
                            <div className="link-social">
                                <a href="https://twitter.com/scheggedivetro1">
                                    <img src="img/twitter_logo.png" className="social-icon-on"/>
                                    <img src="img/twitter_logo_hover.png" className="social-icon-off"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <hr></hr>
                        <h5>© SDVCinemas</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

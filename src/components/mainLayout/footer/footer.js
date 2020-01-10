
import React from "react";


import "../../../css/components/mainLayout/footer/footer.css";

function Footer() {
    return(
        <footer>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <h3>SDV CINEMAS</h3>
                        <hr className="light"></hr>
                        <p>
                            123-456-789
                        </p>
                        <p>
                            Email
                        </p>
                        <p>
                            Indirizzo
                        </p>
                        <p>
                            Codice postale
                        </p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light"></hr>
                        <h5>I NOSTRI ORARI</h5>
                        <hr className="light"></hr>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light"></hr>
                        <h5>I NOSTRI ORARI</h5>
                        <hr className="light"></hr>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
                    </div>
                    <div className="col-12">
                        <hr className="light"></hr>
                        <h5>© SDVCinemas</h5>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

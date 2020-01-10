
import React from "react";


import "../../../css/components/mainLayout/footer/footer.css";

function Footer() {
    return(
        <footer style={{
            "background-color": "#6c0606",
            "color": "#fef1e7"
        }}>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-md-4">
                        <img src="img/logo.png" style={{
                            "width": "150px"
                        }} />
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
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
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>I NOSTRI ORARI</h5>
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
                    </div>
                    <div className="col-md-4">
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <h5>I NOSTRI ORARI</h5>
                        <hr style={{
                            "backgroundColor": "#fef1e7"
                        }}></hr>
                        <p>Blablabla</p>
                        <p>Blablabla</p>
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

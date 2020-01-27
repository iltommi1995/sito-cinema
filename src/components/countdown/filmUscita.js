import React from "react";
import {Jumbotron} from "reactstrap";
import Countdown from "./countdown";

function FilmUscita () {
    return(
        <Jumbotron>
            <div className="row">
                <div className="col-lg-5">
                    <img src={"./img/tenet.jpg"} style={{"width":"200px"}}/>
                </div>
                <div className="col-lg-7">
                    <h2> Venite a vedere da SDVCinemas Tenet di Christopher Nolan</h2>
                    <br />
                    <Countdown uscita={"July, 16, 2020"}/>
                </div>
            </div>
        </Jumbotron>
    )
}

export default FilmUscita;
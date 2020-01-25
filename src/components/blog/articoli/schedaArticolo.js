import React from "react";

function SchedaArticolo (props) {
    return(
        <div>
            <h1 className="acca1">{props.articolo.titolo}</h1>
            <div className="row">
                <div className="col-sm-4">
                    <img src={props.articolo.img} className="img-articolo"/>
                </div>
                <div className="col-sm-8">
                    <p>{props.articolo.testo}</p>
                </div>
            </div>
        </div>
    )
}

export default SchedaArticolo;
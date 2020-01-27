import React from "react";

function SchedaArticolo (props) {
    return(
        <div>
            <h1>{props.articolo.titolo}</h1>
            <div className="row">
                <div className="col-lg-4 text-center">
                    <img src={props.articolo.img} className="img-articolo" alt={"immagine articolo " + props.articolo.titolo}/>
                </div>
                <div className="col-lg-8 testo-articolo">
                    <p>{props.articolo.testo}</p>
                </div>
            </div>
        </div>
    )
}

export default SchedaArticolo;
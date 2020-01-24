import React from "react";

function SchedaArticolo (props) {
    return(
        <div>
            <h1>{props.articolo.titolo}</h1>
            <br />
            <p>{props.articolo.testo}</p>
        </div>
    )
}

export default SchedaArticolo;
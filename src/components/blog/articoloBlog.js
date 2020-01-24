import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

function ArticoloBlog (props) {
    return(
        <div className="col-sm-6" style={{"marginBottom":"20px"}}>
            <img src={props.articoli.img} style={{"width":"60%"}}></img>
            <h2>{props.articoli.titolo}</h2>
            <p>{props.articoli.anteprima}</p>
            <Link to={"/articoli/" + props.articoli.id}><Button>Leggi di più</Button></Link>
        </div>
    )
}

export default ArticoloBlog;
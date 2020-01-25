import React from "react";
import {Link} from "react-router-dom";
import "../../css/components/blog/blog.css";

function ArticoloBlog (props) {
    return(
        <div className="col-sm-6 articolo-blog">
            <img src={props.articoli.img} style={{"width":"60%"}}></img>
            <h2 className="acca2">{props.articoli.titolo}</h2>
            <p>{props.articoli.anteprima}</p>
            <Link to={"/articoli/" + props.articoli.id}><button className="btn" id="bottoneArticoloBlog">Leggi di più</button></Link>
        </div>
    )
}

export default ArticoloBlog;
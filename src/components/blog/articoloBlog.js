import React from "react";
import {Link} from "react-router-dom";
import "../../css/components/blog/blog.css";

function ArticoloBlog (props) {
    return(
        <div className="col-md-6 col-sm-12 articolo-blog">
            <img src={props.articoli.img} className="img-articolo-blog"></img>
            <h2>{props.articoli.titolo}</h2>
            <p>{props.articoli.anteprima}</p>
            <Link to={"/articoli/" + props.articoli.id}>
                <button className="btn btn-sdv">Leggi di più</button>
            </Link>
        </div>
    )
}

export default ArticoloBlog;
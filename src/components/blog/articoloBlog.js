import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "../../css/components/blog/blog.css";

function ArticoloBlog (props) {
    return(
        <div className="col-md-6 col-sm-12 articolo-blog">
            <img src={props.articoli.img} className="img-articolo-blog" alt={"immagine articolo " + props.articoli.titolo}></img>
            <h2>{props.articoli.titolo}</h2>
            <p>{props.articoli.anteprima}</p>
            <Link to={"/articoli/" + props.articoli.id}>
                <Button className="btn-sdv">Leggi di più</Button>
            </Link>
        </div>
    )
}

export default ArticoloBlog;
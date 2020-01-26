import React from "react";
import datiArticoli from "../../data/articoli";
import ArticoloBlog from "./articoloBlog";

import "../../css/components/blog/blog.css";

function Blog () {
    return(
        <div>
            <h1>BLOG</h1>
            <div className="row text-center" >
                {datiArticoli.map(data => <ArticoloBlog articoli={data}/>)}
            </div>
        </div>
    )
}

export default Blog;
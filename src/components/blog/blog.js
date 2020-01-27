import React from "react";
import datiArticoli from "../../data/articoli";
import "../../css/components/blog/blog.css";

import ArticoloBlog from "./articoloBlog";

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
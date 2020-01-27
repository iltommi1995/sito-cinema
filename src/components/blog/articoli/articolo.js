import React, {Component} from "react";
import {withRouter} from "react-router";
import ArticoliData from "../../../data/articoli.json";

import SchedaArticolo from "./schedaArticolo";

class Articolo extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const id = this.props.match.params.id;

        return(
            <div>
                {ArticoliData.filter(function(e) {
                    return e.id == id}).map(dati =>
                    <SchedaArticolo articolo={dati}/>)}
            </div>
        )
    }
}

export default withRouter(Articolo);
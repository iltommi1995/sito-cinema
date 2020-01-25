import React, {Component} from "react";
import {Button} from "reactstrap";


class BarraCookies extends Component {

    constructor() {
        super()

        this.state = {
            accettato: false
        }
        this.accettaCookies = this.accettaCookies.bind(this)
    }

    accettaCookies () {
        this.setState({accettato: true})
    }



    render() {
        return(
            <div style={{"position":"fixed",
                "bottom": "0px",
                "width": "100%",
                "height":"100px",
                "backgroundColor":"red"}}
            >
                <h2>Disattiva i cookies</h2>
                <Button onClick={this.accettaCookies}>Ok</Button>

            </div>
        )
    }
}

export default BarraCookies;
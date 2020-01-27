import React, { Component } from "react";

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giorni: 0,
            ore: 0,
            minuti: 0,
            secondi: 0
        };
    }
    componentWillMount() {
        this.quantoManca(this.props.uscita);
    }
    componentDidMount() {
        setInterval(() => this.quantoManca(this.props.uscita), 1000);
    }
    leading0(num) {
        return num < 10 ? "0" + num : num;
    }
    quantoManca(uscita) {
        const time = Date.parse(uscita) - Date.parse(new Date());
        if (time < 0) {
            this.setState({ giorni: 0, ore: 0, minuti: 0, secondi: 0 });
        } else {
            const secondi = Math.floor((time / 1000) % 60);
            const minuti = Math.floor((time / 1000 / 60) % 60);
            const ore = Math.floor((time / (1000 * 60 * 60)) % 24);
            const giorni = Math.floor(time / (1000 * 60 * 60 * 24));
            this.setState({ giorni, ore, minuti, secondi });
        }
    }
    render() {
        return (
            <div>
                <p>
                    Mancano ancora:
                    <br/>
                    <b>{" " +this.leading0(this.state.giorni)} Giorni</b>
                    <b>{" " +this.leading0(this.state.ore)} Ore</b>
                    <b>{" " +this.leading0(this.state.minuti)} Minuti</b>
                    <b>{" " +this.leading0(this.state.secondi)} Secondi</b>
                </p>
            </div>
        );
    }
}
export default Countdown;

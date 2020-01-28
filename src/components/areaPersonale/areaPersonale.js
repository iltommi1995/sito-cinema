import React, {Component} from "react";
import UtenteData from "../../data/utente";
import "../../css/components/areaPersonale/areaPersonale.css"

class AreaPersonale extends Component {
    render() {
        return(
        <div>
            <h1 className="acca1">Area personale</h1>
            {UtenteData.map(UtenteDetail => {
                return (
                    <div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-1">
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6">
                                <img src={UtenteDetail.img} className="img-area-personale" alt="img mario rossi"></img>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 dati-utente">
                                <h2 className="acca2">Bentornato {UtenteDetail.nome}</h2>
                                <br/>
                                <p><b>Hai accumulato {UtenteDetail.punti} punti.</b></p>
                                <br/>
                                <p>Coi punti puoi prendere ahasha:</p>
                                <ul>
                                    {UtenteDetail.punti >= 10 && (<li>{UtenteDetail.premi.num1}</li>)}
                                    {UtenteDetail.punti >= 20 && (<li>{UtenteDetail.premi.num2}</li>)}
                                    {UtenteDetail.punti >= 30 && (<li>{UtenteDetail.premi.num3}</li>)}
                                </ul>
                            </div>
                            <div className="col-xl-1 col-lg-1">
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        )
    }
}

export default AreaPersonale;
import React, {Component} from "react";
import UtenteData from "../../data/Utente";

class AreaPersonale extends Component {



    render() {



        return(
        <div>
            <h3>AREA PERSONALE</h3>

            {UtenteData.map((UtenteDetail, index)=> {

                return (
                    <div>

                        <h4>Bentornato {UtenteDetail.nome}</h4>
                        <img src={UtenteDetail.img}></img>
                        <p>Hai accumulato {UtenteDetail.punti} punti.</p>
                        <p>Coi punti puoi prendere:
                            {UtenteDetail.punti >= 10 && (<p>{UtenteDetail.premi.num1}</p>)}
                            {UtenteDetail.punti >= 20 && (<p>{UtenteDetail.premi.num2}</p>)}
                            {UtenteDetail.punti >= 30 && (<p>, {UtenteDetail.punti.num3}</p>)}
                        </p>

                    </div>
                )
            })}
        </div>
        )
    }
}



export default AreaPersonale;
/**
 * Author   :
 * Update   :
 * Date     :
 */
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown} from "reactstrap";
import React, {Component} from "react";
import "../../../css/components/mainLayout/header/header.css";
///
import NavLogout    from "./navLogout";
import NavLogin     from "./navLogin";
///
class Header extends Component {
    constructor () {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState(prevState => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render () {

        let testoBottone = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let bottone = <div>
            <UncontrolledDropdown nav inNavbar>
                {this.state.isLoggedIn ?
                    <DropdownToggle nav caret>
                        Nome Utente
                    </DropdownToggle>
                    :
                    <DropdownToggle nav caret>
                        LOGIN
                    </DropdownToggle>
                }

                {this.state.isLoggedIn ?
                    <div>
                        <DropdownMenu right id="dropdownLogin" className="navbar-red">

                            Sei Loggato.
                            <div className="dropdown-divider" style={{"backgroundColor": "yellow"}}></div>
                            <button value="login" onClick={this.handleClick}>{testoBottone}</button>
                        </DropdownMenu>
                    </div>
                    :
                    <div>
                        <DropdownMenu right className="navbar-red">

                            Nome utente: <input type="text"></input>
                            Password: <input type="text"></input>
                            <DropdownItem divider />
                            <button value="login" onClick={this.handleClick} id="bottone-login">{testoBottone}</button>
                        </DropdownMenu>
                    </div>

                }

            </UncontrolledDropdown>
        </div>;
        return(
            <div>
                {this.state.isLoggedIn ? <NavLogin login={{button:bottone}}/> : <NavLogout login={{button:bottone}}/>}
                <div style={{"position":"fixed",
                             "top": "8px",
                            "zIndex":"300",
                            "right":"500px"
                }}>

                </div>
            </div>
        )
    }
}
///
export default Header;
///

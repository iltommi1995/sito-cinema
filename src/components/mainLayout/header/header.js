import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Button} from "reactstrap";
import React, {Component} from "react";
import "../../../css/components/mainLayout/header/header.css";
import NavLogout    from "./navLogout";
import NavLogin     from "./navLogin";

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
            <UncontrolledDropdown nav inNavbar >
                {this.state.isLoggedIn ?
                    <DropdownToggle nav caret>
                        Nome Utente
                    </DropdownToggle>
                    :
                    <DropdownToggle nav caret className="link-nav">
                        LOGIN
                    </DropdownToggle>
                }

                {this.state.isLoggedIn ?
                    <div>
                        <DropdownMenu  id="dropdownLogin" className="navbar-red ">

                            Sei Loggato.
                            <div className="dropdown-divider"></div>
                            <button value="login" onClick={this.handleClick} className="btn btn-login">{testoBottone}</button>
                        </DropdownMenu>
                    </div>
                    :
                    <div>
                        <DropdownMenu className="navbar-red">
                            <ul className="ul-login">
                                <li>Nome utente: <br /> <input type="text"></input> </li>
                                <li>Password: <br /> <input type="text"></input></li>
                            </ul>
                            <DropdownItem divider />
                            <ul className="ul-login">
                                <li>
                                    <button value="login" onClick={this.handleClick} className="btn btn-login">{testoBottone}</button>
                                </li>
                            </ul>
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

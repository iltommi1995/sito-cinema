import {DropdownItem, DropdownMenu, DropdownToggle, Nav, UncontrolledDropdown} from "reactstrap";
import React, {Component} from "react";
import NavLogout from "./Nav-logout";
import NavLogin from "./NavLogin";

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

        return(
            <div>
                {this.state.isLoggedIn ? <NavLogin /> : <NavLogout />}
                <div style={{"position":"fixed",
                             "top": "8px",
                            "zIndex":"300",
                            "right":"500px"
                }}>
                    <Nav>
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
                                    <DropdownMenu right>

                                        Sei Loggato.
                                        <DropdownItem divider />
                                        <button value="login" onClick={this.handleClick}>{testoBottone}</button>
                                    </DropdownMenu>
                                </div>
                                :
                                <div>
                                <DropdownMenu right>

                                    Nome utente: <input type="text"></input>
                                    Password: <input type="text"></input>
                                    <DropdownItem divider />
                                    <button value="login" onClick={this.handleClick}>{testoBottone}</button>
                                </DropdownMenu>
                            </div>

                            }

                        </UncontrolledDropdown>
                    </Nav>
                </div>
            </div>
        )
    }

}



export default Header;
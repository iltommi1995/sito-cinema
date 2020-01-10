
import React from "react";
import {Link} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const NavLogout = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="navbar  fixed-top bg-light" light expand="md" style={{
                "zIndex":"200"
            }}>
                <div className="container">
                    <NavbarBrand><Link to="/"><img src="/img/logo.png" style={{"width":"150px"}}/></Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Scegli cinema
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to="/orariFilmBicocca">Milano Bicocca</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/orariFilmCentrale">Milano Centrale</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink><Link to="/cercaFilm">Cerca film</Link></NavLink>
                        </NavItem>


                    </Nav>
                    <Nav>
                        {props.login.button}
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavLogout;
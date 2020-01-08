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

const NavLogin = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar color="navbar navbar-dark bg-dark fixed-top" light expand="md" style={{
                "zIndex":"200"
            }}>
                <div className="container">
                    <NavbarBrand><Link to="/">SDV Cinema</Link></NavbarBrand>
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
                            <NavItem>
                                <NavLink><Link to="/areaPersonale">Area Personale</Link></NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavLogin;
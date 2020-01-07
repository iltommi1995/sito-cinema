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
            <Navbar color="navbar navbar-dark bg-dark fixed-top" light expand="md" style={{
                "zIndex":"200"
            }}>
                <div className="container">
                <NavbarBrand href="/">SDV Cinema</NavbarBrand>
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
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>

                    </Nav>

                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavLogout;
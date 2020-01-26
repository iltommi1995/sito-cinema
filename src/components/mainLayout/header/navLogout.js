
import React from "react";
import {Link,
    NavLink as RRNavLink
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const NavLogout = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="navbar fixed-top nav-sdv" light expand="md">
                <div className="container">
                    <NavbarBrand><Link to="/"><img src="/img/logo.png" className="nav-logo"/></Link></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret  id="dropdownToggle-navLogout">
                                    Scegli cinema
                                </DropdownToggle>
                                <DropdownMenu right id="dropdownMenu">
                                    <DropdownItem id="dropdownItem">
                                        <RRNavLink to="/orariFilmBicocca" className="linkNav">Milano Bicocca</RRNavLink>
                                    </DropdownItem>
                                    <DropdownItem id="dropdownItem2">
                                        <RRNavLink to="/orariFilmCentrale" className="linkNav">Milano Centrale</RRNavLink>
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink ><RRNavLink to="/cercaFilm" className="linkNav">Cerca film</RRNavLink></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink ><RRNavLink to="/blog"  className="linkNav">Blog</RRNavLink></NavLink>
                            </NavItem>
                            {props.login.button}
                        </Nav>

                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavLogout;
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
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const NavLogin = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar className="navbar fixed-top nav-sdv" light expand="md">
                <div className="container">
                    <NavbarBrand ><Link to="/"><img src="/img/logo.png" className="nav-logo"/></Link></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret id="dropdown-toggle-nav-logout">
                                    Scegli cinema
                                </DropdownToggle>
                                <DropdownMenu right id="dropdown-menu">
                                    <DropdownItem className="dropdown-item">
                                        <RRNavLink to="/orariFilmBicocca" className="link-nav">Milano Bicocca</RRNavLink>
                                    </DropdownItem>
                                    <DropdownItem className="dropdown-item">
                                        <RRNavLink to="/orariFilmCentrale" className="link-nav">Milano Centrale</RRNavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink><RRNavLink to="/cercaFilm" className="link-nav">Cerca film</RRNavLink></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink ><RRNavLink to="/blog"  className="link-nav">Blog</RRNavLink></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><RRNavLink to="/areaPersonale" className="link-nav">Area Personale</RRNavLink></NavLink>
                            </NavItem>
                            {props.login.button}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavLogin;
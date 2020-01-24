
import React from "react";
import {Link} from "react-router-dom";


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
    NavbarText
} from 'reactstrap';

const NavLogout = (props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="navbar  fixed-top" light expand="md" style={{
                "zIndex":"200",
                "background-color": "#983232",
                "color": "#fef1e7"
            }}>
                <div className="container">
                    <NavbarBrand><Link to="/"><img src="/img/logo.png" style={{"width":"120px"}}/></Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret  id="dropdownToggle-navLogout">
                                Scegli cinema
                            </DropdownToggle>
                            <DropdownMenu right id="dropdownMenu">
                                <DropdownItem id="dropdownItem">
                                    <Link to="/orariFilmBicocca" className="linkNav">Milano Bicocca</Link>
                                </DropdownItem>
                                <DropdownItem id="dropdownItem2">
                                    <Link to="/orariFilmCentrale" className="linkNav">Milano Centrale</Link>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink ><Link to="/cercaFilm"  className="linkNav">Cerca film</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink ><Link to="/blog"  className="linkNav">Blog</Link></NavLink>
                        </NavItem>

                    </Nav>
                    <Nav >
                        {props.login.button}
                    </Nav>
                </Collapse>
                </div>
            </Navbar>
        </div>
    );
}

export default NavLogout;
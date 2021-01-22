import React,{useState} from 'react';
import './navbar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
/**
* @author
* @function NavBar
**/

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return(
    <div >
        <div className="nvb">
      <Navbar className="bar" dark expand="md">
        <NavbarBrand href="/">SPARKS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/customers">Customers</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </div>
   )

 }

export default NavBar;
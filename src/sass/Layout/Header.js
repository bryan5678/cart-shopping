import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {Route, NavLink, Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import DataContext from './DataContext'


const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product",
    to: "/product",
    exact: false,
  },
  {
    name: "Contact",
    to: "/contact",
    exact: false,
  },
  {
    name: "About",
    to: "/about",
    exact: false,
  },
  {
    name: <FaShoppingCart/>,
    to: "/cart",
    exact: false,
  },

  
]



const MenuItems=  ({label, to, activeOnlyWhenExact})=>{
    return(
        <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
            let active = match ? "activeStyle" : "";
            return (
                <Nav.Link as="li" className={`${active}`}>
                  <NavLink className="red" exact to={to}>{label}</NavLink>
                </Nav.Link>
            )
        }}
        />
    )
}

 class Header extends Component {
    static contextType = DataContext

    render() {
        const {cart} = this.context

        let menuItems= menus.map((menuItem, index)=>{
          return(
            <MenuItems 
              key={index} 
              label={menuItem.name} 
              to={menuItem.to} 
              activeOnlyWhenExact={menuItem.exact}/>
          )
        }) 
        return (
            <Navbar bg="light" expand="md" className="py-0">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Brand as="div"><Link className="no-underline" to="/">React-Bootstrap</Link></Navbar.Brand>
                  

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto relative" as="ul">
                
                {menuItems}
                
                <span className={`cart ${cart.length>99 ? "cart-wide"  : ""}`}>{cart.length}</span>
               
                {/* <MenuItems label="Home" to="/" activeOnlyWhenExact/>
                <MenuItems label="Product" to="/product"/>
                <MenuItems label="Contact" to="/contact"/>
                <MenuItems label="About" to="/about"/> */}

                {/* <Nav.Link as="li">
                  <Link exact to="/">Home</Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to="/product">Product</Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to="/contact">Contact</Link>
                </Nav.Link>
                <Nav.Link as="li">
                  <Link to="/about">About</Link>
                </Nav.Link> */}

                
                {/* <Nav.Link to="/register">Log in/Register</Nav.Link> */}
                {/* <Nav.Link to="/cart">Cart</Nav.Link> */}
                </Nav>

              </Navbar.Collapse>

          </Navbar>
        )
    }
}

export default Header









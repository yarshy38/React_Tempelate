import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-10'>
                        <Navbar bg="" expand="lg">
                            <Container>
                                <Navbar.Brand to="/">
                                    <img src='./assets/img/logo.png' alt='logo' className='img-fluid for-logo' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mx-auto">
                                        <NavLink className="mx-2 navlink" to="/">Home</NavLink>
                                        <NavLink className="mx-2 navlink" to="/service">Service</NavLink>
                                        <NavLink className="mx-2 navlink" to="/about">About</NavLink>
                                        <NavLink className="mx-2 navlink" to="/contact">Contact</NavLink>


                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Menu
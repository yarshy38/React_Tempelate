import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


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
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/service">Service</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/contact">Contact</Nav.Link>

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
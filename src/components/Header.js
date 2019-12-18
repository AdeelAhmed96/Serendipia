import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends React.Component{

    render(){
        return (
            <div>
                <Navbar  bg="dark" variant="dark" expand="md">
                    <Navbar.Brand href="#">House Details</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;
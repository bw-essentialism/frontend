import React from 'react'; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as ReactBootstrap from 'react-bootstrap';

export default function Navigation () {
    return (
        <div>
        <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    );
}
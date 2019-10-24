import React from 'react'; 
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as ReactBootstrap from 'react-bootstrap';

export default function Navigation () {
    return (
        <div>
            {/* Link your components using Nav.Link to your route URL! */}
        <Navbar bg="dark"  variant="dark" expand="lg">
        <Navbar.Brand href="#home">Essentialism</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/values">Values List</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    );
}
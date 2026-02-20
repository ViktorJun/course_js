import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';
import { useMyContext } from '../Context'
import './theme.css';

export function Header() {
    const { color, setColor } = useMyContext();
    const oppositeColor = color === 'light' ? 'dark' : 'light';
    return (
        <Navbar className= {`background ${color} px-3 rounded-3 m-1 border `}>
            <Navbar.Brand className={`text-${oppositeColor} text-decoration-none`}>
                To Do List
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Item className='me-2'>
                    <Link to="/" className={`text-${oppositeColor} text-decoration-none`}>Home</Link>
                </Nav.Item>
                <Nav.Item className='me-2'>
                    <Link to="/about-me" className={`text-${oppositeColor} text-decoration-none`}>About me</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/contacts" className={`text-${oppositeColor} text-decoration-none`}>Contacts</Link>
                </Nav.Item>
            </Nav>
            <Button variant={oppositeColor} onClick={() => setColor(color === 'light' ? 'dark' : 'light')}>Toggle Theme</Button>
        </Navbar>
    )
}
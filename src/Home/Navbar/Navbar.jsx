import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
        return (
                <nav className="navbar">
                        <ul>
                                <li className="navitem item1">
                                        <NavLink to="/">
                                                <i className="fas fa-home"></i>
                                        </NavLink>
                                </li>
                                <li className="navitem item2">
                                        <NavLink to="/find">
                                                <i className="fas fa-search"></i>
                                        </NavLink>
                                </li>
                                <li className="navitem item3">
                                        <NavLink to="#">
                                                <i className="fas fa-history"></i>
                                        </NavLink>
                                </li>
                                <li className="navitem item4">
                                        <NavLink to="#">
                                                <i className="fas fa-trash-alt"></i>
                                        </NavLink>
                                </li>
                        </ul>
                </nav>
        )
}

export default Navbar

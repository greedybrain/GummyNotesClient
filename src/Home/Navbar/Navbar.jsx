import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import DeleteIcon from '@material-ui/icons/Delete';
import './Navbar.css'

const Navbar = () => {
        return (
                <nav className="navbar">
                        <ul>
                                <li className="navitem item1">
                                        <NavLink to="#">
                                                {/* <HomeIcon style={{ fontSize: '2rem' }} /> */}
                                                <i className="fas fa-home"></i>
                                        </NavLink>
                                </li>
                                <li className="navitem item2">
                                        <NavLink to="#">
                                                {/* <SearchIcon style={{ fontSize: '2rem' }} /> */}
                                                <i className="fas fa-search"></i>
                                        </NavLink>
                                </li>
                                <li className="navitem item3">
                                        <NavLink to="#">
                                                {/* <HistoryIcon style={{ fontSize: '2rem' }} /> */}
                                                <i className="fas fa-history"></i>
                                        </NavLink>
                                </li>
                                <li className="navitem item4">
                                        <NavLink to="#">
                                                {/* <DeleteIcon style={{ fontSize: '2rem' }} /> */}
                                                <i className="fas fa-trash"></i>
                                        </NavLink>
                                </li>
                        </ul>
                </nav>
        )
}

export default Navbar

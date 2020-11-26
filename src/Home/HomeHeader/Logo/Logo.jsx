import React from 'react'
import './Logo.css'
import gummyNotesLogo from '../../../Images/gummy-notes-logo-2.png'
import { NavLink } from 'react-router-dom'

const Logo = () => {
        return (
                <div className="header_logo">
                        <div className="logo_wrapper">
                                <NavLink to="/">
                                        <img src={gummyNotesLogo} alt="logo"/>
                                </NavLink>
                        </div>
                </div>
        )
}

export default Logo

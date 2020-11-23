import React from 'react'
import './Logo.css'
import gummyNotesLogo from '../../../Images/gummy-notes-logo.png'

const Logo = () => {
        return (
                <div className="header_logo">
                        <div className="logo_wrapper">
                                <img src={gummyNotesLogo} alt="logo"/>
                        </div>
                </div>
        )
}

export default Logo

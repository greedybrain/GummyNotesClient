import React from 'react'
import './LogoTitle.css'
import logo_title_image from  '../../Images/gummy-notes-logo-title.png'
import { NavLink } from 'react-router-dom'

const LogoTitle = () => {
        return (
                <div className="logo_title">
                        <div className="logo_title_wrapper">
                                <NavLink to='/home'>
                                        <img src={logo_title_image} alt="logo title"/>
                                </NavLink>
                        </div>
                </div>
        )
}

export default LogoTitle

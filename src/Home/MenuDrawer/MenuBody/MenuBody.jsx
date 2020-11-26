import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuBody.css'

const MenuBody = () => {
        return (
                <div className="menu_body">
                        <ul>
                                <li className="menu_item">
                                        <NavLink to="#">
                                                <div className="menu_icon">
                                                        <i className="fas fa-th-large"></i>
                                                </div>
                                                <div className="menu_label">
                                                        Collections
                                                </div>
                                        </NavLink>
                                </li>
                                <li className="menu_item">
                                        <NavLink to="#">
                                                <div className="menu_icon">
                                                        <i className="fas fa-user-circle"></i>
                                                </div>
                                                <div className="menu_label">
                                                        Account
                                                </div>
                                        </NavLink>
                                </li>
                                <li className="menu_item">
                                        <NavLink to="#">
                                                <div className="menu_icon">
                                                        <i className="fas fa-cog"></i>
                                                </div>
                                                <div className="menu_label">
                                                        Settings
                                                </div>
                                        </NavLink>
                                </li>
                                <li className="menu_item">
                                        <NavLink to="#">
                                                <div className="menu_icon">
                                                        <i className="fas fa-sign-out-alt"></i>
                                                </div>
                                                <div className="menu_label">
                                                        Logout
                                                </div>
                                        </NavLink>
                                </li>
                        </ul>
                </div>
        )
}

export default MenuBody

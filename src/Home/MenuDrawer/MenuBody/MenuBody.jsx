import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuBody.css'
import axios from 'axios'
import UserContext from '../../../Context/userContext'

const MenuBody = ({ history }) => {
        const userContext = useContext(UserContext)
        const { dispatchLogout } = userContext.actions

        const handleLogout = async () => {
                try {
                        await axios.delete(
                                'http://localhost:5000/api/v1/auth/logout',
                                { withCredentials: true }
                        )
                        dispatchLogout()
                        history.push('/login')
                } catch (error) {
                        console.log(error)
                }
        }

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
                                        <NavLink to='#'>
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
                                        <NavLink to="#" onClick={handleLogout}>
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

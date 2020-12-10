import React from 'react'
import Logo from '../../HomeHeader/Logo/Logo'
import './MenuHeader.css'
import CloseIcon from '@material-ui/icons/Close';

const MenuHeader = ({ toggleMenuDrawer }) => {
        return (
                <div className="menu_header">
                        <div className="close_and_logo">
                                <Logo />
                                <div className="close" onClick={toggleMenuDrawer}>
                                        <CloseIcon style={{ color: '#444444', fontSize: '2rem' }} />
                                </div>
                        </div>
                </div>
        )
}

export default MenuHeader

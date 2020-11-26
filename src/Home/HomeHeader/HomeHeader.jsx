import React from 'react'
import './HomeHeader.css'
import Logo from './Logo/Logo'
import MenuButton from './MenuButton/MenuButton'
import MetaData from './MetaData/MetaData'

const HomeHeader = ({ toggleMenuDrawer }) => {
        return (
                <div className="home_header">
                        <div className="menu_button_and_logo">
                                <MenuButton toggleMenuDrawer={toggleMenuDrawer} />
                                <Logo />
                                <h3>My notes</h3>
                        </div>
                        <MetaData />
                </div>
        )
}

export default HomeHeader

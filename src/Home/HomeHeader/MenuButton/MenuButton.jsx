import React from 'react'
import './MenuButton.css'

const MenuButton = ({ toggleMenuDrawer }) => {
        return (
                <div className="menu_button" onClick={() => toggleMenuDrawer(true)}>
                        <div className="bar1 bar"></div>
                        <div className="bar2 bar"></div>
                        <div className="bar3 bar"></div>
                </div>
        )
}

export default MenuButton

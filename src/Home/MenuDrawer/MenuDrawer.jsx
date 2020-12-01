import React from 'react'
import MenuBody from './MenuBody/MenuBody'
import './MenuDrawer.css'
import MenuFooter from './MenuFooter/MenuFooter'
import MenuHeader from './MenuHeader/MenuHeader'

const MenuDrawer = ({ toggleMenuDrawer, showMenuDrawer, history, dispatchLogout }) => {
        const classNames = showMenuDrawer ? "animate__slideInLeft" : "animate__slideOutLeft" 
        return (
                <div className={`menu_drawer animate__animated animate__faster ${classNames}`}>
                        <div className="menu">
                                <MenuHeader toggleMenuDrawer={toggleMenuDrawer} />
                                <MenuBody 
                                        history={history} 
                                        dispatchLogout={dispatchLogout}
                                />
                                <MenuFooter />
                        </div>
                        <div className="right_overlay animate__animated animate__fadeInLeft"></div>
                </div>
        )
}

export default MenuDrawer

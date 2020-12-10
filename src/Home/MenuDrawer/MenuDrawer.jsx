import React from 'react'
import MenuBody from './MenuBody/MenuBody'
import './MenuDrawer.css'
import MenuFooter from './MenuFooter/MenuFooter'
import MenuHeader from './MenuHeader/MenuHeader'

const MenuDrawer = ({ toggleMenuDrawer, showMenuDrawer, history, dispatchLogout }) => {
        const getAnimatedClassnames = () => {
                if (showMenuDrawer) {
                        return "animate__slideInLeft"
                }
                if (!showMenuDrawer) {
                        return "animate__slideOutLeft" 
                }
        }
        return (
                <div className={`menu_drawer animate__animated  ${getAnimatedClassnames()} animate__faster`}>
                        <div className="menu">
                                <MenuHeader toggleMenuDrawer={toggleMenuDrawer} />
                                <MenuBody 
                                        history={history} 
                                        dispatchLogout={dispatchLogout}
                                />
                                <MenuFooter />
                        </div>
                        <div className="right_overlay animate__animated animate__fadeInLeft" onClick={toggleMenuDrawer}></div>
                </div>
        )
}

export default MenuDrawer

import React, { Component } from 'react';
import CreateNote from './CreateNote/CreateNote';
import './Home.css'
import HomeBody from './HomeBody/HomeBody';
import HomeHeader from './HomeHeader/HomeHeader';
import MenuDrawer from './MenuDrawer/MenuDrawer';
import Navbar from './Navbar/Navbar';

class Home extends Component {
        state = {
                showMenuDrawer: false
        }

        toggleMenuDrawer = () => {
                this.setState({
                        showMenuDrawer: !this.state.showMenuDrawer
                })
        }

        render() {
                return (
                        <div className="home_container">
                                {
                                        this.state.showMenuDrawer && (
                                                <MenuDrawer 
                                                        toggleMenuDrawer={this.toggleMenuDrawer} 
                                                        showMenuDrawer={this.state.showMenuDrawer} 
                                                        history={this.props.history}
                                                />
                                        )
                                }
                                <HomeHeader toggleMenuDrawer={this.toggleMenuDrawer} />
                                <HomeBody 
                                        dispatchDeleteNote={this.props.dispatchDeleteNote}
                                />
                                <CreateNote />
                                <Navbar />
                        </div>
                );
        }
}

export default Home;
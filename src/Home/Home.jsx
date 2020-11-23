import React, { Component } from 'react';
import CreateNote from './CreateNote/CreateNote';
import './Home.css'
import HomeHeader from './HomeHeader/HomeHeader';
import Navbar from './Navbar/Navbar';

class Home extends Component {
        render() {
                return (
                        <div className="home_container">
                                <HomeHeader />
                                <CreateNote />
                                <Navbar />
                        </div>
                );
        }
}

export default Home;
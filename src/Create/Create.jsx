import React, { Component } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Create.css'
import CreateForm from './CreateForm/CreateForm';
import CreateHeader from './CreateHeader/CreateHeader';

class Create extends Component {
        render() {
                return (
                        <div className="create_wrapper">
                                <CreateHeader history={this.props.history} />
                                <CreateForm history={this.props.history} />
                                <Navbar />
                        </div>
                );
        }
}

export default Create;
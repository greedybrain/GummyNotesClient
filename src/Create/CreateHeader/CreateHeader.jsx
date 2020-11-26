import React from 'react'
import './CreateHeader.css'

const CreateHeader = ({ history }) => {
        return (
                <div className="create_header">
                        <div className="back_arrow">
                                <i className="fas fa-arrow-left" onClick={ () => history.goBack() }></i>
                        </div>
                        <div className="create_header_label">
                                <h3>New note</h3>
                        </div>
                </div>
        )
}

export default CreateHeader

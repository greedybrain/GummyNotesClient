import React from 'react'
import './SearchHeader.css'

const SearchHeader = ({ history }) => {

        const handleBackButton = () => {
                history.goBack()
        }

        return (
                <div className="search_header">
                        <div className="back_arrow">
                                <i className="fas fa-arrow-left" onClick={ handleBackButton }></i>
                        </div>
                        <div className="search_header_label">
                                <h3>Find a note</h3>
                        </div>
                </div>
        )
}

export default SearchHeader

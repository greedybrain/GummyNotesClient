import React from 'react'
import Notes from '../../Home/HomeBody/Notes/Notes'
import './SearchBody.css'

const SearchBody = ({ results }) => {

        return (
                <div className="search_body">
                        {
                                results.length === 0 
                                ? 
                                <div className="results">
                                        <div className="results_label">
                                                <h3>No results</h3>
                                        </div>
                                        <div className="no_results">
                                                <div className="note_placeholder">
                                                        <i className="fas fa-sticky-note"></i>
                                                </div>
                                                <div className="note_placeholder">
                                                        <i className="fas fa-sticky-note"></i>
                                                </div>
                                                <div className="note_placeholder">
                                                        <i className="fas fa-sticky-note"></i>
                                                </div>
                                                <div className="note_placeholder">
                                                        <i className="fas fa-sticky-note"></i>
                                                </div>
                                        </div>
                                </div>
                                :
                                <Notes results={results} />
                        }
                </div>
        )
}

export default SearchBody

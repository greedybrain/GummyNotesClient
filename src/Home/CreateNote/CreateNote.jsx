import React from 'react'
import { NavLink } from 'react-router-dom'
import './CreateNote.css'

const CreateNote = () => {
        return (
                <div className="new_note_button_wrapper">
                        <NavLink to="/create">
                                <div className="button">
                                        {/* <i className="fas fa-pencil-alt"></i> */}
                                        <span role='img' aria-label="pencil">✏️</span>
                                </div>
                        </NavLink>
                </div>
        )
}

export default CreateNote

import React from 'react'
import './Notes.css'
import Note from './Note/Note'

const Notes = ({ allNotes, results }) => {

        const notes = results?.length > 0 ? results : allNotes
        const renderNotes = notes?.map((note, index) => <Note note={note} key={index} />)
        return (
                <ul className="notes">
                        { renderNotes }
                </ul>
        )
}

export default Notes

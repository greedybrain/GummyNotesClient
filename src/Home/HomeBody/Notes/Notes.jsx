import React, { useContext } from 'react'
import './Notes.css'
import Note from './Note/Note'
import UserContext from '../../../Context/userContext'

const Notes = ({ results }) => {
        const userContext = useContext(UserContext)
        let { notes } = userContext.state.user

        notes = results?.length > 0 ? results : notes
        notes?.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        const renderNotes = notes?.map((note, index) => <Note note={note} key={index} />)
        return (
                <ul className="notes">
                        { 
                                renderNotes.length === 0 
                                ? <li>You don't have any notes</li>
                                : renderNotes
                        }
                </ul>
        )
}

export default Notes

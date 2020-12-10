import React, { useContext } from 'react'
import UserContext from '../../../../Context/userContext'
import './NoteCount.css'

const NoteCount = () => {
        const userContext = useContext(UserContext)
        const {notes} = userContext.state
        return (
                <div className="note_data">
                        <div className="note_count">
                                { notes.length } Notes
                        </div>
                </div>
        )
}

export default NoteCount

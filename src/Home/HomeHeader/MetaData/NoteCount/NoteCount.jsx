import React from 'react'
import './NoteCount.css'
import { notes } from '../../../../data'

const NoteCount = () => {
        return (
                <div className="note_data">
                        <div className="note_count">
                                { notes.length }
                        </div>
                </div>
        )
}

export default NoteCount

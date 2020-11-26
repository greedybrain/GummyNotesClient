import React from 'react'
import './Note.css'

const Note = ({ note }) => {
        return (
                <li className="note">
                        <div className="title">
                                { note.title }
                        </div>
                        <div className="content">
                                { note.content.length > 50 ? `${note.content.slice(0, 47)}...` : note.content }
                        </div>
                        <div className="created">
                                { note.created }
                        </div>
                </li>
        )
}

export default Note

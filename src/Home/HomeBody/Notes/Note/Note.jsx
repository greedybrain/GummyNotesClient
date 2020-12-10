import React, { useContext } from 'react'
import moment from 'moment'
import UserContext from '../../../../Context/userContext'
import './Note.css'

const Note = ({ note }) => {
        const userContext = useContext(UserContext)
        const { dispatchDeleteNote } = userContext.actions

        const handleDelete = e => {
                if (e.target.children.length > 0) {
                        dispatchDeleteNote(e.target.dataset.id)
                } else {
                        dispatchDeleteNote(e.target.parentElement.dataset.id)
                }
        }

        return (
                <a className="note" href={'/my/notes/' + note._id}>
                        <li className="note" style={{ backgroundColor: note.color }} data-id={note._id} onClick={handleDelete}>
                                <div className="title">
                                        <span>
                                                { note.title }
                                        </span>
                                </div>
                                <div className="content">
                                        { note.content.length > 50 ? `${note.content.slice(0, 47)}...` : note.content }
                                </div>
                                <div className="created">
                                        { 
                                                moment(note.createdAt).format('MM/D/YY') + ' - ' +
                                                moment(note?.createdAt).fromNow() 
                                        }
                                </div>
                        </li>
                </a>
        )
}

export default Note

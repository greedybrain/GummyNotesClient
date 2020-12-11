import React, { useContext } from 'react'
import UserContext from '../Context/userContext'
import './ShowNote.css'
import moment from 'moment'
import Navbar from '../Home/Navbar/Navbar'
import axios from 'axios'

const ShowNote = ({ history, match }) => {
        const userContext = useContext(UserContext)
        const { dispatchDeleteNote } = userContext.actions
        const {notes} = userContext.state

        
        const getNote = () => {
                let note = notes.find(n => n._id === match.params.id)
                return note
        }
        const note = getNote()

        const handleDelete = async () => {
                const { _id: userId } = userContext.state.user
                await axios.delete(
                        `https://gummy-notes.herokuapp.com/api/v1/users/${ userId }/notes/${ note._id }`,
                        // { withCredentials: true }
                )
                dispatchDeleteNote(note._id)
                history.push('/home')
                window.location.reload()
        }
        
        return (
                <div className="show_note_wrapper">
                        <div className="show_note_header">
                                <div className="back_arrow">
                                        <i className="fas fa-arrow-left" onClick={ () => history.goBack() } style={{ color: note?.color }}></i>
                                </div>
                                <div className="note_title">
                                        <h3>
                                                { 
                                                        note?.title.length === 0 
                                                        ? "Untitled"
                                                        : note?.title.length > 15 ? note?.title.slice(0, 15) + ' ...' : note?.title 
                                                }
                                        </h3>
                                </div>
                        </div>
                        <div className="show_note_body" style={{ backgroundColor: note?.color }}>
                                <div className="note_header">
                                        <span>
                                                {note?.title}
                                        </span>
                                </div>
                                <div className="note_body">
                                        {note?.content}
                                </div>
                                <div className="note_footer">
                                        { 
                                                moment(note?.createdAt).format('MM/D/YY') + ' - ' +
                                                moment(note?.createdAt).fromNow() 
                                        }
                                </div>
                        </div>
                        <div className="collection_name">
                                In collection:
                        </div>
                        <div className="note_actions">
                                <div className="edit_note">
                                        <i className="fas fa-edit"></i>
                                </div>
                                <div className="delete_note" onClick={handleDelete}>
                                        <i className="fas fa-trash-alt"></i>
                                </div>
                        </div>
                        <Navbar />
                </div>
        )
}

export default ShowNote

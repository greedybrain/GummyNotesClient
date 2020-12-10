import React, { Component } from 'react'
import UserContext from '../Context/userContext'
import './History.css'
import moment from 'moment'
import Navbar from '../Home/Navbar/Navbar'

export default class History extends Component {
        static contextType = UserContext

        sortNoteTimeFrames = () => {
                const notes = this.context.state.notes
                const noteHistory = {}
                for (let i = 0; i < notes.length; i++) {
                        let setDate = moment(notes[i].createdAt).format('M/D/YY')
                        if (noteHistory[setDate]) {
                                noteHistory[setDate].push(notes[i])
                        } else {
                                noteHistory[setDate] = [notes[i]]
                        }
                }
                return noteHistory
        }

        handleGoBack = () => {
                const { history } = this.props
                history.goBack()
        }

        handleGoToNotePage = note_id => {
                this.props.history.push(`/my/notes/${note_id}`)
        }

        renderNotesAndTimeFrames = () => {
                return Object.entries(this.sortNoteTimeFrames()).map((entry, index) => {
                        return (
                                <div className="history_data" key={index}>
                                        <h2>Notes on {entry[0]}</h2>
                                        <ul>
                                                { entry[1].map((e, index) => {
                                                        let noteColor = e.color
                                                        let noteTitle = e.title
                                                        let noteContent = e.content
                                                        let noteTimestamp = moment(e.createdAt).format('h:mm a')
                                                        return (
                                                                <React.Fragment key={index}>
                                                                        <li className="note_data" onClick={() => this.handleGoToNotePage(e._id)}>
                                                                                <div className="note_color_and_title">
                                                                                        <div style={{ 
                                                                                                        backgroundColor: noteColor, 
                                                                                                        width: '30px', 
                                                                                                        height: '30px', 
                                                                                                        boxShadow: '0px 4px 13px -3px #000000a3'
                                                                                                }} 
                                                                                                className="note_color"
                                                                                        >
                                                                                                <div className="scribble_title">
                                                                                                        { noteTitle }
                                                                                                </div>
                                                                                                <div className="scribble_content">
                                                                                                        { noteContent }
                                                                                                </div>
                                                                                        </div>
                                                                                        <div className="title">
                                                                                                { noteTitle }
                                                                                        </div>
                                                                                </div>
                                                                                <div className="timestamp">
                                                                                        { noteTimestamp }
                                                                                </div>
                                                                        </li>
                                                                </React.Fragment>
                                                        )
                                                })}
                                        </ul>
                                </div>
                        )
                })
        }

        render() {
                const notes = this.context.state.notes
                console.log(notes);
                return (
                        <div className="history_page_wrapper">
                                <div className="header">
                                        <div className="back_arrow">
                                                <i className="fas fa-arrow-left" onClick={ this.handleGoBack }></i>
                                        </div>
                                        <div className="history_header_label">
                                                <h3>History</h3>
                                        </div>
                                </div>
                                <div className="history">
                                        {
                                                notes.length === 0 
                                                ? <p style={{ padding: "15px 7%" }}>No note history available</p>
                                                : this.renderNotesAndTimeFrames()
                                        } 
                                </div>
                                <Navbar />
                        </div>
                )
        }
}

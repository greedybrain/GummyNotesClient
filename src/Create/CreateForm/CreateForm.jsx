import React, { useContext, useState } from 'react'
import UserContext from '../../Context/userContext'
import './CreateForm.css'
import axios from 'axios'
// import { Redirect } from 'react-router-dom'

const CreateForm = ({ history }) => {
        const userContext = useContext(UserContext)
        const { dispatchCreateNote } = userContext.actions
        const { noteEditMode } = userContext.state
        // const { color: note_color, content: note_content, title: note_title } = history.location.note === undefined ? <Redirect to="/home" /> : history.location.note

        const [title, setTitle] = useState('')
        const [content, setContent] = useState('')
        const [color, setColor] = useState('')

        const handleChange = event => {
                switch(event.target.name) {
                        case "title":
                                setTitle(event.target.value)
                                break;
                        case "content":
                                setContent(event.target.value)
                                break;
                        case "color":
                                setColor(event.target.value)
                                break;
                        default:
                                break;
                }
        }

        const handleSubmit = async event => {
                event.preventDefault()

                const { user } = userContext.state
                if (!noteEditMode) {
                        try {
                                const { data } = await axios.post(
                                        `https://gummy-notes.herokuapp.com/api/v1/users/${user._id}/notes`,
                                        {
                                                title,
                                                content,
                                                color
                                        },
                                        // { withCredentials: true }
                                )
                                dispatchCreateNote(data)
                                history.push('/home')
                                window.location.reload()
                        } catch (error) {
                                console.error(error)
                        }
                } 
        }

        return (
                <div className="create_form">
                        <form onSubmit={handleSubmit}>
                                <div className="upper_form" style={{ backgroundColor: color }}>
                                        <div className="title_input">
                                                <input 
                                                        type="text" 
                                                        name="title" 
                                                        placeholder="Enter title here ..."
                                                        value={title} 
                                                        onChange={handleChange}
                                                        autoFocus
                                                        required
                                                />
                                        </div>
                                        <div className="note_content">
                                                <textarea 
                                                        name="content" 
                                                        placeholder="✏️"
                                                        onChange={handleChange}
                                                        defaultValue={content}
                                                        required
                                                >
                                                </textarea>
                                        </div>
                                        <div className="color">
                                                <input 
                                                        type="color" 
                                                        name="color" 
                                                        value={color}
                                                        onChange={handleChange}
                                                />
                                        </div>
                                </div>
                                <div className="lower_form">
                                        <div className="add_to_collection">
                                                <div className="label">
                                                        Add note to ...
                                                </div>
                                                <div className="checkboxes">
                                                        <div className="checkbox">
                                                                <input id="checkbox1" type="checkbox" name="checkbox1" />
                                                                <label htmlFor="checkbox1"> Job Tracker</label>
                                                        </div>
                                                        <div className="checkbox">
                                                                <input id="checkbox2" type="checkbox" name="checkbox2" />
                                                                <label htmlFor="checkbox2"> Important</label>
                                                        </div>
                                                </div>
                                                <div className="create_collection">
                                                        <button>
                                                                + New collection
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                                <div className="submit_button">
                                        <button type="submit">
                                                <i className="fas fa-plus-circle" style={{ color }}></i>
                                        </button>
                                </div>
                        </form>
                </div>
        )
}

export default CreateForm

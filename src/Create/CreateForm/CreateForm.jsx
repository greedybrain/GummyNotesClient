import React from 'react'
import './CreateForm.css'

const CreateForm = () => {

        return (
                <div className="create_form">
                        <form>
                                <div className="upper_form">
                                        <div className="title_input">
                                                <input 
                                                        type="text" 
                                                        name="title" 
                                                        placeholder="Enter title here ..." 
                                                        autoFocus
                                                />
                                        </div>
                                        <div className="note_content">
                                                <textarea name="" placeholder="✏️"></textarea>
                                        </div>
                                        {/* <div className="color">
                                                <input type="color" id="favcolor" name="favcolor" />
                                        </div> */}
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
                                                <i className="fas fa-plus-circle"></i>
                                        </button>
                                </div>
                        </form>
                </div>
        )
}

export default CreateForm

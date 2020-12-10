import React from 'react'

const Form = ({ handleSubmit, handleChange, title, content, color }) => {
        return (
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
                                                defaultValue="#ff5872"
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
        )
}

export default Form

import React from 'react'
import { useState } from 'react'
import './SearchForm.css'

const SearchForm = ({ handleNoteSearch, results }) => {
        const [focus, isFocused] = useState(false)
        const [query, setQuery] = useState('')

        const handleFocus = () => {
                isFocused(true)
        }

        const handleBlur = () => {
                isFocused(false)
        }

        const handleChange = event => {
                setQuery(event.target.value)
                handleNoteSearch(event.target.value)
        }

        return (
                <div className="search_form">
                        <form style={ focus ? { borderBottom: '3px solid #00c8ff', borderRadius: '0 0 5px 5px' } : null }>
                                <div className="search">
                                        <input 
                                                className="search_input"
                                                type="search" 
                                                placeholder="Search by title or content" 
                                                value={query}
                                                onFocus={ handleFocus } 
                                                onBlur={handleBlur}
                                                onChange={handleChange} 
                                        />
                                </div>
                                <div className="submit_button">
                                        <button type="submit">
                                                <i style={ focus ? { color: '#00c8ff' } : null } className="fas fa-search"></i>
                                        </button>
                                </div>
                        </form>
                </div>
        )
}

export default SearchForm

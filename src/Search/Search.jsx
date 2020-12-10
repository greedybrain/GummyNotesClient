import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm';
import SearchHeader from './SearchHeader/SearchHeader';
import './Search.css'
import SearchBody from './SearchBody/SearchBody';
import CreateNote from '../Home/CreateNote/CreateNote';
import Navbar from '../Home/Navbar/Navbar';
import UserContext from '../Context/userContext';


class Search extends Component {
         static contextType = UserContext

        state = {
                results: []
        }

        handleNoteSearch = query => {
                if (query === '') {
                        this.setState({
                                results: []
                        })
                } else {
                        let notes = this.context.state.notes
                        notes = notes.filter(note => {
                                let title = note.title.toLowerCase()
                                let content = note.content.toLowerCase()
                                query = query.toLowerCase()
                                return title === query || title.includes(query) || content === query || content.includes(query)
                        })
                        this.setState({
                                results: notes
                        })
                }
        }
        
        render() {
                // console.log(this.context)
                const { results } = this.state
                return (
                        <div className="search_page_wrapper">
                                <SearchHeader history={this.props.history} />
                                <SearchForm results={results} handleNoteSearch={this.handleNoteSearch} />
                                <SearchBody results={results} />
                                {
                                        results.length > 0 && (
                                                <CreateNote />
                                        )
                                }
                                <Navbar />
                        </div>
                );
        }
}

export default Search;
import { Component } from 'react'
import Routes from './Routes'
import UserContext from './Context/userContext' 
import axios from 'axios'

class App extends Component {
  state = {
    user: {},
    notes: [],
    loggedIn: false,
    noteEditMode: false
  }

  getCurrentUser = async () => {
    try {
        const response = await axios(
          'https://gummy-notes.herokuapp.com/api/v1/users/me',
          // { withCredentials: true },
        )
        this.setState({
          user: response.data,
          notes: response.data.notes,
          loggedIn: true
        })
    } catch (error) {
      console.error(error.message)
    }
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  dispatchSignup = userInfo => {
    this.setState({
      user: userInfo,
      notes: userInfo.notes,
      loggedIn: true
    })
  }

  dispatchLogin = userInfo => {
    this.setState({
      user: userInfo,
      notes: userInfo.notes,
      loggedIn: true
    })
  }
  
  dispatchLogout = () => {
    this.setState({
      user: {},
      notes: [],
      loggedIn: false
    })
  }

  dispatchCreateNote = note => {
    setTimeout(() => {
      this.setState(prevState => ({
        notes: [...prevState.notes, note]
      }))
    }, 1500);
  }

  dispatchDeleteNote = note_id => {
    const notes = [...this.state.notes.filter(note => note._id !== note_id)]
    this.setState({
        notes 
    })
  }

  // dispatchEditNoteInit = note => {
  //   this.setState(({
  //     noteEditMode: true
  //   }))
  // }

  render() {
    return (
      <UserContext.Provider 
        value={{
          state: this.state,
          actions: {
            dispatchSignup: this.dispatchSignup,
            dispatchLogin: this.dispatchLogin,
            dispatchLogout: this.dispatchLogout,
            dispatchCreateNote: this.dispatchCreateNote,
            dispatchDeleteNote: this.dispatchDeleteNote,
            // dispatchEditNoteInit: this.dispatchEditNoteInit
          }
        }}
      >
        <div className="App">
          <Routes />
        </div>
      </UserContext.Provider>
    );
  }

}

export default App;

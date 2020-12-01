import { Component } from 'react'
import Routes from './Routes'
// import axios from 'axios'

class App extends Component {
  state = {
    user: {},
    loggedIn: false
  }

  // getCurrentUser = async () => {
  //   try {
  //       const response = await axios(
  //         'http://localhost:5000/api/v1/users/me',
  //         { withCredentials: true },
  //       )
  //       this.setState({
  //         user: response.data,
  //         loggedIn: true
  //       })
  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  // componentDidMount() {
  //   this.getCurrentUser()
  // }

  dispatchSignup = userInfo => {
    this.setState({
      user: userInfo,
      loggedIn: true
    })
  }

  dispatchLogin = userInfo => {
    this.setState({
      user: userInfo,
      loggedIn: true
    })
  }
  
  dispatchLogout = () => {
    this.setState({
      loggedIn: false
    })
  }

  render() {
    const { user, loggedIn } = this.state
    return (
      <div className="App">
        <Routes 
          user={user} 
          loggedIn={loggedIn} 
          dispatchSignup={this.dispatchSignup}
          dispatchLogin={this.dispatchLogin}
          dispatchLogout={this.dispatchLogout} 
        />
      </div>
    );
  }

}

export default App;

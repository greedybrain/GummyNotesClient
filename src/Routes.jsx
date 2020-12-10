import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Create from './Create/Create'
import Home from './Home/Home'
import Login from './Login/Login'
import Search from './Search/Search'
import Signup from './Signup/Signup'
import UserContext from './Context/userContext'
import ShowNote from './ShowNote/ShowNote'
import History from './History/History'

const Routes = () => {
        const userContext = useContext(UserContext)
        const { loggedIn } = userContext.state

        return (
                <Switch>
                        <Route 
                                exact
                                path="/home"
                                render={routerProps => !loggedIn ? <Redirect to='/login' /> : <Home { ...routerProps } /> }
                        />
                        <Route 
                                exact
                                path="/login"
                                render={ routerProps => loggedIn ? <Redirect to='/home' /> : <Login {...routerProps} /> }
                        />
                        <Route 
                                exact
                                path="/signup"
                                render={ routerProps => loggedIn ? <Redirect to='/home' /> : <Signup {...routerProps} /> }
                        />
                        <Route 
                                exact
                                path="/find"
                                render={routerProps => <Search { ...routerProps} />}
                        />
                        <Route 
                                exact
                                path="/create"
                                render={routerProps => <Create { ...routerProps } />}
                        />
                        <Route 
                                exact
                                path='/my/notes/:id'
                                render={routerProps => <ShowNote {...routerProps} />}
                        />
                        <Route 
                                exact
                                path='/history'
                                render={routerProps => <History { ...routerProps } />}
                        />
                        <Redirect from="/" to="/home" />
                </Switch>
        )
}

export default Routes

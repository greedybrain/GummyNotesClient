import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Create from './Create/Create'
import Home from './Home/Home'
import Login from './Login/Login'
import Search from './Search/Search'
import Signup from './Signup/Signup'

const Routes = ({ loggedIn, dispatchLogout, dispatchLogin, dispatchSignup }) => {
        return (
                <Switch>
                        <Route 
                                exact
                                path="/"
                                render={routerProps => !loggedIn ? <Redirect to='/login' /> : <Home { ...routerProps } loggedIn={loggedIn} dispatchLogout={dispatchLogout} />}
                        />
                        <Route 
                                exact
                                path="/login"
                                render={ routerProps => loggedIn ? <Redirect to='/' /> : <Login dispatchLogin={dispatchLogin} {...routerProps} /> }
                        />
                        <Route 
                                exact
                                path="/signup"
                                render={ routerProps => loggedIn ? <Redirect to='/' /> : <Signup dispatchSignup={dispatchSignup} {...routerProps} /> }
                        />
                        <Route 
                                exact
                                path="/find"
                                render={routerProps => <Search { ...routerProps } />}
                        />
                        <Route 
                                exact
                                path="/create"
                                render={routerProps => <Create { ...routerProps } />}
                        />
                </Switch>
        )
}

export default Routes

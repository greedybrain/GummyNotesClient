import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Create from './Create/Create'
import Home from './Home/Home'
import Search from './Search/Search'

const Routes = () => {
        return (
                <Switch>
                        <Route 
                                exact
                                path="/"
                                render={routerProps => <Home { ...routerProps } />}
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

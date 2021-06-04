import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Theme } from './components'
import { routes } from './router/routes'

const navs = routes.filter(nav => nav.isNav === true)

export default class App extends Component {
    render() {
        return (
            
            <Router>
                <Theme navs={navs}>
                    <Switch>
                        {routes.map(item => {
                            return (
                                <Route key={item.pathname} path={item.pathname} exact={item.exact} render={(routerProps) => {
                                    return <item.component {...routerProps} />
                                }}/>
                            )
                        })}
                        <Redirect to="/" exact/>
                    </Switch>
                </Theme>
            </Router>
            
        )
    }
}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../main';
import Board from '../board'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Main} />
                <Route exact path={'/board/:id'} component={Board} />
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default Routes;
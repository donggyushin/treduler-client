import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../main';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} component={Main} />
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default Routes;
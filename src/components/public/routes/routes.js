import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Main from '../main'
import SignUp from '../signup'
import PageSendEmail from '../pageSendEmail'

function PublicAppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/sign-up'} component={SignUp} />
                <Route path={'/send-email-page'} component={PageSendEmail} />
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default PublicAppRouter
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../main'
import SignUp from '../signup'
import PageSendEmail from '../pageSendEmail'
import CheckEmailPage from '../checkEmailPage';
import Login from '../login';

function PublicAppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/sign-up'} component={SignUp} />
                <Route path={'/send-email-page'} component={PageSendEmail} />
                <Route path={'/check-email-page'} component={CheckEmailPage} />
                <Route path={'/login'} component={Login} />
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default PublicAppRouter
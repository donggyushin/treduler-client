import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoggedOut from '../loggedOut'
import SignUp from '../signup'
import PageSendEmail from '../pageSendEmail'
import CheckEmailPage from '../checkEmailPage';
import Login from '../login';
import Main from '../main'
import PageCheckToken from '../PageCheckToken';

function PublicAppRouter() {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={Main} />
                <Route path={'/sign-up'} component={SignUp} />
                <Route path={'/send-email-page'} component={PageSendEmail} />
                <Route path={'/check-email-page'} component={CheckEmailPage} />
                <Route path={'/login'} component={Login} />
                <Route path={'/loggedOut'} component={LoggedOut} />
                <Route path={'/check-token'} component={PageCheckToken} />
                <Route component={Main} />
            </Switch>
        </Router>
    )
}

export default PublicAppRouter
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../main';
import Board from '../board'
import Team from '../Team'
import { connect } from 'react-redux'
import Invitation from './Invitation';
import NewPasswordForm from '../NewPasswordForm';

class RoutesContainer extends React.Component {

    render() {
        const { invitation, newPasswordForm } = this.props;
        return <Routes invitation={invitation} newPasswordForm={newPasswordForm} />
    }
}

function Routes({ invitation, newPasswordForm }) {
    return (
        <Router>

            <Switch>
                <Route exact path={'/'} component={Main} />
                <Route exact path={'/board/:id'} component={Board} />
                <Route path={'/team/:id'} component={Team} />
                <Route path={'/team/:id/members'} component={Team} />
                <Route component={Main} />
            </Switch>
            {invitation.show && <Invitation />}
            {newPasswordForm.view && <NewPasswordForm />}
        </Router>
    )
}

const mapStateToProps = state => {
    return {
        invitation: state.Invitation,
        newPasswordForm: state.NewPasswordForm
    }
}

export default connect(mapStateToProps, {})(RoutesContainer);
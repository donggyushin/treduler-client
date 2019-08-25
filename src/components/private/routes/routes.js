import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from '../main';
import Board from '../board'
import Team from '../Team'
import { connect } from 'react-redux'
import Invitation from './Invitation';

class RoutesContainer extends React.Component {

    render() {
        const { invitation } = this.props;
        return <Routes invitation={invitation} />
    }
}

function Routes({ invitation }) {
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
        </Router>
    )
}

const mapStateToProps = state => {
    return {
        invitation: state.Invitation
    }
}

export default connect(mapStateToProps, {})(RoutesContainer);
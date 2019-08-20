import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Team from './Team';

const Container = styled.div`
    margin-top:10px;
`

class Teams extends React.Component {

    render() {
        const { teams } = this.props;
        return <Container>
            {teams.map(team => <Team key={team.id} team={team} />)}
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        teams: state.team.teams
    }
}

export default connect(mapStateToProps, {})(Teams)
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const TeamProfileImage = styled.img`
    width:60px;
    height:60px;
    object-fit:cover;
    border-radius:5px;
`
const TeamName = styled.div`
    color: #42526e;
    font-size: 17px;
    font-weight: 500;
`

class TeamInfo extends React.Component {
    render() {
        const { team } = this.props;
        return <Container>
            <TeamProfileImage src={team.photo ? team.photo : require(`../../../../../assets/boardBackground/0.png`)} />
            <TeamName>{team.name}</TeamName>
        </Container>
    }
}

export default TeamInfo
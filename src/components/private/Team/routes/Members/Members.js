import React from 'react';
import styled from 'styled-components';
import TeamMembers from './TeamMembers';
import MemberLists from './MemberLists';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

class Members extends React.Component {
    render() {
        return <Container>
            <TeamMembers />
            <MemberLists />
        </Container>
    }
}

export default Members
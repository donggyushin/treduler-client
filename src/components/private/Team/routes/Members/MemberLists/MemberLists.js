import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import MemberItem from './MemberItem';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:1104px;
    margin-top:10px;
`

class MemberLists extends React.Component {
    render() {
        const { members } = this.props;
        return <Container>
            {members && members.map(member => <MemberItem key={member.email} member={member} />)}
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        members: state.team.team.users
    }
}

export default connect(mapStateToProps, {})(MemberLists)
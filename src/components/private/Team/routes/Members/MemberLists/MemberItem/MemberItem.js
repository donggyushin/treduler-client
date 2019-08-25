import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getOutOfTeam } from '../../../../../../../actions/user'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height: 80px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`

const ProfileImageAndNameContainer = styled.div`
    display:flex;
    align-items:center;
`

const ButtonsContainer = styled.div`
    display:flex;
    align-items:center;
`

const ProfileImage = styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    margin-right:7px;
`

const UserName = styled.div`
    font-weight: 700;
    font-size: 16px;
    color: #172b4d;
    line-height: 20px;
`

const LeaveButton = styled.button`
    background-color: rgba(9,30,66,.04);
    box-shadow: none;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 32px;
    margin-top: 8px;
    max-width: 300px;
    overflow: hidden;
    padding: 6px 12px;
    position: relative;
    text-decoration: none;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;

    &:hover {
        background-color: rgba(9,30,66,.08);
        color: #091e42;
    }
`

class MemberItem extends React.Component {
    render() {
        const { member, me } = this.props;
        const { leaveButtonClicked } = this;
        return <Container>
            <ProfileImageAndNameContainer>
                <ProfileImage src={member.profilePhoto ? member.profilePhoto : 'https://d33v4339jhl8k0.cloudfront.net/docs/assets/528e78fee4b0865bc066be5a/images/52af1e8ce4b074ab9e98f0e0/file-mxuiNezRS5.jpg'} />
                <UserName>{member.name}</UserName>
            </ProfileImageAndNameContainer>
            <ButtonsContainer>
                {member.email === me.email && <LeaveButton onClick={leaveButtonClicked}>Leave</LeaveButton>}

            </ButtonsContainer>
        </Container>
    }

    leaveButtonClicked = () => {
        const { getOutOfTeam, team } = this.props;
        getOutOfTeam(team.id)
    }
}

const mapStateToProps = state => {
    return {
        me: state.user,
        team: state.team.team
    }
}

export default connect(mapStateToProps, { getOutOfTeam })(MemberItem)
import React from 'react';
import styled from 'styled-components';
import InviteNewMemberForm from './InviteMemberForm';

const Container = styled.div`
    width:1104px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin-top:36px;
    @media (max-width:1104px){
        width:90%;
    }

`

const Title = styled.div`
    color: rgb(23, 43, 77);
font-size: 18px;
font-weight: 600;
line-height: 30px;
text-size-adjust: 100%;
visibility: visible;
margin-bottom:18px;
`

const NormalText = styled.div`
    color: rgb(23, 43, 77);
font-size: 14px;
font-weight: 400;
line-height: 20px;
text-size-adjust: 100%;
visibility: visible;
`

const InviteNewMemberButton = styled.button`
outline:none;
    align-items: center;
background-color: rgb(90, 172, 68);
border-bottom-color: rgb(255, 255, 255);
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(255, 255, 255);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(255, 255, 255);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(255, 255, 255);
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border-top-style: none;
border-top-width: 0px;
box-shadow: none;
box-sizing: border-box;
color: rgb(255, 255, 255);
cursor: pointer;
display: flex;
flex-direction: row;
font-size: 14px;
font-weight: 400;
height: 32px;
line-height: 20px;
margin-top: 0px;
max-width: 300px;
overflow-x: hidden;
overflow-y: hidden;
padding-bottom: 6px;
padding-left: 12px;
padding-right: 12px;
padding-top: 6px;
position: relative;
text-decoration-color: rgb(255, 255, 255);
text-decoration-line: none;
text-decoration-style: solid;
text-overflow: ellipsis;
text-size-adjust: 100%;
transition-duration: 0.085s;
transition-property: background-color, border-color, box-shadow;
transition-timing-function: ease;
user-select: none;
visibility: visible;
white-space: normal;

`

const UserPlus = styled.i`
    color:white;
    margin-right:5px;
`

const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
    position: relative;
`

class TeamMembers extends React.Component {
    state = {
        form: false
    }
    render() {
        const { form } = this.state;
        const { inviteButtonClicked, shutOffForm } = this;
        return <Container>
            <Title>Team Members</Title>
            <NormalText>Team members can view and join all Team Visible boards and create new boards in the team.</NormalText>
            <ButtonContainer>
                <InviteNewMemberButton onClick={inviteButtonClicked}><UserPlus className={'fas fa-user-plus'} /> Invite team members</InviteNewMemberButton>
                {form && <InviteNewMemberForm shutOffForm={shutOffForm} />}
            </ButtonContainer>
        </Container>
    }

    shutOffForm = () => {
        this.setState({
            form: false
        })
    }

    inviteButtonClicked = () => {
        if (this.state.form === false) {
            this.setState({
                form: true
            })
        }
    }
}

export default TeamMembers
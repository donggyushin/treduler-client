import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { inviteNewMember } from '../../../../../../../actions/team'
import socketIOClient from 'socket.io-client';
import { ENDPOINT } from '../../../../../../../constants/endpoint';

const Container = styled.div`
    position:absolute;
    top:36px;
    background-attachment: scroll;
background-clip: border-box;
background-color: rgb(255, 255, 255);
background-image: none;
background-origin: padding-box;
background-position-x: 0%;
background-position-y: 0%;
background-size: auto;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
color: rgb(23, 43, 77);
font-size: 14px;
font-weight: 400;
height: 256px;
line-height: 20px;
overflow-x: hidden;
overflow-y: hidden;
text-size-adjust: 100%;
transform: matrix(1, 0, 0, 1, 0, 0);
width: 304px;
z-index: 70;
display:flex;
flex-direction:column;
align-items:flex-start;
`

const Title = styled.div`
border-bottom-color: rgba(9, 30, 66, 0.13);
border-bottom-style: solid;
border-bottom-width: 1px;
box-sizing: border-box;
color: rgb(107, 119, 140);
font-size: 14px;
font-weight: 400;
height: 41px;
line-height: 40px;
margin-bottom: 0px;
margin-left: 12px;
margin-right: 12px;
margin-top: 0px;
overflow-x: hidden;
overflow-y: hidden;
padding-bottom: 0px;
padding-left: 32px;
padding-right: 32px;
padding-top: 0px;
text-overflow: ellipsis;
text-size-adjust: 100%;
white-space: nowrap;
width: 280px;
z-index: 1;
text-align:center;
`

const XButton = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
`

const Label = styled.div`
    color: rgb(23,43,77);
    font-size: 16px;
    font-weight: 600;
    height: auto;
    line-height: 20px;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    margin-left: 12px;
    margin-top: 26px;
    margin-bottom: 8px;
`

const Input = styled.input`
    outline:none;
    background-color: rgb(251, 252, 253);
border-bottom-color: rgb(23, 43, 77);
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(23, 43, 77);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(23, 43, 77);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(23, 43, 77);
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border-top-style: none;
border-top-width: 0px;
box-shadow: inset 0 0 0 2px #0079bf;
box-sizing: border-box;
color: rgb(23, 43, 77);
cursor: text;
display: block;
font-size: 14px;
font-stretch: 100%;
font-style: normal;
font-variant-caps: normal;
font-variant-east-asian: normal;
font-variant-ligatures: normal;
font-variant-numeric: normal;
font-weight: 400;
height: 36px;
letter-spacing: normal;
line-height: 20px;
margin-bottom: 0px;
margin-left: 12px;
margin-right: 0px;
margin-top: 4px;
padding-bottom: 8px;
padding-left: 12px;
padding-right: 30px;
padding-top: 8px;
text-align: start;
text-indent: 0px;
text-rendering: auto;
text-shadow: none;
text-size-adjust: 100%;
text-transform: none;
transition-duration: 0.085s;
transition-property: background-color, border-color, box-shadow;
transition-timing-function: ease;
width: 280px;
word-spacing: 0px;
writing-mode: horizontal-tb;
-webkit-appearance: none;
-webkit-rtl-ordering: logical;
`

const UserIcon = styled.i`
    font-size: 12px;
`

const ButtonContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    position:absolute;
    bottom:10px;
`

const InviteButton = styled.button`
    width: 80%;
    background-color: ${props => props.disabled ? 'rgba(9, 30, 66, 0.04)' : 'rgb(90,172,68)'};
    color: ${props => props.disabled ? 'rgb(165, 173, 186)' : 'white'};
    border: 0;
    border-radius: 2px;
    height: 30px;
    outline:none;
`


class InviteMemberForm extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            const { shutOffForm } = this.props;
            shutOffForm()
        }
    }

    state = {
        buttonDisabled: true,
        email: "",
        endpoint: ENDPOINT + ':8080'
    }

    render() {
        const { shutOffForm } = this.props;
        const { buttonDisabled, email } = this.state;
        const { handleInput, inviteButtonClicked } = this;
        return <Container ref={this.setWrapperRef}>
            <XButton onClick={shutOffForm}>X</XButton>
            <Title>Add member</Title>
            <Label>
                <UserIcon className={'far fa-user'} /> Enter Email Address or Name
            </Label>
            <Input onChange={handleInput} value={email} name={'email'} autoFocus={true} placeholder={'e.g. taco@treduler.com'} />
            <ButtonContainer>
                <InviteButton onClick={inviteButtonClicked} disabled={buttonDisabled}>Invite</InviteButton>
            </ButtonContainer>
        </Container>
    }

    inviteButtonClicked = () => {
        const { inviteNewMember, team, shutOffForm } = this.props;
        const { email, endpoint } = this.state;
        const socket = socketIOClient(endpoint)
        const user = {
            email
        }
        inviteNewMember(team.id, email)
        socket.emit('send-invitation', user)


        shutOffForm()
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.value.length >= 8) {
            this.setState({
                buttonDisabled: false
            })
        } else {
            this.setState({
                buttonDisabled: true
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        team: state.team.team,
        user: state.user
    }
}

export default connect(mapStateToProps, { inviteNewMember })(InviteMemberForm)
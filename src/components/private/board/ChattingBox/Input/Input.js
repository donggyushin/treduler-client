import React from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client'
import { ENDPOINT } from '../../../../../constants/endpoint';
import { connect } from 'react-redux'

const Container = styled.div`
    position:absolute;
    bottom:0px;
    width:100%;
    margin-bottom: 10px;
    margin-left: 10px;
`

const InputForm = styled.input`
    width: 313px;
    border-radius: 10px;
    border: 0;
    margin-right: 21px;
    outline: none;
    padding-left: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    -webkit-box-shadow: 0 1px 2px #777;
    -moz-box-shadow: 0 2px 1px #777;
    box-shadow: 0 2px 1px #777;
    font-weight:700;
    &:focus {
        box-shadow: inset 0 0 0 2px #0079bf;
    }
    
`

const SendMessageButton = styled.button`
    border-radius: 50%;
    width: 36px;
    border: 0;
    background: #2980b9;
    height: 36px;
    cursor: pointer;
    outline:none;
    &:hover {
        background:#3498db;
    }
`

const ButtonIcon = styled.i`
    color: white;
    font-size: 22px;
    position: relative;
    right: 1px;

`

// const socket = socketIOClient(ENDPOINT + ":8083")
let socket = null;
class Input extends React.Component {
    state = {
        message: ""
    }

    componentDidMount() {
        socket = socketIOClient(ENDPOINT + ":8083");
    }

    componentWillUnmount() {
        socket.close()
    }



    render() {
        const { message } = this.state;
        const { handleInput, sendButtonClicked, enterKeyPressed } = this;
        return <Container>
            <InputForm onKeyPress={enterKeyPressed} onChange={handleInput} name={'message'} value={message} />
            <SendMessageButton onClick={sendButtonClicked}>
                <ButtonIcon className="far fa-paper-plane"></ButtonIcon>
            </SendMessageButton>
        </Container>
    }

    enterKeyPressed = e => {
        if (e.key === 'Enter') {
            this.sendButtonClicked()
        }
    }

    sendButtonClicked = () => {
        const { user, board } = this.props;
        const { message } = this.state;
        const data = {
            user,
            boardId: board.id,
            message
        }
        socket.emit('sendMessage', data)
        this.setState({
            message: ""
        })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        board: state.board.board
    }
}

export default connect(mapStateToProps, {})(Input)
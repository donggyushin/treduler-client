import React from 'react';
import styled from 'styled-components';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import { connect } from 'react-redux'

const TextArea = styled.div`
    width: 100%;
    height: 86%;
    padding: 4px;
    overflow-y: scroll;
    display:flex;
    flex-direction:column;
`

class TextAreaComponent extends React.Component {

    componentDidMount() {
        this.scrollToBottom();
    }


    componentDidUpdate(prevProps) {
        const textArea = document.getElementById("chattingTextArea")
        console.log('1', textArea.offsetHeight + textArea.scrollTop)
        console.log('2', textArea.scrollHeight)
        if (textArea.scrollHeight - (textArea.offsetHeight + textArea.scrollTop) < 100) {
            if (this.props.chats !== prevProps.chats) {
                this.scrollToBottom();
            }
        }
        if (textArea.offsetHeight + textArea.scrollTop === textArea.scrollHeight) {

        }
    }

    render() {
        const { user, chats } = this.props;
        return <TextArea id={'chattingTextArea'}>
            {chats && chats.map((chat, index) => {
                if (chat.user.email === user.email) {
                    console.log(typeof (chat.time))
                    return <MyMessage key={chat.time} time={chat.readableTime} message={chat.message} />
                } else {
                    if (index !== 0) {
                        if (chats[index - 1].user.email === chat.user.email) {
                            return <OtherMessage key={chat.time} time={chat.readableTime} message={chat.message} username={null} />
                        } else {
                            return <OtherMessage key={chat.time} time={chat.readableTime} message={chat.message} username={chat.user.name} />
                        }
                    } else {
                        return <OtherMessage key={chat.time} time={chat.readableTime} message={chat.message} username={chat.user.name} />
                    }
                }
            })}
        </TextArea>
    }

    scrollToBottom = () => {
        document.getElementById('chattingTextArea').scrollTop = document.getElementById('chattingTextArea').scrollHeight;
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        chats: state.Chat.chats
    }
}

export default connect(mapStateToProps, {})(TextAreaComponent)
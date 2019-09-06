import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import ChattingBackground from '../../../../assets/chatBackground/chatting-background.png'
import Header from './Header';

const RightToLeft = keyframes`
    from {
        right: -500px;
    }
    to {
        right: 5px;
    }
`

const Container = styled.div`
    animation-name:${RightToLeft};
    animation-duration:0.4s;
    background-image: url(${ChattingBackground});
    position: absolute;
    overflow:hidden;
    bottom: 5px;
    right: 5px;
    width: 400px;
    height: 80%;
    border-radius: 2px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
`

class ChattingBox extends React.Component {
    componentWillMount() {
        this.setState({
            leftToRight: false
        })
    }

    render() {

        const { xButtonClicked } = this;
        return <Container >
            <Header xButtonClicked={xButtonClicked} />
            Chatting Box
        </Container>
    }

    xButtonClicked = () => {
        console.log('xbutton clicked')
    }
}

export default ChattingBox;
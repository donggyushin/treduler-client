import React from 'react';
import styled from 'styled-components';
import ChattingBackground from '../../../../assets/chatBackground/chatting-background.png'
import Header from './Header';
import { connect } from 'react-redux';
import { turnChattingBoxDown } from '../../../../actions/chat'

import { TweenMax } from 'gsap'
import Input from './Input';
import TextArea from './TextArea';

const Container = styled.div`
    background-image: url(${ChattingBackground});
    position: absolute;
    overflow:hidden;
    bottom: 5px;
    right: -500px;
    width: 400px;
    height: 80%;
    border-radius: 2px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
`

class ChattingBox extends React.Component {

    componentDidMount() {
        TweenMax.to("#chattingBox", 0.3, {
            right: '5px'
        })
    }


    render() {

        const { xButtonClicked } = this;
        return <Container id={'chattingBox'}>
            <Header xButtonClicked={xButtonClicked} />
            <TextArea />
            <Input />
        </Container>
    }

    xButtonClicked = () => {
        const { turnChattingBoxDown } = this.props;
        TweenMax.to("#chattingBox", 0.3, {
            right: '-500px'
        })
        setTimeout(() => {
            turnChattingBoxDown()
        }, 300);
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnChattingBoxDown })(ChattingBox);
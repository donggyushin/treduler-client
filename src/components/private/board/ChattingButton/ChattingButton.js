import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnChattingBoxOn } from '../../../../actions/chat'

const Container = styled.div`
    position: absolute;
    right: 20px;
    bottom: 13px;
    background: #0984e3;
    padding: 7px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background:#74b9ff;
    }
`

const Icon = styled.i`
    color: white;
    font-size: 29px;
`

class ChattingButton extends React.Component {
    render() {
        const { chattingButtonClicked } = this;
        return <Container onClick={chattingButtonClicked} >
            <Icon className={'far fa-comment-dots'} />
        </Container>
    }

    chattingButtonClicked = () => {
        const { turnChattingBoxOn } = this.props;
        turnChattingBoxOn()
    }

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnChattingBoxOn })(ChattingButton)
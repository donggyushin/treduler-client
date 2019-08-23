import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #6b778c;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom:20px;
`

const Text = styled.div`
        width: 90%;
    text-align: center;
    border-bottom: 1px solid rgba(9,30,66,.13);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const XButton = styled.div`
    position:absolute;
    right: 4px;
    top: 9px;
    cursor: pointer;
    font-weight:500;
`

class Header extends React.Component {
    render() {
        const { turnDownNotification } = this.props;
        return <Container>
            <Text>Notifications</Text>
            <XButton onClick={turnDownNotification}>X</XButton>
        </Container>
    }
}

export default Header
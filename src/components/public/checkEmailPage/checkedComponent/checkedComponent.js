import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100vh;
    background-image: linear-gradient(0deg, rgb(82, 67, 170) 0%, rgb(0, 121, 191) 100%);
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const BigWhiteText = styled.div`
    margin-top: 100px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 50px;

`

const ResendButton = styled.button`
background: #27ae60;
    border-radius: 4px;
    border: 1px solid #16a085;
    padding: 11px;
    font-size: 22px;
    color: white;
    margin-top: 109px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background: #2ecc71;
    }
`

class CheckedComponent extends React.Component {

    render() {
        const { goToLogin } = this;
        return <Container>
            <BigWhiteText>Your email now verified!</BigWhiteText>
            <ResendButton onClick={goToLogin}>Go to login</ResendButton>
        </Container>
    }

    goToLogin = () => {
        window.location.href = "/login"
    }

}

export default CheckedComponent;
import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

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

const NormalWhiteText = styled.div`
font-size: 35px;
    margin-bottom: 50px;
`

const TinyWhiteText = styled.div`
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


class PageSendEmail extends React.Component {
    render() {
        const { resendButtonClicked } = this;
        return <Container>
            <BigWhiteText>We've sent you a verification email</BigWhiteText>
            <NormalWhiteText>Please check your email</NormalWhiteText>
            <TinyWhiteText>Don't you receive any mail?</TinyWhiteText>
            <ResendButton onClick={resendButtonClicked}>Then click here to request sending email</ResendButton>
        </Container>
    }

    resendButtonClicked = () => {
        const email = window.localStorage.getItem('email');
        axios.post('/api/verification/', {
            email
        })
            .then(res => res.data)
            .then(data => {
                alert(data.message)
            })
            .catch(err => console.error(err))
    }
}

export default PageSendEmail
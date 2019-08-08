import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100vh;
    background-image: linear-gradient(0deg, #fd79a8 0%, #e84393 100%);
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

const NormalWhiteText = styled.div`
font-size: 35px;
    margin-bottom: 50px;
`

const TinyWhiteText = styled.div`
`

class UncheckedComponent extends React.Component {

    render() {
        const { resendEmailButtonTapped } = this;
        return <Container>
            <BigWhiteText>Failed to verify your email</BigWhiteText>
            <NormalWhiteText>
                Resend verification email
            </NormalWhiteText>
            <TinyWhiteText>
                If there is nothing wrong in your sign up process, but still this page appear, please <a href={'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=donggyu9410@gmail.com&tf=1#'}>contact us.</a>
            </TinyWhiteText>
            <ResendButton onClick={resendEmailButtonTapped}>Resend verification email</ResendButton>
        </Container>
    }

    resendEmailButtonTapped = () => {
        window.location.reload()
    }
}
export default UncheckedComponent
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display:flex;
    color:white;
    transition-duration:0.5s;
    background:${props => props.navigationHasBackgroundColor === true ? '#0079bf' : 'rgba( 255, 255, 255, 0)'};
    justify-content:space-between;
    align-items:center;
    height:86px;
`

const LogoText = styled.div`
    font-size: 45px;
    margin-left: 39px;
    font-family: 'Libre Baskerville', serif;
font-family: 'Lobster', cursive;
user-select:none;
`

const LoginButton = styled.button`
    background: rgba(255,255,255, 0);
    border: 0;
    color: white;
    font-size: 20px;
    margin-right: 10px;
    font-weight: 600;
    cursor: pointer;
`
const SignupButton = styled.button`
        border: 0;
    background-color: white;
    color: #3498db;
    border-radius: 4px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`
const ButtonContainer = styled.div`
    margin-right:15px;
`

class Nav extends React.Component {
    render() {
        const { navigationHasBackgroundColor } = this.props;
        return <Container navigationHasBackgroundColor={navigationHasBackgroundColor}>
            <LogoText>Treduler</LogoText>
            <ButtonContainer>
                <a href={'/login'}>
                    <LoginButton>Log in</LoginButton>
                </a>
                <a href={'/sign-up'}>
                    <SignupButton>Sign up</SignupButton>
                </a>
            </ButtonContainer>
        </Container>
    }
}

export default Nav
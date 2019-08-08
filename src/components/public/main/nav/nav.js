import React, { Component } from 'react'
import styled from 'styled-components'

const Row = styled.div`
    display:flex;
    align-items:center;
    padding-top:15px;
    padding-bottom:15px;
    background-color:#F8F9F9;
    justify-content:space-between;
    position:fixed;
    top:0;
    width:100%;
    left:0;
`;

const TredulerIconContainer = styled.div`
    width:40px;
`

const TredulerIcon = styled.img`
    width:100%;
    opacity:0.3;
`

const TredulerText = styled.div`
    opacity:0.3;
    font-size:40px;
    font-weight:400;
    font-family: 'Libre Baskerville', serif;
font-family: 'Lobster', cursive;
user-select:none;
`

const TredulerTextAndImageContainer = styled.div`
    display:flex;
    align-items:center;
    margin-left:15px;
`

const LoginButton = styled.a`
background-color: #E2E4E6;
    border-radius: .4em;
    box-shadow: 0 2px 0 #CDD2D4;
    color: hsl(0,0%,30%);
    display: inline-block;
    font-size: .8em;
    line-height: 1.1em;
    margin: 0 .25em;
    padding: .7em 1.3em;
    text-decoration: none;
    vertical-align: top;
    font-size:16px;
    :hover {
        background-color: #D6DADC;
    }
`
const SignUpButton = styled.a`
background: linear-gradient(to bottom, #61BD4F 0%, #5AAC44 100%);
    box-shadow: 0 2px 0 #3F6F21;
    font-weight: bold;
    background-color: #E2E4E6;
    border-radius: .4em;
    box-shadow: 0 2px 0 #CDD2D4;
    color: white;
    display: inline-block;
    font-size: .8em;
    line-height: 1.1em;
    margin: 0 .25em;
    padding: .7em 1.3em;
    text-decoration: none;
    vertical-align: top;
    font-size:16px;
    :hover {
        background: linear-gradient(to bottom, #5AAC44 0%, #519839 100%);
  }
`
const LoginAndSignUpButtonContainer = styled.div`
    display:flex;
    align-items:center;
    margin-right:15px;
`



const Nav = () => (
    <Row>
        <TredulerTextAndImageContainer>
            <TredulerIconContainer>
                <TredulerIcon src={require('../../../../assets/images/treduler.png')} />
            </TredulerIconContainer>
            <TredulerText>
                Treduler
                    </TredulerText>
        </TredulerTextAndImageContainer>
        <LoginAndSignUpButtonContainer>
            <LoginButton>Login</LoginButton>
            <a href={'/sign-up'}>
                <SignUpButton>Sign Up</SignUpButton>
            </a>
        </LoginAndSignUpButtonContainer>
    </Row>
)

export default Nav;
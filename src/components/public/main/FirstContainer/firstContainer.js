import React from 'react';
import styled from 'styled-components';


const FirstContainer = styled.div`
    padding-top:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background: linear-gradient(0deg, #5243AA 0%, #0079bf 100%);
    color:white;
    padding-bottom:120px;
`

const BigText = styled.div`
    font-size: 43px;
    font-weight: 700;
    margin-bottom: 41px;
`;

const NormalText = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`;

const NormalGreyText = styled.div`
    color:#bdc3c7;
`

function FirstContainerComponent() {
    return (
        <FirstContainer>
            <BigText>Login to treduler</BigText>
            <NormalText>or create an account</NormalText>
            <NormalGreyText>log in with email and password</NormalGreyText>
        </FirstContainer>
    )
}

export default FirstContainerComponent
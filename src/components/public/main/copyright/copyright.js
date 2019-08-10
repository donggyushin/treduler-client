import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:80px;
    padding-bottom:80px;
    color:white;
    background: linear-gradient(0deg, #5243AA 0%, #0079bf 100%);
`

const BigWhiteText = styled.div`
    color:white;
    font-size:26px;
    font-weight:600;
    margin-bottom: 25px;
`

const NormalWhiteText = styled.div`
    color:white;
    font-size:18px;
    font-weight:200;
`

function Copyright() {
    return (
        <Container>
            <BigWhiteText>
                Rontend
            </BigWhiteText>
            <NormalWhiteText>
                © Copyright 2019. All rights reserved.
            </NormalWhiteText>
        </Container>
    )
}

export default Copyright
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    width:100%;
    padding-top:50px;
    padding-bottom:50px;
    justify-content:center;
`

const Left = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:500px;
`

const Image = styled.img`
    width:650px;
`

const BigText = styled.div`
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 35px;
    color: #2c3e50;
`

const NormalText = styled.div`
    font-size:22px;
    line-height: 1.8;
    color: #2c3e50;
`


function ThirdContainer() {
    return (
        <Container>
            <Left>
                <BigText>Work with any team</BigText>
                <NormalText>
                    Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.
                </NormalText>
            </Left>
            <Image src={require('./1.png')} />
        </Container>
    )
}

export default ThirdContainer
import React from 'react';
import styled from 'styled-components';


const SecondContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(135deg, #0079BF, #5067C5);
    color:white;
    padding-top:120px;
    padding-bottom:100px;
    margin-right:40px;
    width:100%;
`

const Column = styled.div`
    display:flex;
    flex-direction:column;
    width:500px;
`

const BigText = styled.div`
font-weight: 600;
    font-size: 42px;
    margin-bottom: 40px;
`;

const NormalText = styled.div`
    font-weight: 400;
    font-size: 21px;
    margin-bottom: 15px;
`;

const SignUpButton = styled.button`

    width: 220px;
    background: #27ae60;
    border: 0;
    color: white;
    font-size: 22px;
    padding: 10px;
    /* min-width: 200px; */
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    `



const Image = styled.img``

function SecondContainerComponent() {
    return (
        <SecondContainer>
            <Column>
                <BigText>
                    Treduler lets you work more collaboratively and get more done
                    </BigText>
                <NormalText>
                    Treduler's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.
                    </NormalText>
                <a href={'/sign-up'}>
                    <SignUpButton>
                        Sign Up - It's Free!
                    </SignUpButton>
                </a>
            </Column>
            <Image src={'https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg'} />
        </SecondContainer>
    )
}

export default SecondContainerComponent
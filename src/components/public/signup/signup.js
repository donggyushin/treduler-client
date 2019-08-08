import React from 'react';
import styled from 'styled-components';
import Copyright from '../../global/copyright'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-bottom:80px;
`

const BigText = styled.div`
    font-size:42px;
    font-weight:bold;
    margin-top:130px;
    margin-bottom:58px;
`

const NormalText = styled.div`
font-size:22px;
margin-bottom:10px;
`

const Input = styled.input`
width: 97.5%;
    height: 36px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 38px;
    background: #EDEFF0;
    border-radius: 4px;
    border: 1px solid #CDD2D4;
    `

const CreateNewAccountButton = styled.button`
    width: 100%;
    /* text-align: center; */
    background: #EDEFF0;
    border-radius: 4px;
    border: 1px solid #CDD2D4;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:rgb(140, 140, 140);
    font-size:23px;
`

class SignUp extends React.Component {
    render() {
        return (
            <Container>
                <Card>
                    <BigText>
                        Create a Trello Account
                </BigText>
                    <NormalText>Name</NormalText>
                    <Input placeholder={'e.g., Guybrush Threepwood'} />
                    <NormalText>Email</NormalText>
                    <Input placeholder={'e.g., threepwood@grogmail.com'} />
                    <NormalText>{'Password'}</NormalText>
                    <Input placeholder={'e.g., **********'} />
                    <CreateNewAccountButton disabled={true}>
                        Create New Account
                </CreateNewAccountButton>
                </Card>
                <Copyright />
            </Container>
        )
    }
}

export default SignUp
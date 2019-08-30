import React from 'react';
import styled from 'styled-components';
import Copyright from '../../global/copyright';

const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:450px;
    margin-top: 100px;
`

const Title = styled.div`
    color: #172b4d;
    font-size: 36px;
    margin-bottom: 10px;
`

const NormalText = styled.div`
    color: #172b4d;
    letter-spacing: 2px;
    margin-top: 67px;
    line-height: 40px;
    margin-bottom: 21px;
`

const Input = styled.input`
    background: #fff;
    border: none;
    color: #172b4d;
    box-shadow: inset 0 0 0 2px #CDD2D4;
    &:focus {
    box-shadow: inset 0 0 0 2px #0079bf;
    }
    width: 95%;
    padding-left: 10px;
    font-size: 20px;
    padding-top: 4px;
    padding-bottom: 20px;
    margin-bottom: 17px;
    outline:none;
`

const Button = styled.button`
    width: 95%;
    border: 0;
    background: ${props => props.disabled ? '#EDEFF0' : '#0984e3'};
    border-radius: 2px;
    color: ${props => props.disabled ? '#636e72' : 'white'} ;
    font-weight: 600;
    font-size: 20px;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

const CopyRightContainer = styled.div`
    position:absolute;
    bottom:0;
    width:100%;
`

class PageCheckToken extends React.Component {
    state = {
        buttonDisabled: true,
        token: ""
    }
    render() {
        const { buttonDisabled, token } = this.state;
        const { handleInput } = this;
        return <Container>
            <Card>
                <Title>Treduler</Title>
                <NormalText>
                    We've sent secret key to your email. Please fill the token.
                </NormalText>
                <Input onChange={handleInput} name={'token'} value={token} placeholder={'asdjkljsadjkl@!#aslj2837192...'} />
                <Button disabled={buttonDisabled}>Submit</Button>
            </Card>
            <CopyRightContainer>
                <Copyright />
            </CopyRightContainer>
        </Container>
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        if (e.target.value.length >= 40) {
            this.setState({
                buttonDisabled: false
            })
        } else {
            this.setState({
                buttonDisabled: true
            })
        }
    }
}

export default PageCheckToken;
import React from 'react';
import styled from 'styled-components';
import Copyright from '../../global/copyright'
import axios from 'axios'
import { Helmet } from 'react-helmet'

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
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 38px;
    background: #EDEFF0;
    border-radius: 4px;
    border: 1px solid #CDD2D4;
    `

const CreateNewAccountButton = styled.button`
    width: 100%;
    background:${props => props.disabled ? `#EDEFF0` : `#27ae60`};
    border-radius: 4px;
    border: 1px solid #CDD2D4;
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:${props => props.disabled ? `rgb(140, 140, 140)` : `white`};
    font-size:23px;
    cursor: pointer;
`

class SignUp extends React.Component {
    state = {
        allInputNotChecked: true,
        name: "",
        email: "",
        password: ""
    }
    render() {
        const { allInputNotChecked, name, email, password } = this.state;
        const { handleInput, createNewAccountButtonTapped } = this;
        return (
            <Container>
                <Helmet>
                    <title>
                        New Account | Treduler
                    </title>
                </Helmet>
                <Card>
                    <BigText>
                        Create a Trello Account
                </BigText>
                    <NormalText>Name</NormalText>
                    <Input name={'name'} onChange={handleInput} value={name} placeholder={'e.g., Guybrush Threepwood'} />
                    <NormalText>Email</NormalText>
                    <Input name={'email'} onChange={handleInput} value={email} placeholder={'e.g., threepwood@grogmail.com'} />
                    <NormalText>{'Password'}</NormalText>
                    <Input type={'password'} name={'password'} onChange={handleInput} value={password} placeholder={'e.g., **********'} />
                    <CreateNewAccountButton onClick={createNewAccountButtonTapped} disabled={allInputNotChecked}>
                        Create New Account
                </CreateNewAccountButton>
                </Card>
                <Copyright />
            </Container>
        )
    }

    createNewAccountButtonTapped = () => {
        const { name, email, password } = this.state;
        axios.post('/api/user/', {
            name,
            email,
            password
        })
            .then(res => {
                console.log('res.status: ', res.status)
                return res.data
            })
            .then(data => {
                console.log(data)
                if (data.ok === false) {
                    alert(data.message)
                    return
                } else {
                    window.localStorage.setItem('email', this.state.email)
                    window.location.href = "/send-email-page"
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })

        if (this.state.name.length >= 3 && this.state.email.length >= 5 && this.state.password.length >= 5) {
            this.setState({
                allInputNotChecked: false
            })
        } else {
            this.setState({
                allInputNotChecked: true
            })
        }

    }

}

export default SignUp
import React from 'react';
import styled from 'styled-components';
import Copyright from '../../global/copyright';
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authenticationActions'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const LoginForm = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:450px;
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

const Button = styled.button`
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
`

const Margin = styled.div`
    height:100px;
`

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        buttonDisabled: true
    }
    render() {
        const { handleInput, loginButtonClicked } = this;
        const { email, password, buttonDisabled } = this.state;
        return <Container>
            <LoginForm>
                <BigText>Login to treduler</BigText>
                <NormalText>
                    Email
                </NormalText>
                <Input name={'email'} value={email} onChange={handleInput} placeholder={'e.g., threepwood@grogmail.com'} />
                <NormalText>
                    Password
                </NormalText>
                <Input type={'password'} name={'password'} value={password} onChange={handleInput} placeholder={'e.g., **********'} />
                <Button onClick={loginButtonClicked} disabled={buttonDisabled}>Login</Button>
            </LoginForm>
            <Margin />
            <Copyright />
        </Container>
    }

    loginButtonClicked = () => {
        const { loginUser } = this.props;
        const { email, password } = this.state;
        loginUser(email, password)
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        if (this.state.email.length >= 5 && this.state.password.length >= 5) {
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

const mapStateToProps = (state) => { return {} }

export default connect(mapStateToProps, { loginUser })(Login)
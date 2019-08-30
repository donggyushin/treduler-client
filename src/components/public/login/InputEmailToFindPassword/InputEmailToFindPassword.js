import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    width: 422px;
    margin-top: 100px;
    padding-left: 10px;
    padding-bottom: 10px;
    border-radius: 2px;
    padding-right:10px;
    position: relative;
`

const Title = styled.div`
    margin-top: 10px;
    color: #172b4d;
    font-size: 20px;
    margin-bottom: 9px;
`

const Input = styled.input`
    outline:none;
    box-shadow: inset 0 0 0 2px #636e72;
    border: 0;
    height: 35px;
    padding-left: 10px;
    margin-bottom: 10px;
    &:focus {
        box-shadow: inset 0 0 0 2px #0079bf;
    }
`

const Button = styled.button`
    ${props => !props.disabled && `
        background: #0984e3;
    border: 0;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    font-weight: 700;
    `}
`

const X = styled.div`
    position: absolute;
    top: 7px;
    right: 12px;
    color: #2d3436;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        font-weight:700;
    }
`

class InputEmailToFindPassword extends React.Component {
    state = {
        buttonDisabled: true,
        email: ""
    }


    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            const { TurnInputEmailToFindPasswordDown } = this.props;
            TurnInputEmailToFindPasswordDown()
        }
    }


    render() {
        const { buttonDisabled, email } = this.state;
        const { handleInput, sendEmailButtonClicked } = this;
        const { TurnInputEmailToFindPasswordDown } = this.props;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <Title>
                    Forgot password?
                </Title>
                <Input onChange={handleInput} name={'email'} value={email} autoFocus={true} placeholder={'axvb20@gmeil.com'} />
                <Button onClick={sendEmailButtonClicked} disabled={buttonDisabled}>Send email</Button>
                <X onClick={TurnInputEmailToFindPasswordDown}>X</X>
            </Card>
        </Container>
    }

    sendEmailButtonClicked = () => {
        const { email } = this.state;
        axios.put(`/api/user/find-password/${email}`)
            .then(res => res.data)
            .then(data => {
                if (data.ok) {
                    window.location.href = "/check-token"
                } else {
                    alert(data.message)
                }
            })
            .catch(err => console.error(err))
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.value.length >= 10) {
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

export default InputEmailToFindPassword
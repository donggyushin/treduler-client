import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnNewPasswordFormDown } from '../../../actions/NewPasswordFrom'
import { updateUserPassword } from '../../../actions/user'

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1;
    background:rgba(0,0,0,0.6);
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    width: 370px;
    margin-top: 61px;
    min-height:200px;
    padding-left:10px;
    padding-right:10px;
    padding-top:3px;
    border-radius:3px;
    background:#fff;
    color:#172b4d;
    display:flex;
    flex-direction:column;
    padding-bottom: 10px;
    position: relative;
`

const Title = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
`

const Input = styled.input`
    background: #fff;
    border: none;
    box-shadow: inset 0 0 0 2px #0079bf;
    margin-bottom: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 7px;
    outline:none;
`

const Button = styled.button`
    margin-top: 10px;
    ${props => props.disabled === false && `
        outline: none;
    border: 0;
    background: #2980b9;
    color: white;
    cursor: pointer;
    `}
`

const RedText = styled.div`
    position: absolute;
    bottom: 38px;
    color: #e74c3c;
    font-size: 11px;

`

const X = styled.div`
    position: absolute;
    top: 1px;
    right: 5px;
    cursor: pointer;
`



class NewPasswordForm extends React.Component {

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
            this.xButtonClicked()
        }
    }

    state = {
        existingPassword: "",
        newPassword: "",
        doubleCheckPassword: "",
        firstTyping: false,
        doubleCheckResult: false,
        buttonDisabled: true
    }
    render() {
        const { existingPassword, newPassword, doubleCheckPassword, firstTyping, doubleCheckResult, buttonDisabled } = this.state;
        const { handleInput, xButtonClicked, submitButtonClicked } = this;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <X onClick={xButtonClicked}>X</X>
                <Title>
                    New password form
                </Title>
                <Input onChange={handleInput} autoFocus={true} name={'existingPassword'} value={existingPassword} placeholder={'Existing password...'} type={'password'} />
                <Input onChange={handleInput} name={'newPassword'} value={newPassword} placeholder={'New password...'} type={'password'} />
                <Input onChange={handleInput} name={'doubleCheckPassword'} value={doubleCheckPassword} placeholder={'double check your password...'} type={'password'} />
                {(firstTyping === true && doubleCheckResult === false) && <RedText>Passwords are different each other.</RedText>}
                <Button onClick={submitButtonClicked} disabled={buttonDisabled}>Submit</Button>
            </Card>
        </Container>
    }

    submitButtonClicked = () => {
        const { turnNewPasswordFormDown, updateUserPassword } = this.props;
        const { existingPassword, newPassword } = this.state
        updateUserPassword(newPassword, existingPassword);
        turnNewPasswordFormDown()
    }

    xButtonClicked = () => {
        const { turnNewPasswordFormDown } = this.props;
        turnNewPasswordFormDown()
    }

    doubleCheckForm = () => {
        const existingPasswordLength = document.getElementsByName('existingPassword')[0].value.length;
        const newPasswordLength = document.getElementsByName('newPassword')[0].value.length;
        const doubleCheckPasswordLength = document.getElementsByName('doubleCheckPassword')[0].value.length
        // const { newPassword, doubleCheckPassword } = this.state;
        const newPassword = document.getElementsByName('newPassword')[0].value
        const doubleCheckPassword = document.getElementsByName('doubleCheckPassword')[0].value

        if (existingPasswordLength !== 0 &&
            newPasswordLength !== 0 &&
            doubleCheckPasswordLength !== 0) {
            if (newPassword ===
                doubleCheckPassword) {
                this.setState({
                    buttonDisabled: false
                })
            } else {
                this.setState({
                    buttonDisabled: true
                })
            }
        } else {
            this.setState({
                buttonDisabled: true
            })
        }
    }


    handleInput = e => {
        const { doubleCheckForm } = this;
        const newPassword = document.getElementsByName('newPassword')[0].value;
        const doubleCheckPassword = document.getElementsByName('doubleCheckPassword')[0].value;
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'doubleCheckPassword') {
            this.setState({
                firstTyping: true
            })
        }
        if (newPassword ===
            doubleCheckPassword) {
            this.setState({
                doubleCheckResult: true
            })
        } else {
            this.setState({
                doubleCheckResult: false
            })
        }
        doubleCheckForm()
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnNewPasswordFormDown, updateUserPassword })(NewPasswordForm)
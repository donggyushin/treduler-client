import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { CreateNewCard as createNewCardMethod } from '../../../../../actions/list'


const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:13px;
`

const SaveButton = styled.button`
        border: 0;
    color: white;
    background: #27ae60;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 17px;
    padding-right: 17px;
    font-weight: 800;
    margin-right: 14px;
    cursor: pointer;
    z-index:0;
`

const XButton = styled.button`
    border: 0;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    z-index:2;
`


const Input = styled.input`
    width: 95%;
    border: 0;
    margin-bottom: 7px;
    min-height: 55px;
    border-radius: 4px;
    padding:10px;
    resize:none;
    color: #172b4d;
font-size: 16px;
z-index:3;
    &:focus {
        outline: none;
    }
`

class CreateNewCard extends React.Component {

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
            const { turnDownInputMode } = this.props;
            turnDownInputMode()
        }
    }

    state = {
        title: ""
    }

    render() {
        const { turnDownInputMode } = this.props;
        const { title } = this.state;
        const { handleInput, saveButtonClicked, enterKeyPressed } = this;
        return (
            <InputContainer ref={this.setWrapperRef}>
                <Input onKeyPress={enterKeyPressed} name={'title'} onChange={handleInput} value={title} autoFocus={true} />
                <ButtonContainer>
                    <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                    <XButton onClick={turnDownInputMode}>X</XButton>
                </ButtonContainer>
            </InputContainer>
        )
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    enterKeyPressed = (e) => {
        const { key } = e;
        if (key === 'Enter') {
            this.saveButtonClicked()
        }
    }

    saveButtonClicked = () => {
        const { listId, createNewCardMethod, turnDownInputMode } = this.props;
        const { title } = this.state;
        if (title.length === 0) {
            alert('Too short title for card')
            return;
        } else {
            createNewCardMethod(listId, title)
            turnDownInputMode()
        }
    }

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { createNewCardMethod })(CreateNewCard)
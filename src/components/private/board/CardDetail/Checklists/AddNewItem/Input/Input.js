import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { postNewChecklist } from '../../../../../../../actions/checklist'

const Container = styled.div`
    width:532px;
    margin-top:16px;
`

const Input = styled.input`
    width:100%;
    outline:none;
    border:0;
    border-radius:4px;
    height: 42px;
    margin-bottom: 10px;
    padding-left:15px;
    &:focus {
        box-shadow: inset 0 0 0 2px #0079bf;
    }
`

const Row = styled.div`
    display:flex;
    align-items:center;
`

const SaveButton = styled.button`
    background: #27ae60;
    color: white;
    border: 0;
    border-radius: 4px;
    font-weight: 900;
    margin-right: 15px;
    cursor: pointer;
    &:hover {
        background:#2ecc71;
    }
`

const XButton = styled.div`
    cursor: pointer;
`

class InputComponent extends React.Component {
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
            const { inputModeDown } = this.props;
            inputModeDown()
        }
    }

    state = {
        content: ""
    }

    render() {
        const { inputModeDown } = this.props;
        const { content } = this.state;
        const { handleInput, saveButtonClicked, enterKeypressed } = this;
        return <Container ref={this.setWrapperRef}>
            <Input onKeyPress={enterKeypressed} onChange={handleInput} value={content} name={'content'} autoFocus={true} />
            <Row>
                <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                <XButton onClick={inputModeDown}>X</XButton>
            </Row>
        </Container>
    }

    enterKeypressed = (e) => {
        if (e.key === 'Enter') {
            this.saveButtonClicked()
        }
    }

    saveButtonClicked = () => {
        const { postNewChecklist, card, inputModeDown } = this.props;
        const { content } = this.state;
        postNewChecklist(card.id, content)
        inputModeDown()
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => {
    return {
        card: state.card.card
    }
}

export default connect(mapStateToProps, { postNewChecklist })(InputComponent)
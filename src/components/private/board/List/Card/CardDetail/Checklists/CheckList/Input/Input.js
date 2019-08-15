import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { changeChecklistContent, deleteChecklist } from '../../../../../../../../../actions/card'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const Input = styled.input`
        box-shadow: inset 0 0 0 2px #0079bf;
    border: 0;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    height: 50px;
    outline:none;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    margin-top: 10px;
    margin-bottom: 20px;
`

const SaveButton = styled.div`
        background: #27ae60;
    color: white;
    font-weight: 800;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 4px;
    margin-right: 27px;
    cursor: pointer;
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
        const { content } = this.props;
        this.setState({
            content
        })
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
            console.log('click outside')
            inputModeDown()
        }
    }


    state = {
        content: ""
    }
    render() {
        const { content } = this.state;
        const { handleInput, saveButtonClicked, enterPressed } = this;
        const { inputModeDown } = this.props;
        return <Container ref={this.setWrapperRef}>
            <Input onKeyPress={enterPressed} name={'content'} onChange={handleInput} value={content} autoFocus={true} />
            <Row>
                <SaveButton onClick={saveButtonClicked} ref={this.setWrapperRef}>Save</SaveButton>
                <XButton onClick={inputModeDown}>X</XButton>
            </Row>
        </Container>
    }

    enterPressed = e => {
        const { saveButtonClicked } = this;
        if (e.key === 'Enter') {
            saveButtonClicked()
        }
    }

    saveButtonClicked = () => {
        const { changeChecklistContent, checklistId, inputModeDown, deleteChecklist } = this.props;
        const { content } = this.state;

        if (this.state.content.length === 0) {
            deleteChecklist(checklistId)
            return;
        }

        changeChecklistContent(checklistId, content)
        inputModeDown()
    }


    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { changeChecklistContent, deleteChecklist })(InputComponent)
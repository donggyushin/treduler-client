import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { postCheckList } from '../../../../../../../../../actions/card'

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
    margin-top:26px;
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
        const { content } = this.state;
        const { inputModeDown } = this.props;
        const { handleInput, saveButtonClicked, enterKeyPressed } = this;
        return <Container ref={this.setWrapperRef}>
            <Input autoFocus={true} onKeyPress={enterKeyPressed} onChange={handleInput} value={content} name={'content'} />
            <Row>
                <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                <XButton onClick={inputModeDown}>X</XButton>
            </Row>
        </Container>
    }

    enterKeyPressed = e => {
        const { saveButtonClicked } = this;
        if (e.key === 'Enter') {
            saveButtonClicked()
        }
    }

    saveButtonClicked = () => {
        const { postCheckList, inputModeDown, card } = this.props;
        const { content } = this.state;
        if (this.state.content.length === 0) {
            alert('Too short content')
            return
        }
        postCheckList(card.id, content)
        inputModeDown()
    }

    handleInput = (e) => {
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

export default connect(mapStateToProps, { postCheckList })(InputComponent)
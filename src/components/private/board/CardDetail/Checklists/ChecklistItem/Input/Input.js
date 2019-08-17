import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { changeContent } from '../../../../../../../actions/checklist'

const Container = styled.div`
    width:532px;
`

const Input = styled.input`
    width:100%;
    border-radius: 4px;
    border: 0;
    background: rgba(0,0,0,0.08);
    height: 36px;
    padding-left: 15px;
    margin-bottom: 10px;
    outline:none;
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
    cursor: pointer;`

const XButton = styled.div`
    cursor: pointer;
`

class InputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        content: ""
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const { checklist } = this.props;
        this.setState({
            content: checklist.content
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
            inputModeDown()
        }
    }
    render() {
        const { inputModeDown } = this.props;
        const { content } = this.state;
        const { handleInput, saveButtonClicked, enterKeypressed } = this;
        return (
            <Container ref={this.setWrapperRef}>
                <Input onKeyPress={enterKeypressed} onChange={handleInput} value={content} name={'content'} autoFocus={true} />
                <Row>
                    <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                    <XButton onClick={inputModeDown}>X</XButton>
                </Row>
            </Container>
        )
    }

    enterKeypressed = e => {
        if (e.key === 'Enter') {
            this.saveButtonClicked()
        }
    }

    saveButtonClicked = () => {
        const { content } = this.state;
        const { checklist, changeContent, inputModeDown } = this.props;
        changeContent(checklist.id, content)
        inputModeDown()

    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { changeContent })(InputComponent)
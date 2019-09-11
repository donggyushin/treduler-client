import React from 'react';
import styled from 'styled-components';
import TextArea from 'react-textarea-autosize'
import { connect } from 'react-redux'
import { putDesc } from '../../../../../../actions/card'
import './style.css'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`


const Row = styled.div`
    display:flex;
    align-items:center;
`

const SaveButton = styled.button`
    border-radius: 4px;
    border: 0;
    background: #27ae60;
    color: white;
    font-weight: 900;
    margin-right: 20px;
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
        const { desc } = this.props;
        this.setState({
            content: desc
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

            const { saveButtonClicked } = this;
            saveButtonClicked()

        }
    }
    state = {
        content: ""
    }

    render() {
        const { handleInput, saveButtonClicked } = this;
        const { content } = this.state;
        const { inputModeDown } = this.props;
        return <Container ref={this.setWrapperRef}>
            <TextArea onChange={handleInput} value={content} name={'content'} autoFocus={true} className={'textarea'} />
            <Row>
                <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                <XButton onClick={inputModeDown}>X</XButton>
            </Row>
        </Container>
    }


    saveButtonClicked = () => {
        const { putDesc, card, inputModeDown } = this.props;
        const { content } = this.state;
        putDesc(card.id, content)
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

export default connect(mapStateToProps, { putDesc })(InputComponent) 
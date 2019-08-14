import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import { connect } from 'react-redux'
import { putDesc } from '../../../../../../../../actions/card'
import './style.css'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`


const SaveButton = styled.button`
        background: #27ae60;
    border: 0;
    border-radius: 4px;
    color: white;
    font-weight: 800;
    margin-right: 20px;
    cursor: pointer;
`
const XButton = styled.div`
    cursor: pointer;
`
const Row = styled.div`
    display:flex;
`

const TextAreaContainer = styled.div``

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
            desc
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
            //   alert('You clicked outside of me!');
            console.log('clicked outside')
            const { inputModeDown } = this.props;
            inputModeDown()
        }
    }



    state = {
        desc: ""
    }



    render() {
        const { inputModeDown } = this.props;
        const { handleTextArea, saveButtonClicked } = this;
        const { desc } = this.state;
        return <Container ref={this.setWrapperRef}>

            <TextareaAutosize autoFocus={true} name={'desc'} value={desc} onChange={handleTextArea} className={'textareaautosize'}
            />

            <Row>
                <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                <XButton onClick={inputModeDown}>X</XButton>
            </Row>
        </Container>
    }

    saveButtonClicked = () => {
        const { desc } = this.state;
        const { putDesc, cardId, inputModeDown } = this.props;
        putDesc(cardId, desc)
        inputModeDown();
    }

    handleTextArea = e => {
        this.setState({
            [e.target.name]: e.target.value,
            convertedDesc: e.target.value
        })

    }

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { putDesc })(InputComponent)
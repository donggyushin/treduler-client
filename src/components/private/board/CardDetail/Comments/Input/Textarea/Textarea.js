import React from 'react';
import styled from 'styled-components';
import TextArea from 'react-autosize-textarea'
import { connect } from 'react-redux'
import { postComment } from '../../../../../../../actions/comment'
import './style.css'

const Container = styled.div``

const Save = styled.button`
    background: #27ae60;
    color: white;
    border-radius: 4px;
    font-weight: 900;
    border: 0;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;
`

class TextAreaComponent extends React.Component {
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
            const { turndownInputMode } = this.props;
            turndownInputMode()
        }
    }
    state = {
        message: ""
    }
    render() {
        const { message } = this.state;
        const { handleInput, saveButtonClicked } = this;
        return (

            <Container ref={this.setWrapperRef}>
                <TextArea onChange={handleInput} value={message} name={'message'} autoFocus={true} className={'width99'} placeholder={'Write comment...'} />
                <Save onClick={saveButtonClicked}>Save</Save>
            </Container>
        )
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveButtonClicked = () => {
        const { postComment, card, turndownInputMode } = this.props;
        const { message } = this.state;
        postComment(card.id, message)
        turndownInputMode()
    }
}

const mapStateToProps = state => {
    return {
        card: state.card.card,

    }
}

export default connect(mapStateToProps, { postComment })(TextAreaComponent)
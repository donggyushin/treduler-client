import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createNewList } from '../../../../actions/list'

const Container = styled.div`
    min-width:272px;
    padding:3px;
    border-radius:4px;
    border:0;
    background-color:#dfe1e6;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-right:9px;
`

const Input = styled.input`
    width:100%;
    height:20px;
    border-radius:4px;
    height: 36px;
    border:0;
    padding-left: 7px;
    box-shadow: inset 0 0 0 2px #0079bf;
    &:focus{
    outline: none;
}
`

const Row = styled.div`
    display:flex;
    justify-content:flex-start;
    margin-top:4px;
    align-items:center;
`

const SaveButton = styled.button`
    border-radius: 4px;
    background: #27ae60;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 700;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background:#2ecc71;
    }
`

const XButton = styled.span`
    cursor: pointer;
`

class AddNewListForm extends React.Component {

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        title: ""
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
        const { toggleAddNewList } = this.props;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            toggleAddNewList();
        }
    }



    render() {

        const { toggleAddNewList } = this.props;
        const { title } = this.state;
        const { handleInput, enterKeyPressed, saveButtonClicked } = this;
        return <Container ref={this.setWrapperRef}>
            <Input onKeyPress={enterKeyPressed} onChange={handleInput} name={'title'} value={title} autoFocus={true} placeholder={'Enter list title...'} />
            <Row>
                <SaveButton onClick={saveButtonClicked}>Save</SaveButton>
                <XButton onClick={toggleAddNewList}>X</XButton>
            </Row>
        </Container>
    }

    enterKeyPressed = (e) => {
        if (e.key === 'Enter') {

            this.saveButtonClicked();
        }
    }

    saveButtonClicked = () => {
        const { title } = this.state;
        const { boardId, createNewList, toggleAddNewList } = this.props;
        if (title.length >= 1) {
            createNewList(title, boardId)
            toggleAddNewList();
        } else {
            alert('Too short title for list')
            return;
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

}

const mapStateToProps = state => {
    return {
        boardId: state.board.board.id
    }
}

export default connect(mapStateToProps, { createNewList })(AddNewListForm)
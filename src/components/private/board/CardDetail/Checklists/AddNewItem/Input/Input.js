import React from 'react';
import styled from 'styled-components';

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
    render() {
        const { inputModeDown } = this.props;
        return <Container ref={this.setWrapperRef}>
            <Input autoFocus={true} />
            <Row>
                <SaveButton>Save</SaveButton>
                <XButton onClick={inputModeDown}>X</XButton>
            </Row>
        </Container>
    }
}

export default InputComponent
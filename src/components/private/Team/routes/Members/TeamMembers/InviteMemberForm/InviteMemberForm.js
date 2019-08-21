import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:absolute;
    top:36px;
    background-attachment: scroll;
background-clip: border-box;
background-color: rgb(255, 255, 255);
background-image: none;
background-origin: padding-box;
background-position-x: 0%;
background-position-y: 0%;
background-size: auto;
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
border-top-left-radius: 3px;
border-top-right-radius: 3px;
box-shadow: rgba(9, 30, 66, 0.25) 0px 8px 16px -4px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
color: rgb(23, 43, 77);
font-size: 14px;
font-weight: 400;
height: 256px;
line-height: 20px;
overflow-x: hidden;
overflow-y: hidden;
text-size-adjust: 100%;
transform: matrix(1, 0, 0, 1, 0, 0);
width: 304px;
z-index: 70;
`

const Title = styled.div`
border-bottom-color: rgba(9, 30, 66, 0.13);
border-bottom-style: solid;
border-bottom-width: 1px;
box-sizing: border-box;
color: rgb(107, 119, 140);
font-size: 14px;
font-weight: 400;
height: 41px;
line-height: 40px;
margin-bottom: 0px;
margin-left: 12px;
margin-right: 12px;
margin-top: 0px;
overflow-x: hidden;
overflow-y: hidden;
padding-bottom: 0px;
padding-left: 32px;
padding-right: 32px;
padding-top: 0px;
text-overflow: ellipsis;
text-size-adjust: 100%;
white-space: nowrap;
width: 280px;
z-index: 1;
text-align:center;
`

const XButton = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
`


class InviteMemberForm extends React.Component {
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
            const { shutOffForm } = this.props;
            shutOffForm()
        }
    }
    render() {
        const { shutOffForm } = this.props;
        return <Container ref={this.setWrapperRef}>
            <XButton onClick={shutOffForm}>X</XButton>
            <Title>Add member</Title>
        </Container>
    }
}

export default InviteMemberForm
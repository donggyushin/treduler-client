import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width:272px;
    height:32px;
    background:rgba(0,0,0,.12);
    color:hsla(0,0%,100%,.8);
    display:flex;
    align-items:center;
    padding-left:10px;
    border-radius:4px;
    margin-right:9px;
    &:hover {
        background:rgba(0,0,0,.32);
    }
    cursor: pointer;
`

const XText = styled.span`
        margin-right: 7px;
    font-size: 20px;
`

const Text = styled.span`
    font-weight:600;
`

class AddNewList extends React.Component {
    render() {
        const { toggleAddNewList } = this.props;
        return <Container onClick={toggleAddNewList}>
            <XText>+</XText>
            <Text>Add new list</Text>
        </Container>
    }
}

export default AddNewList
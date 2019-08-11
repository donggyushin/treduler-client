import React from 'react';
import styled from 'styled-components';
import Title from './title';
import CreateNewBoardUI from './createNewBoardUI';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:800px;
    overflow-y:scroll;
`

const BoardsContainer = styled.div`
    display:flex;
    width:100%;
    padding-top:15px;
`

const CreateNewBoard = styled.div`
    background-color: rgba(9,30,66,.04);
    box-shadow: none;
    border: none;
    border-radius:4px;
    color: #172b4d;
    height: 96px;
    font-weight: 400;
    font-size:15px;
    width:187px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    margin-right:15px;
    cursor: pointer;

    &:hover{
        background:rgba(9,30,66,.08);
    }
`




class Boards extends React.Component {
    state = {
        createNewBoardUIVisible: false
    }
    render() {
        const { createNewBoardUIVisible } = this.state;
        const { makeCreateNewBoardUIVisible, makeCreateNewBoardUIInvisible } = this;
        return <Container>
            <Title icon={'far fa-user'} text={'Personal Boards'} />
            <BoardsContainer>
                <CreateNewBoard onClick={makeCreateNewBoardUIVisible}>Create new board</CreateNewBoard>
            </BoardsContainer>
            {createNewBoardUIVisible && <CreateNewBoardUI makeCreateNewBoardUIInvisible={makeCreateNewBoardUIInvisible} />}

        </Container>
    }

    makeCreateNewBoardUIVisible = () => {
        this.setState({
            createNewBoardUIVisible: true
        })
    }
    makeCreateNewBoardUIInvisible = () => {
        this.setState({
            createNewBoardUIVisible: false
        })
    }
}
export default Boards
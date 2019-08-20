import React from 'react';
import styled from 'styled-components';
import Title from './title';
import CreateNewBoardUI from './createNewBoardUI';
import { connect } from 'react-redux'
import Board from './board';
import TeamBoards from './TeamBoards/TeamBoards';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:810px;
    overflow-y:scroll;
`

const BoardsContainer = styled.div`
    display:flex;
    width:100%;
    padding-top:15px;
    flex-wrap: wrap;
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
        const { boards, teams } = this.props;
        return <Container>
            <Title icon={'far fa-user'} text={'Personal Boards'} />
            <BoardsContainer>
                {boards.map(board => <Board board={board} key={board.id} />)}
                <CreateNewBoard onClick={makeCreateNewBoardUIVisible}>Create new board</CreateNewBoard>
            </BoardsContainer>
            {createNewBoardUIVisible && <CreateNewBoardUI makeCreateNewBoardUIInvisible={makeCreateNewBoardUIInvisible} />}
            {teams.map(team => <TeamBoards key={team.id} boards={team.boards} team={team} />)}
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

const mapStateToProps = state => {
    return {
        boards: state.board.boards,
        teams: state.team.teams
    }
}

export default connect(mapStateToProps, {})(Boards) 
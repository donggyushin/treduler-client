import React from 'react';
import styled from 'styled-components';
import CreateBoardCard from './CreateBoardCard';
import Board from './Board';

const Container = styled.div``

const TitleContainer = styled.div`
    display:flex;
    align-items:center;
`

const TeamImageContainer = styled.div`
    width:30px;
    height:30px;
    border-radius:8px;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    margin-right:15px;
`

const TeamImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Title = styled.div`
    color: #42526e;
    font-size: 17px;
    font-weight: 500;
`

const BoardsContainer = styled.div`
    display: flex;
    width: 100%;
    padding-top: 15px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`


class TeamBoards extends React.Component {
    render() {
        const { team, boards } = this.props;
        return <Container>
            <TitleContainer>
                <TeamImageContainer>
                    <TeamImage src={team.photo ? team.photo : require(`../../../../../../assets/boardBackground/0.png`)} />
                </TeamImageContainer>
                <Title>{team.name}</Title>
            </TitleContainer>
            <BoardsContainer>
                {boards.map(board => <Board board={board} key={board.id} />)}
                <CreateBoardCard teamId={team.id} />
            </BoardsContainer>
        </Container>
    }
}

export default TeamBoards
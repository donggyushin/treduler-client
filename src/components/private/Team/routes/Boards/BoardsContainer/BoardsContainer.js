import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Board from './Board';
import CreateNewBoard from './CreateNewBoard';

const Container = styled.div`
        width: 1124px;
        margin-top: 49px;
        display:flex;
        flex-wrap: wrap;
        @media (max-width: 1124px) {
            width:90%;
        }
`

class BoardsContainer extends React.Component {
    render() {
        const { boards } = this.props;
        return <Container>
            {boards && boards.map(board => <Board key={board.id} board={board} />)}
            <CreateNewBoard />
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        boards: state.team.team.boards
    }
}

export default connect(mapStateToProps, {})(BoardsContainer)
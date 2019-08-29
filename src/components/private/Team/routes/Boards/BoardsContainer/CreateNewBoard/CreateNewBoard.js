import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnOnCreateNewBoard } from '../../../../../../../actions/CreateNewTeamBoard'

const Container = styled.div`
    &:hover {
        background-color:rgba(9,30,66,.08);
    }
    background-color: rgba(9,30,66,.04);
    box-shadow: none;
    border: none;
    border-radius: 4px;
    color: #172b4d;
    height: 96px;
    font-weight: 400;
    font-size: 15px;
    width: 265px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition-property: background-color,border-color,box-shadow;
    transition-property: background-color,border-color,box-shadow;
    -webkit-transition-duration: 85ms;
    transition-duration: 85ms;
    -webkit-transition-timing-function: ease;
    transition-timing-function: ease;
    margin-right: 15px;
    cursor: pointer;
    margin-bottom: 25px;
`

class CreateNewBoard extends React.Component {
    render() {
        const { createNewBoardCardClicked } = this;
        return <Container onClick={createNewBoardCardClicked}>
            Create new board
        </Container>
    }

    createNewBoardCardClicked = () => {
        const { turnOnCreateNewBoard, team } = this.props;
        window.localStorage.setItem('teamId', team.id)
        turnOnCreateNewBoard()
    }
}

const mapStateToProps = state => {
    return {
        team: state.team.team
    }
}

export default connect(mapStateToProps, { turnOnCreateNewBoard })(CreateNewBoard)
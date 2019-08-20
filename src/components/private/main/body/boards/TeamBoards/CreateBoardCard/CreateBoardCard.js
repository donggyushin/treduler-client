import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnOnCreateNewBoard } from '../../../../../../../actions/CreateNewTeamBoard'

const Container = styled.div`
    background-color: rgba(9,30,66,.04);
    box-shadow: none;
    border: none;
    border-radius: 4px;
    color: #172b4d;
    height: 96px;
    font-weight: 400;
    font-size: 15px;
    width: 187px;
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
    margin-bottom:25px;
    &:hover {
        background: rgba(9,30,66,.08);
    }
`

class CreateBoardCard extends React.Component {
    render() {
        const { createBoardCardClicked } = this;
        return <Container onClick={createBoardCardClicked}>
            Create new board
        </Container>
    }

    createBoardCardClicked = () => {
        const { teamId, turnOnCreateNewBoard } = this.props;
        window.localStorage.setItem('teamId', teamId)
        turnOnCreateNewBoard()
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnOnCreateNewBoard })(CreateBoardCard)
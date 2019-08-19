import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnAddNewTeamOn } from '../../../../../../actions/addNewTeamForm'


const TeamsContainer = styled.div`
    display:flex;
    align-items:center;
    padding: 5px;
    justify-content: space-between;
    margin-top: 22px;
    position: relative;
`

const Teams = styled.div`
    color: #6b778c;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: .04em;
    line-height: 16px;
    margin-top: 16px;
    text-transform: uppercase;
    flex: 1 1 auto;
    margin: 0;
    padding: 8px 0;`



const Plus = styled.div`
            font-size: 24px;
    cursor: pointer;
    color: #6b778c;
    font-weight: 300;
    position: relative;
    bottom: 3px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    border-radius: 4px;
    &:hover {
        background:rgba(0,0,0,0.05);
    }
`






class AddTeam extends React.Component {
    render() {
        const { plusButtonClicked } = this;
        return (
            <TeamsContainer>
                <Teams>TEAMS</Teams>
                <Plus onClick={plusButtonClicked}>+</Plus>
            </TeamsContainer>
        )
    }

    plusButtonClicked = () => {
        const { turnAddNewTeamOn } = this.props;
        turnAddNewTeamOn()
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {
    turnAddNewTeamOn
})(AddTeam)
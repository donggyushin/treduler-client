import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { acceptInvitation } from '../../../../../actions/user'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top: 50px;
    margin-bottom: 26px;
`

const AcceptButton = styled.button`
    border:0;
    color:white;
    background:#27ae60;
    border-radius:3px;
    margin-right:10px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background:#2ecc71;
    }
`

const RejectButton = styled.button`
    border:0;
    color:white;
    background:#c0392b;
    border-radius:3px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background:#e74c3c;
    }
`

class Buttons extends React.Component {
    render() {
        const { NopeButtonClicked, acceptButtonClicked } = this;
        return <Container>
            <AcceptButton onClick={acceptButtonClicked}>Accept</AcceptButton>
            <RejectButton onClick={NopeButtonClicked}>Nope</RejectButton>
        </Container>
    }

    acceptButtonClicked = () => {
        const { acceptInvitation, team } = this.props;
        acceptInvitation(team.id);
    }

    NopeButtonClicked = () => {
        const { turnDownInvitation } = this.props;
        turnDownInvitation()
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { acceptInvitation })(Buttons)
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { connect } from 'react-redux'
import { turnDownInvitation } from '../../../../actions/Invitation'
import UserInfo from './UserInfo';
import TeamInfo from './TeamInfo';
import Buttons from './Buttons';

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:rgba(0,0,0,0.6);
    z-index:2;
`

const Card = styled.div`
    min-width:400px;
    min-height:300px;
    background:#fff;
    margin-top:53px;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const NormalText = styled.div`
    color:#42526e;
    margin-bottom:10px;
`


class Invitation extends React.Component {
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
            const { turnDownInvitation } = this.props;
            turnDownInvitation()
        }
    }
    render() {
        const { user, team, turnDownInvitation } = this.props;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <Header />
                <UserInfo user={user} />
                <NormalText>
                    Want you to enjoy to
                </NormalText>
                <TeamInfo team={team} />
                <Buttons team={team} turnDownInvitation={turnDownInvitation} />
            </Card>
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        user: state.Invitation.user,
        team: state.Invitation.team
    }
}

export default connect(mapStateToProps, { turnDownInvitation })(Invitation);
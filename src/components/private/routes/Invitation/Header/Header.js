import React from 'react';
import styled from 'styled-components';
import { turnDownInvitation } from '../../../../../actions/Invitation'
import { connect } from 'react-redux'

const Container = styled.div`
        width: 93%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    color:#42526e;
    position: relative;
`

const XButton = styled.div`
    position:absolute;
    right:0px;
    cursor:pointer;
`

class Header extends React.Component {

    render() {
        const { xButtonClicked } = this;
        return <Container>
            Invitation
            <XButton onClick={xButtonClicked}>X</XButton>
        </Container>
    }

    xButtonClicked = () => {
        const { turnDownInvitation } = this.props;
        turnDownInvitation()
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnDownInvitation })(Header)
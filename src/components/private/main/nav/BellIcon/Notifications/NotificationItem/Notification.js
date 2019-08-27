import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { deleteNotification } from '../../../../../../../actions/notification'
import { turnOnInvitation } from '../../../../../../../actions/Invitation'


const Container = styled.div`
position:relative;
    color: #172b4d;
    margin-left: 10px;
    width: 93%;
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background: rgba(0,0,0,0.06);
    }
`

const XButton = styled.div`
    position:absolute;
    top: 4px;
    right: 3px;
    cursor: pointer;
    display:none;
    ${Container}:hover & {
        display:block;
    }
`

const Text = styled.div``

class NotificationItem extends React.Component {


    render() {
        const { notification } = this.props;
        const { xButtonClicked, itemClicked } = this;
        return <Container>
            <Text onClick={() => itemClicked(notification.sender, notification.teamId)}>
                {notification.message}
            </Text>

            <XButton onClick={xButtonClicked}>X</XButton>
        </Container>
    }

    itemClicked = (senderEmail, teamId) => {
        const { turnOnInvitation } = this.props;
        turnOnInvitation(senderEmail, teamId)
    }

    xButtonClicked = () => {
        const { deleteNotification, notification } = this.props;
        deleteNotification(notification.id)
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { deleteNotification, turnOnInvitation })(NotificationItem)
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import Notification from './Notifications';

const Container = styled.div`
    position: relative;
`

const Icon = styled.i`
    font-size: 20px;
    margin-right: 18px;
    margin-top: 3px;
    cursor: pointer;
`

const NotificationsNumber = styled.div`
    position: absolute;
    top: -5px;
    right: 8px;
    background: #e74c3c;
    color: white;
    border-radius: 3px;
    /* padding: 3px; */
    padding-right: 3px;
    padding-left: 3px;
`

class BellIcon extends React.Component {
    state = {
        notificationView: false
    }
    render() {
        const { notificationView } = this.state;
        const { notificationsNumber } = this.props;
        const { turnOnNotification, turnDownNotification } = this;
        return <Container>
            <Icon onClick={turnOnNotification} className={'far fa-bell'} />
            {notificationsNumber !== 0 && <NotificationsNumber>{notificationsNumber}</NotificationsNumber>}
            {notificationView && <Notification turnDownNotification={turnDownNotification} />}

        </Container>
    }

    turnOnNotification = () => {
        if (this.state.notificationView === false) {
            this.setState({
                notificationView: true
            })
        }
    }

    turnDownNotification = () => {
        if (this.state.notificationView === true) {
            this.setState({
                notificationView: false
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        notificationsNumber: state.notification.unreadNotificationNumbers
    }
}

export default connect(mapStateToProps, {})(BellIcon)
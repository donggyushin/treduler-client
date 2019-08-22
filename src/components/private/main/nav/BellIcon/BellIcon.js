import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

const Container = styled.div`
    cursor: pointer;
    position: relative;
`

const Icon = styled.i`
    font-size: 20px;
    margin-right: 18px;
    margin-top: 3px;
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
    render() {
        const { notificationsNumber } = this.props;
        return <Container>
            <Icon className={'far fa-bell'} />
            {notificationsNumber !== 0 && <NotificationsNumber>{notificationsNumber}</NotificationsNumber>}

        </Container>
    }
}

const mapStateToProps = state => {
    return {
        notificationsNumber: state.notification.unreadNotificationNumbers
    }
}

export default connect(mapStateToProps, {})(BellIcon)
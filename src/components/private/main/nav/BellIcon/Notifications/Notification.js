import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { connect } from 'react-redux'
import { fetchAllNotifications, readAllNotifications } from '../../../../../../actions/notification'
import NotificationItem from './NotificationItem';
import DeleteAllButton from './DeleteAllButton';

const Container = styled.div`
    position:absolute;
    right: 7px;
    width: 350px;
    max-height:500px;
    overflow-y:scroll;
    top: 34px;
    border-radius: 3px;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    background: #fff;
    display:flex;
    flex-direction:column;
    padding-bottom:8px;
`

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const { fetchAllNotifications, readAllNotifications } = this.props;
        fetchAllNotifications()
        readAllNotifications()
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
            const { turnDownNotification } = this.props;
            turnDownNotification()
        }
    }
    render() {
        const { turnDownNotification, unreadNotificationNumbers, notifications } = this.props;
        return <Container ref={this.setWrapperRef}>
            <Header turnDownNotification={turnDownNotification} />
            {notifications && notifications.map(notification => <NotificationItem key={notification.id} notification={notification} />)}
            {unreadNotificationNumbers !== 0 && <DeleteAllButton />}

        </Container>
    }
}

const mapStateToProps = state => {
    return {
        notifications: state.notification.notifications,
        unreadNotificationNumbers: state.notification.unreadNotificationNumbers
    }
}

export default connect(mapStateToProps, { fetchAllNotifications, readAllNotifications })(Notification)
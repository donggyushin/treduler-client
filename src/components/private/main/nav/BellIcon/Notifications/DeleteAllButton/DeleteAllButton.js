import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { deleteAllNotifications } from '../../../../../../../actions/notification'

const Container = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(0,0,0,0.1);
    margin-top: 24px;
`
const Text = styled.div`
    color:#0984e3;
    cursor: pointer;
    &:hover {
        color:#74b9ff;
    }
`

class DeleteAllButton extends React.Component {
    render() {
        const { deleteAllButtonClicked } = this;
        return <Container>
            <Text onClick={deleteAllButtonClicked}>delete all</Text>
        </Container>
    }

    deleteAllButtonClicked = () => {
        const { deleteAllNotifications } = this.props;
        deleteAllNotifications()
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { deleteAllNotifications })(DeleteAllButton)
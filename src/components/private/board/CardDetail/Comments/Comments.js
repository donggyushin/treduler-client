import React from 'react';
import styled from 'styled-components';
import InputComponent from './Input';
import { connect } from 'react-redux'
import CommentItem from './CommentItem';

const Container = styled.div``

class Comments extends React.Component {

    render() {
        const { comments } = this.props;
        return <Container>
            <InputComponent />
            {comments && comments.map(comment => <CommentItem key={comment.id} comment={comment} />)}
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comment.comments
    }
}

export default connect(mapStateToProps, {})(Comments)
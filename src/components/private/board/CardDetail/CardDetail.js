import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { connect } from 'react-redux'
import { shutDownCard, socketPutDesc } from '../../../../actions/card'
import { fetchChecklists, socketPostNewChecklist, socketToggleChecklist, socketChangeContent, socketDeleteChecklist } from '../../../../actions/checklist'
import { fetchComments, socketPostComment, socketDeleteComment } from '../../../../actions/comment'
import Description from './Description';
import Checklists from './Checklists';
import Comments from './Comments';
import socketIOClient from 'socket.io-client';

const Container = styled.div`
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.64);
    display:flex;
    flex-direction:column;
    align-items:center;
    z-index:1;
`

const Card = styled.div`
    background:#f4f5f7;
    width:768px;
    min-height:300px;
    border-radius:4px;
    margin-top:50px;
    color:#172b4d;
    position: relative;
    display:flex;
    flex-direction:column;
    padding:24px;
    overflow:auto;
`

const XButton = styled.div`
    
    position: absolute;
    top: 18px;
    right: 18px;
    font-weight: 600;
    cursor: pointer;
`

const GreyThinText = styled.div`
    margin-left: 35px;
    color: rgba();
    color: rgba(0,0,0,0.5);
`
const Margin = styled.div`
    margin-top:30px;
`
const SOCKET_ENDPOINT = "http://127.0.0.1:8082"
const socket = socketIOClient(SOCKET_ENDPOINT);

class CardDetail extends React.Component {


    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        console.log('component did mount')
        document.addEventListener('mousedown', this.handleClickOutside);
        const { card, fetchChecklists, socketDeleteComment, fetchComments, user, board, socketPutDesc, socketPostNewChecklist, socketToggleChecklist, socketChangeContent, socketDeleteChecklist, socketPostComment } = this.props;
        if (card.id && user.email) {
            fetchChecklists(card.id)
            fetchComments(card.id)
            this.setState({
                loading: false
            })

            if (board.team) {

                const data = {
                    userEmail: user.email,
                    cardId: card.id
                }
                socket.emit('login', data);
                socket.on('edit-card-description', data => {
                    socketPutDesc(data)
                })
                socket.on('add-new-checklist', data => {
                    socketPostNewChecklist(data)
                })
                socket.on('toggle-checklist', data => {
                    socketToggleChecklist(data)
                })
                socket.on('edit-checklist', data => {
                    socketChangeContent(data)
                })
                socket.on('delete-checklist', data => {
                    socketDeleteChecklist(data)
                })
                socket.on('add-comment', data => {
                    socketPostComment(data)
                })

                socket.on('delete-comment', data => {
                    socketDeleteComment(data)
                })

            }


        }
    }





    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        console.log('component will unmount')
        const { board } = this.props;
        if (board.team) {


            socket.emit('leave-card-detail')
        }
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
            const { XButtonClicked } = this;
            XButtonClicked()
        }
    }


    state = {
        loading: true,
        socketConnection: 0,
        endpoint: "http://127.0.0.1:8082"
    }

    render() {
        const { loading } = this.state;
        const { card } = this.props;
        const { XButtonClicked } = this;
        return <Container>
            {!loading &&
                <Card ref={this.setWrapperRef}>
                    <XButton onClick={XButtonClicked}>X</XButton>
                    <Title icon={'fas fa-credit-card'} title={card.title} />
                    <GreyThinText>in list {card.list.title}</GreyThinText>
                    <Margin />
                    <Title icon={'fas fa-list'} title={'Description'} />
                    <Description desc={card.description} />
                    <Margin />
                    <Title icon={'fas fa-check-square'} title={'Checklist'} />
                    <Checklists />
                    <Margin />
                    <Title icon={'fas fa-comment'} title={'Comments'} />
                    <Comments />
                </Card>
            }

        </Container>
    }

    XButtonClicked = () => {
        const { shutDownCard } = this.props;
        shutDownCard()
    }
}

const mapStateToProps = state => {
    return {
        card: state.card.card,
        user: state.user,
        board: state.board.board
    }
}

export default connect(mapStateToProps, { shutDownCard, fetchChecklists, fetchComments, socketPutDesc, socketPostNewChecklist, socketToggleChecklist, socketChangeContent, socketDeleteChecklist, socketPostComment, socketDeleteComment })(CardDetail) 
import React from 'react';
import styled from 'styled-components'
import Nav from '../main/nav'
import { connect } from 'react-redux';
import { fetABoard } from '../../../actions/board'
import { receiveChattingMessage } from '../../../actions/chat'
import { fetAllListsWithCards, socketCreateNewList, socketDeleteList, socketCreateNewCard, socketDeleteCard } from '../../../actions/list'
import Title from './Title';
import List from './List';
import AddNewList from './AddNewList';
import AddNewListForm from './AddNewListForm';
import { Helmet } from 'react-helmet'
import CardDetail from './CardDetail';
import ChangeProfile from '../main/ChangeProfile';
import socketIOClient from 'socket.io-client';
import { ENDPOINT } from '../../../constants/endpoint';
import axios from 'axios'
import ChattingButton from './ChattingButton';
import ChattingBox from './ChattingBox';


const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
`
const BackgroundImageContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:-1;
`

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


const Margin40 = styled.div`
    height:40px;
`

const ListsContainer = styled.div`
    display:flex;
    overflow-x:scroll;
    padding-top: 10px;
    padding-left: 15px;
    align-items:flex-start;
    height:88vh;
`

class Board extends React.Component {

    state = {
        loading: true,
        addNewList: false,
        endpoint: ENDPOINT + ":8081",
        socketConnection: 0
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { fetABoard, fetAllListsWithCards, board, user, socketCreateNewList } = this.props;
        const { endpoint } = this.state;
        fetABoard(id)
        fetAllListsWithCards(id)
        if (board.id && user.email) {
            // const socket = socketIOClient(this.state.endpoint);
            // const data = {
            //     board,
            //     user
            // }
            // socket.emit('login', data)


            // socket.on('post-new-list', data => {
            //     socketCreateNewList(data)
            // })
            const chattingSocket = socketIOClient(ENDPOINT + ":8083")
            const dataToChattingSocket = {
                user,
                boardId: board.id
            }
            chattingSocket.emit('login', dataToChattingSocket)

        }

        axios.get(`/api/user/check-authorization/${id}`, {
            headers: {
                jwt: localStorage.getItem('jwt')
            }
        }).then(res => res.data)
            .then(data => {
                if (data.authorized === false) {
                    window.location.href = "/";
                }
            })
            .catch(err => console.error(err))


    }



    componentWillReceiveProps(nextProps) {
        if (nextProps.board && nextProps.lists) {
            this.setState({
                loading: false
            })
        }
        if (nextProps.board !== this.props.board) {
            if (nextProps.board.id && this.props.user.email) {
                if (nextProps.board.team) {

                    const chattingSocket = socketIOClient(ENDPOINT + ":8083")
                    const dataToChattingSocket = {
                        user: this.props.user,
                        boardId: nextProps.board.id
                    }
                    chattingSocket.emit('login', dataToChattingSocket)
                    chattingSocket.on('allMembers', members => {
                        console.log('all members in board', members)
                    })
                    chattingSocket.on('sendMessage', data => {
                        console.log('receive message')
                        const { receiveChattingMessage } = this.props;
                        receiveChattingMessage(data)
                    })

                    if (this.state.socketConnection === 0) {
                        const socket = socketIOClient(this.state.endpoint);
                        const { board } = nextProps;
                        const { user, socketCreateNewList, socketDeleteList, socketCreateNewCard, socketDeleteCard } = this.props;
                        const data = {
                            board,
                            user
                        }
                        socket.emit('login', data)

                        socket.on('post-new-list', data => {
                            socketCreateNewList(data)
                        })

                        socket.on('delete-list', data => {
                            socketDeleteList(data)
                        })

                        socket.on('post-card', data => {
                            socketCreateNewCard(data)
                        })

                        socket.on('delete-card', data => {
                            socketDeleteCard(data)
                        })

                        this.setState({
                            socketConnection: this.state.socketConnection + 1
                        })
                    }





                }
            }
        }

    }


    render() {
        const { board, lists, cardVisible, changeProfile, chat } = this.props;
        const { loading, addNewList } = this.state;
        const { toggleAddNewList } = this;
        return <Container>
            <Helmet>
                <title>
                    {board.title ? `${board.title} | Treduler` : `Treduler`}

                </title>
            </Helmet>
            <BackgroundImageContainer>
                {(loading === false && board.backgroundImage) && <BackgroundImage src={require(`../../../assets/boardBackground/${board.backgroundImage}.png`)} />}
            </BackgroundImageContainer>
            <Nav board={true} />
            <Margin40 />
            <Title text={board.title} />

            <ListsContainer>
                {lists.map(list => <List key={list.id} list={list} />)}
                {addNewList ? <AddNewListForm toggleAddNewList={toggleAddNewList} /> : <AddNewList toggleAddNewList={toggleAddNewList} />}

            </ListsContainer>
            {cardVisible && <CardDetail />}
            {changeProfile && <ChangeProfile />}
            {board.team && <ChattingButton />}

            {chat.visiable && <ChattingBox />}
        </Container>
    }

    toggleAddNewList = () => {
        const { addNewList } = this.state;
        this.setState({
            addNewList: !addNewList
        })
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.board,
        lists: state.list.lists,
        cardVisible: state.card.visible,
        changeProfile: state.changeProfile.changeProfile,
        user: state.user,
        chat: state.Chat
    }
}

export default connect(mapStateToProps, { fetABoard, fetAllListsWithCards, socketCreateNewList, socketDeleteList, socketCreateNewCard, socketDeleteCard, receiveChattingMessage })(Board) 
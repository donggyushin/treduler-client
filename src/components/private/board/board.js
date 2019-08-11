import React from 'react';
import styled from 'styled-components'
import Nav from '../main/nav'
import { connect } from 'react-redux';
import { fetABoard } from '../../../actions/board'
import { fetAllListsWithCards } from '../../../actions/list'
import Title from './Title';
import List from './List';

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
    width:100%;
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
`

class Board extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        const { fetABoard, fetAllListsWithCards } = this.props;
        fetABoard(id)
        fetAllListsWithCards(id)

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.board && nextProps.lists) {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { board, lists } = this.props;
        const { loading } = this.state;
        return <Container>
            <BackgroundImageContainer>
                {loading === false && <BackgroundImage src={require(`../../../assets/boardBackground/${board.backgroundImage}.png`)} />}
            </BackgroundImageContainer>
            <Nav board={true} />
            <Margin40 />
            <Title text={board.title} />
            <ListsContainer>
                {lists.map(list => <List key={list.id} list={list} />)}
            </ListsContainer>
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        board: state.board.board,
        lists: state.list.lists
    }
}

export default connect(mapStateToProps, { fetABoard, fetAllListsWithCards })(Board) 
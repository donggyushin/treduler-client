import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux'
import { DeleteList, DeleteCard } from '../../../../actions/list'
import CreateNewCard from './Input'
import Card from './Card';

const ListContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 272px;
    background: #dfe1e6;
    border-radius: 4px;
    margin-right: 9px;
    padding-left: 12px;
    position: relative;
    
`

const Title = styled.div`
        color: #172b4d;
    font-size: 15px;
    margin-bottom: 6px;
    margin-top: 4px;
`




const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-right:10px;
`

const Delete = styled.div`
        display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    align-items:flex-start;
    justify-content: flex-end;
    opacity: 0;
    width: 100%;
    padding-top: 5px;
    position: absolute;
    padding-bottom: 5px;
    top: 0;
    left: 0;
    height: 100%;
    padding-right: 8px;
    &:hover {
        opacity:1;
    }
`
const Text = styled.div`
    cursor: pointer;
`

const AddNewCard = styled.div`
    margin-bottom: 7px;
    cursor: pointer;
    z-index:0;
    width:110px;
    margin-bottom: 7px;
    cursor: pointer;
    width: 110px;
    padding: 4px;
    border-radius: 4px;
    &:hover {
        background:rgba(0,0,0,.12);
    }
`



class List extends React.Component {
    state = {
        inputMode: false
    }
    render() {
        const { list } = this.props;
        const { inputMode } = this.state;
        const { turnOnInputMode, turnDownInputMode, deleteButtonClicked, deleteCard } = this;
        return <ListContainer>
            <TitleContainer>
                <Title>
                    {list.title}
                </Title>
                <Delete>
                    <Text onClick={() => deleteButtonClicked(list.id)}>Delete</Text>
                </Delete>
            </TitleContainer>
            {list.cards && list.cards.map(card => <Card key={card.id} card={card} deleteCard={deleteCard} />)}
            {inputMode ? <CreateNewCard listId={list.id} turnDownInputMode={turnDownInputMode} /> : <AddNewCard onClick={turnOnInputMode}>+ Add new card</AddNewCard>}

        </ListContainer>
    }

    deleteCard = (cardId) => {
        const { DeleteCard } = this.props;
        if (window.confirm('Are you sure you want to delete this card?')) {
            DeleteCard(cardId)
        } else {
            // Do nothing!
        }

    }

    deleteButtonClicked = (listId) => {
        const { DeleteList } = this.props;
        if (window.confirm('Are you sure you want to delete this list')) {
            DeleteList(listId)
        } else {
            return;
        }

    }

    turnOnInputMode = () => {
        this.setState({
            inputMode: true
        })
    }
    turnDownInputMode = () => {
        this.setState({
            inputMode: false
        })
    }
}

const mapStateToProps = state => {
    return {}
}


export default connect(mapStateToProps, { DeleteList, DeleteCard })(List);
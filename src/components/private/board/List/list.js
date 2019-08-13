import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { DeleteList } from '../../../../actions/list'
import CreateNewCard from './Input'

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

const Card = styled.div`
    background: white;
    color: #172b4d;
    width: 95%;
    margin-bottom: 10px;
    padding-left: 7px;
    padding-top: 3px;
    padding-bottom: 36px;
    padding-right: 7px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    z-index:3;
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
    z-index:2;
    width:110px;
    margin-bottom: 7px;
    cursor: pointer;
    z-index: 2;
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
        const { turnOnInputMode, turnDownInputMode, deleteButtonClicked } = this;
        return <ListContainer>
            <TitleContainer>
                <Title>
                    {list.title}
                </Title>
                <Delete>
                    <Text onClick={() => deleteButtonClicked(list.id)}>Delete</Text>
                </Delete>
            </TitleContainer>
            {list.cards && list.cards.map(card => <Card key={card.id}>{card.title}</Card>)}
            {inputMode ? <CreateNewCard listId={list.id} turnDownInputMode={turnDownInputMode} /> : <AddNewCard onClick={turnOnInputMode}>+ Add new card</AddNewCard>}

        </ListContainer>
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


export default connect(mapStateToProps, { DeleteList })(List);
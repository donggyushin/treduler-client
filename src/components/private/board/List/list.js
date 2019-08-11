import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 272px;
    background: #dfe1e6;
    border-radius: 4px;
    margin-right: 9px;
    padding-left: 12px;
    position: relative;
    
`

const Title = styled.div`
        color: #172b4d;
    font-size: 17px;
    font-weight: 600;
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
`

const Input = styled.textarea`
    width: 95%;
    border: 0;
    margin-bottom: 7px;
    min-height: 55px;
    border-radius: 4px;
    padding:10px;
    resize:none;
    color: #172b4d;
font-size: 16px;
    &:focus {
        outline: none;
    }
`

const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:13px;
`

const SaveButton = styled.button`
        border: 0;
    color: white;
    background: #27ae60;
    border-radius: 4px;
    font-size: 16px;
    padding-left: 17px;
    padding-right: 17px;
    font-weight: 800;
    margin-right: 14px;
    cursor: pointer;
    z-index:2;
`

const XButton = styled.button`
    border: 0;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    z-index:2;
`


class List extends React.Component {
    state = {
        inputMode: false
    }
    render() {
        const { list } = this.props;
        const { inputMode } = this.state;
        const { turnOnInputMode, turnDownInputMode } = this;
        return <ListContainer>
            <TitleContainer>
                <Title>
                    {list.title}
                </Title>
                <Delete>
                    <Text>Delete</Text>
                </Delete>
            </TitleContainer>
            {list.cards.map(card => <Card key={card.id}>{card.title}</Card>)}
            {inputMode ? <InputContainer>
                <Input autoFocus={true} />
                <ButtonContainer>
                    <SaveButton>Save</SaveButton>
                    <XButton onClick={turnDownInputMode}>X</XButton>
                </ButtonContainer>
            </InputContainer> : <AddNewCard onClick={turnOnInputMode}>+ Add new card</AddNewCard>}

        </ListContainer>
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

export default List;
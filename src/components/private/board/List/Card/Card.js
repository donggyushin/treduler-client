import React from 'react';
import styled from 'styled-components';
import CardDetail from './CardDetail';

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
    z-index:1;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
    position:relative;
`

const CardBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:hover {
        background-color: rgba(0,0,0,0.04);
    }
    
    border-radius: 4px;
`

const XButtonForCard = styled.div`
    position:absolute;
    top:0px;
    right:8px;
    color:rgba(0,0,0,0.4);
    opacity:0;
    z-index:2;
    ${CardBackground}:hover & {
        opacity:1;
    }
`

class CardComponent extends React.Component {
    state = {
        cardDetail: false
    }
    render() {
        const { deleteCard, card, list } = this.props;
        const { cardDetail } = this.state;
        const { turnCardDetailDown, turnCardDetailOn } = this;
        return (
            <Card onClick={turnCardDetailOn}>
                <CardBackground >
                    <XButtonForCard onClick={() => deleteCard(card.id)}>X</XButtonForCard>
                </CardBackground>
                {card.title}
                {cardDetail && <CardDetail list={list} cardId={card.id} turnCardDetailDown={turnCardDetailDown} />}
            </Card>
        )
    }

    turnCardDetailDown = () => {
        this.setState({
            cardDetail: false
        })
    }

    turnCardDetailOn = () => {
        if (this.state.cardDetail === false) {

            this.setState({
                cardDetail: true
            })
        }
    }
}

export default CardComponent
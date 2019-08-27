import React from 'react';
import styled from 'styled-components';
import { fetchCard } from '../../../../../actions/card'
import { connect } from 'react-redux'

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
    z-index:0;
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


    render() {
        const { card } = this.props;
        const { cardClicked, xButtonClicked } = this;
        return (
            <Card onClick={() => cardClicked(card.id)}>
                <CardBackground >
                    <XButtonForCard onClick={xButtonClicked}>X</XButtonForCard>
                </CardBackground>
                {card.title}
            </Card>
        )
    }

    xButtonClicked = (e) => {
        e.stopPropagation()
        const { card, deleteCard } = this.props;
        deleteCard(card.id)
    }

    cardClicked = (cardId) => {

        const { fetchCard } = this.props;
        fetchCard(cardId)
    }

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { fetchCard })(CardComponent)
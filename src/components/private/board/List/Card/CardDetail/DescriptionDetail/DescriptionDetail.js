import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import { connect } from 'react-redux'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const Card = styled.div`
        width: 561px;
    padding: 7px;
    border-radius: 4px;
    min-height: 70px;
    background-color: rgba(0,0,0,0.03);
    padding-left:15px;
    cursor: pointer;
    white-space: pre-line;
    &:hover {
        background-color: rgba(0,0,0,0.08);
    }
`


class DescDetail extends React.Component {
    state = {
        inputMode: false
    }
    render() {
        const { inputMode } = this.state;
        const { inputModeDown, inputModeOn } = this;
        const { card } = this.props;
        return <Container>
            {inputMode ? <Input cardId={card.id} desc={card.description} inputModeDown={inputModeDown} /> : <Card onClick={inputModeOn}>
                {card.description ? card.description : `Add a more detailed description...`}
            </Card>}

        </Container>
    }

    inputModeOn = () => {
        this.setState({
            inputMode: true
        })
    }

    inputModeDown = () => {
        this.setState({
            inputMode: false
        })
    }
}
const mapStateToProps = state => {
    return {
        card: state.card.card
    }
}

export default connect(mapStateToProps, {})(DescDetail)
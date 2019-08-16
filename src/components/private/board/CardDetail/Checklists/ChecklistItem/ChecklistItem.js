import React from 'react';
import styled from 'styled-components';

import './style.css'
import Item from './Item';
import InputComponent from './Input';

const Container = styled.div`
    
`


class ChecklistItem extends React.Component {
    state = {
        inputMode: false
    }
    render() {
        const { checklist } = this.props;
        const { inputModeDown, inputModeOn } = this;
        const { inputMode } = this.state;
        return (
            <Container>
                {inputMode ? <InputComponent checklist={checklist} inputModeDown={inputModeDown} /> : <Item inputModeOn={inputModeOn} checklist={checklist} />}

            </Container>
        )
    }

    inputModeOn = () => {
        if (this.state.inputMode === false) {
            this.setState({
                inputMode: true
            })
        }
    }

    inputModeDown = () => {
        this.setState({
            inputMode: false
        })
    }

}

export default ChecklistItem
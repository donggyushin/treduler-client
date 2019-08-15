import React from 'react';
import styled from 'styled-components';
import InputComponent from './Input';
import ButtonComponent from './Button';

const Container = styled.div``

class AddAnItem extends React.Component {
    state = {
        inputMode: false
    }
    render() {
        const { inputMode } = this.state;
        const { inputModeDown, inputModeOn } = this;
        return <Container>
            {inputMode ? <InputComponent inputModeDown={inputModeDown} /> : <ButtonComponent inputModeOn={inputModeOn} />}
        </Container>
    }

    inputModeDown = () => {
        if (this.state.inputMode === true) {
            this.setState({
                inputMode: false
            })
        }
    }

    inputModeOn = () => {
        if (this.state.inputMode === false) {
            this.setState({
                inputMode: true
            })
        }
    }
}

export default AddAnItem
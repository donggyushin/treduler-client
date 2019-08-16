import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './Button';
import InputComponent from './Input';

const Container = styled.div``

class AddNewItem extends React.Component {
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

export default AddNewItem
import React from 'react';
import styled from 'styled-components'
import InputComponent from './Input';
import Text from './Text';

const Container = styled.div``

class Description extends React.Component {
    state = {
        inputMode: false
    }
    render() {
        const { desc } = this.props;
        const { inputMode } = this.state;
        const { inputModeDown, inputModeOn } = this;
        return <Container>
            {inputMode ? <InputComponent desc={desc} inputModeDown={inputModeDown} /> : <Text inputModeOn={inputModeOn} desc={desc} />}
        </Container>
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

export default Description
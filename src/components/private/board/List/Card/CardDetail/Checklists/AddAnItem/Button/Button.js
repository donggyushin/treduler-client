import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 131px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    background: rgba(0,0,0,0.03);
    margin-top: 17px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        background: rgba(0,0,0,0.055);
    }
`

class ButtonComponent extends React.Component {
    render() {
        const { inputModeOn } = this.props;
        return <Container onClick={inputModeOn}>
            Add an item...

        </Container>
    }
}

export default ButtonComponent
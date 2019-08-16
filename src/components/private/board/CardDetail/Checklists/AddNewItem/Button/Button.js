import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
        width: 130px;
    padding: 4px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    background: rgba(0,0,0,0.04);
    margin-top: 11px;
    cursor: pointer;
    &:hover {
        background: rgba(0,0,0,0.09);
    }
`

class ButtonComponent extends React.Component {
    render() {
        const { inputModeOn } = this.props;
        return <Container onClick={inputModeOn}>
            Add new item...
        </Container>
    }
}

export default ButtonComponent;
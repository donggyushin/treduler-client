import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 532px;
    padding: 7px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.03);
    min-height: 100px;
    margin-top: 19px;
    white-space:pre-line;
    cursor: pointer;
    &:hover {
        background:rgba(0,0,0,0.08);
    }
`

class Text extends React.Component {
    render() {
        const { desc, inputModeOn } = this.props;
        return <Container onClick={inputModeOn}>
            {desc ? desc : 'Add more detailed description...'}
            {(desc === null || desc === "") ? desc : 'Add more detailed description...'}
        </Container>
    }

}

export default Text;
import React from 'react';
import styled from 'styled-components';
import BoardsContainer from './BoardsContainer';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

class Boards extends React.Component {
    render() {
        return <Container>
            <BoardsContainer />
        </Container>
    }
}

export default Boards
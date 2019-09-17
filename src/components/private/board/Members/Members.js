import React from 'react';
import styled from 'styled-components';
import Member from './Member';

const Container = styled.div`
    width:80%;
`

class MembersInBoard extends React.Component {
    render() {
        return <Container><Member /></Container>
    }
}

export default MembersInBoard
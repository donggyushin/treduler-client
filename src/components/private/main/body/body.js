import React from 'react';
import styled from 'styled-components';
import SideNav from './sideNav'
import Boards from './boards'

const Container = styled.div`
    margin-top:94px;
    display:flex;
    justify-content:center;
`

class Body extends React.Component {
    render() {
        return <Container>
            <SideNav />
            <Boards />
        </Container>
    }
}

export default Body;
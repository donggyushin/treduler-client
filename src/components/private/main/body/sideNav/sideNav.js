import React from 'react';
import styled from 'styled-components';
import Item from './Item'
import AddTeam from './addTeam';
import Teams from './Teams';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width: 200px;
    margin-right: 50px;
`


class SideNav extends React.Component {

    render() {
        return <Container>
            <Item />
            <AddTeam />
            <Teams />
        </Container>
    }
}

export default SideNav
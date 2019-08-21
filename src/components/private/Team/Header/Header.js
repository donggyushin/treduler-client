import React from 'react';
import styled from 'styled-components';
import TeamInfo from './TeamInfo/TeamInfo';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:40px;
    background-color: #f4f5f7;
    height:169px;
    width:100%;
    align-items:center;
    justify-content:center;
`

class Header extends React.Component {
    render() {
        return <Container>
            <TeamInfo />
        </Container>
    }
}

export default Header
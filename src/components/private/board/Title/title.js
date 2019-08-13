import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
        width: 100%;
    background: rgba(0,0,0,.35);
    padding-left: 34px;
    padding-right:34px;
    padding-top: 10px;
    padding-bottom: 6px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-size: 22px;
    font-weight: 800;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
`

const Menu = styled.div`
    color:rgba(255, 255, 255, 0.8);
    font-size:14px;
    cursor: pointer;
`

function Title({ text }) {
    return <Container>
        <Row>
            {text}
            <Menu>Menu</Menu>
        </Row>
    </Container>
}

export default Title
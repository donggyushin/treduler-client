import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
        width: 100%;
    background: rgba(0,0,0,.35);
    padding-left: 34px;
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

function Title({ text }) {
    return <Container>
        {text}
    </Container>
}

export default Title
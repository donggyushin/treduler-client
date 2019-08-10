import React from 'react';
import styled from 'styled-components';


const Icon = styled.i`
    color: #42526e;
    font-size: 22px;
    margin-right: 12px;
`

const Title = styled.div`
    display:flex;
    align-items:center;
`


const Text = styled.div`
    color: #42526e;
    font-size: 17px;
    font-weight: 500;
`

function TitleComponent({ icon, text }) {
    return (
        <Title>
            <Icon className={icon} />
            <Text>{text}</Text>
        </Title>
    )
}

export default TitleComponent
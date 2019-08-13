import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:center;
    padding-left: 12px;
    cursor: pointer;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 4px;
    &:hover {
        background:rgba(9,30,66,.13);
    }
`

const Icon = styled.i`
    font-size: 12px;
    margin-right: 20px;
`

const Text = styled.div`
    font-size: 15px;
    font-weight: 500;
`

class MenuItem extends React.Component {
    render() {
        const { icon, text } = this.props;
        return <Container>
            <Icon className={icon} />
            <Text>{text}</Text>
        </Container>
    }
}

export default MenuItem
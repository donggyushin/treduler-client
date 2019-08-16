import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
`

const Icon = styled.i`
    margin-right:20px;
`

const Text = styled.div`
    font-weight:800;
`



class Title extends React.Component {

    render() {
        const { icon, title } = this.props;
        return <Container>
            <Icon className={icon} />
            <Text>{title}</Text>
        </Container>
    }
}


export default (Title)
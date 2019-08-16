import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.64);
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    background:#f4f5f7;
    width:768px;
    min-height:300px;
    border-radius:4px;
    margin-top:100px;
    color:#172b4d;
`

class CardDetail extends React.Component {
    render() {
        return <Container>
            <Card>
                card detail

            </Card>
        </Container>
    }
}

export default CardDetail
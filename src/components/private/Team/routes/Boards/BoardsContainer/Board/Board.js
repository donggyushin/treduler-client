import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:265px;
    height:96px;
    border-radius:4px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position:relative;
    margin-right:16px;
    margin-bottom:8px;
`

const BackgroundImage = styled.img`
    width:100%;
    
`

const Title = styled.div`
    position: absolute;
    color: rgb(255,255,255);
    cursor: pointer;
    display: -webkit-box;
    font-size: 16px;
    font-weight: 700;
    height: 100%;
    line-height: 20px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    overflow-wrap: break-word;
    overflow-x: hidden;
    overflow-y: hidden;
    text-align: left;
    text-overflow: ellipsis;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    border-radius: 4px;
    padding: 6px;
    &:hover {
    background: rgba(0,0,0,0.3);
    }
`

const A = styled.a`
    text-decoration:none;
`


class Board extends React.Component {
    render() {
        const { board } = this.props;
        return <A href={`/board/${board.id}`}>
            <Container>
                <BackgroundImage src={require(`../../../../../../../assets/boardBackground/${board.backgroundImage}.png`)} />
                <Title>
                    {board.title}
                </Title>
            </Container>
        </A>
    }
}

export default Board
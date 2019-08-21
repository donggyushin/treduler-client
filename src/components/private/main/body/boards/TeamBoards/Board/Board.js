import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:187px;
    height:96px;
    display:flex;
    flex-direction:column;
    margin-right:15px;
    position:relative;
    margin-bottom:25px;
    cursor: pointer;
`

const BackgroundImageContainer = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4px;
    overflow:hidden;
`

const BackgroundImage = styled.img`
    width:100%;
`

const BackgroundImageCover = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:black;
    opacity:0;
    &:hover {
        opacity:0.3;
    }
`

const Title = styled.div`
    position: relative;
    color: white;
    top: 5px;
    left: 15px;
    font-size: 17px;
    width:80%;
    font-weight:700;
`

const A = styled.a`
    text-decoration:none;
`

class Board extends React.Component {
    render() {
        const { board } = this.props;
        return <Container>
            <A href={`/board/${board.id}`}>
                <BackgroundImageContainer>
                    <BackgroundImage src={require(`../../../../../../../assets/boardBackground/${board.backgroundImage}.png`)} />
                    <BackgroundImageCover />
                </BackgroundImageContainer>
                <Title>{board.title}</Title>
            </A>
        </Container>
    }
}

export default Board
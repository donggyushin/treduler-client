import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    align-items:center;
    position: relative;
    cursor: pointer;
    margin-bottom:10px;
`

const TeamPhotoContainer = styled.div`
    width:30px;
    height: 20px;
    border-radius: 2px;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:10px;
`

const TeamPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const TeamName = styled.div`
    color: #6b778c;
    font-size: 12px;
    font-weight: 500;
    -webkit-letter-spacing: .04em;
    -moz-letter-spacing: .04em;
    -ms-letter-spacing: .04em;
    letter-spacing: .04em;
    line-height: 16px;
`

const Description = styled.div`
    position: absolute;
    right: -194px;
    background: #ECF0F0;
    z-index: 1;
    width: 219px;
    border-radius: 4px;
    padding: 6px;
    word-break: break-all;
    top: 0;
    color: #6b778c;
    font-size: 12px;
    font-weight: 500;
    -webkit-letter-spacing: .04em;
    -moz-letter-spacing: .04em;
    -ms-letter-spacing: .04em;
    letter-spacing: .04em;
    line-height: 16px;
    display:none;
    ${Container}:hover & {
        display:block;
    }
`


const A = styled.a`
    text-decoration:none;
    display:flex;
    align-items:center;
`

class Team extends React.Component {
    render() {
        const { team } = this.props;
        return <Container>
            <A href={`/team/${team.id}`}>
                <TeamPhotoContainer>
                    <TeamPhoto src={team.photo ? team.photo : require(`../../../../../../../assets/boardBackground/0.png`)} />
                </TeamPhotoContainer>
                <TeamName>{team.name}</TeamName>
                <Description>{team.description ? team.description : 'No description'}</Description>
            </A>
        </Container>
    }
}

export default Team
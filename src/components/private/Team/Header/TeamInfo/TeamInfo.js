import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnOnTeamPhotoChangeForm } from '../../../../../actions/TeamPhotoChangeForm'

const Container = styled.div`
    width:650px;
    display:flex;
`

const Column = styled.div`
    display:flex;
    flex-direction:column;
    margin-right:25px;
`

const TeamPhotoContainer = styled.div`
    width:85px;
    height:85px;
    overflow:hidden;
    border-radius:7px;
`

const TeamPhoto = styled.img`
    width:100%;
    min-height:85px;
    cursor: pointer;
`

const TeamName = styled.div`
    color: rgb(23, 43, 77);
display: inline;
font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif;
font-size: 24px;
font-weight: 600;
line-height: 28px;
margin-block-end: 12px;
margin-block-start: 0px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
text-size-adjust: 100%;
`

const TeamDescription = styled.div`
    color: rgb(23, 43, 77);
display: block;
font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", sans-serif;
font-size: 14px;
font-weight: 400;
height: 20px;
line-height: 20px;
margin-block-end: 8px;
margin-block-start: 0px;
margin-bottom: 8px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
overflow-wrap: break-word;
text-size-adjust: 100%;
width: 217.656px;
word-break: break-word;
`

const EditTeamProfileButton = styled.button`
    background-color: rgba(9, 30, 66, 0.04);
border-bottom-color: rgb(23, 43, 77);
border-bottom-left-radius: 3px;
border-bottom-right-radius: 3px;
border-bottom-style: none;
border-bottom-width: 0px;
border-image-outset: 0px;
border-image-repeat: stretch;
border-image-slice: 100%;
border-image-source: none;
border-image-width: 1;
border-left-color: rgb(23, 43, 77);
border-left-style: none;
border-left-width: 0px;
border-right-color: rgb(23, 43, 77);
border-right-style: none;
border-right-width: 0px;
border-top-color: rgb(23, 43, 77);
border-top-left-radius: 3px;
border-top-right-radius: 3px;
border-top-style: none;
border-top-width: 0px;
box-shadow: none;
box-sizing: border-box;
color: rgb(23, 43, 77);
cursor: pointer;
display: block;
float: left;
font-size: 14px;
font-weight: 400;
height: 32px;
line-height: 20px;
margin-top: 8px;
max-width: 300px;
overflow-x: hidden;
overflow-y: hidden;
padding-bottom: 6px;
padding-left: 12px;
padding-right: 12px;
padding-top: 6px;
position: relative;
text-decoration-color: rgb(23, 43, 77);
text-decoration-line: none;
text-decoration-style: solid;
text-overflow: ellipsis;
text-size-adjust: 100%;
transition-duration: 0.085s;
transition-property: background-color, border-color, box-shadow;
transition-timing-function: ease;
user-select: none;
white-space: nowrap;
width: 156.359px;
outline:none;
&:hover {
    background-color: rgba(9,30,66,.08);
    box-shadow: none;
    border: none;
}
`

class TeamInfo extends React.Component {
    render() {
        const { team } = this.props;
        const { photoClicked } = this;
        return <Container>
            <Column>
                <TeamPhotoContainer>
                    <TeamPhoto onClick={photoClicked} src={team.photo ? team.photo : require('../../../../../assets/boardBackground/0.png')} />
                </TeamPhotoContainer>
            </Column>
            <Column>
                <TeamName>{team.name}</TeamName>
                <TeamDescription>{team.description ? team.description : 'No description yet'}</TeamDescription>
                <EditTeamProfileButton>Edit team profile</EditTeamProfileButton>
            </Column>
        </Container>
    }

    photoClicked = () => {
        const { turnOnTeamPhotoChangeForm } = this.props;
        turnOnTeamPhotoChangeForm()
    }
}

const mapStateToProps = state => {
    return {
        team: state.team.team
    }
}

export default connect(mapStateToProps, { turnOnTeamPhotoChangeForm })(TeamInfo)
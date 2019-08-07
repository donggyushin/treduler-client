import React, { Component } from 'react'
import styled from 'styled-components';
import Nav from './nav'
import TextCard from "./card"
import colors from '../../../constants/colors';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`

const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:60px;
    padding-bottom:60px;
    padding-left:20px;
    padding-right:20px;
`

const BigThickText = styled.div`
    color: rgb(77, 77, 77);
display: block;
font-family: jaf-facitweb, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 38px;
font-weight: 600;
height: 47px;
line-height: 47.5px;
margin-block-end: 20.8px;
margin-block-start: 20.8px;
margin-bottom: 20.8px;
margin-inline-end: 0px;
margin-inline-start: 0px;
margin-left: 0px;
margin-right: 0px;
margin-top: 20.8px;
text-align: center;
text-size-adjust: 100%;
width: 650px;
word-break: break-word;
`

const NormalText = styled.div`
color: rgb(77, 77, 77);
display: block;
font-family: jaf-facitweb, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 20px;
font-weight: 300;
height: 30px;
line-height: 30px;
margin-block-end: 20px;
margin-block-start: 20px;
margin-inline-end: 0px;
margin-inline-start: 0px;
text-align: center;
text-size-adjust: 100%;
width: 650px;
word-break: break-word;
`


class Main extends Component {
    render() {
        return (
            <Container>
                <Nav />
                <TextCard backgroundColor={'white'} title={'Thanks for using Treduler'} message1={`You're all logged out.So now what?`} />
                <TextCard backgroundColor={colors.mustardYellow} title={'Follow us'} link1={true} />
                <TextCard marginBottom={true} whiteText={true} backgroundColor={colors.trelloBlue} title={`"Thanks, Treduler, but I’m done for the day."`} message1={'Nice to meet you too! Bye Bye Bye'} />
            </Container>
        )
    }
}

export default Main;
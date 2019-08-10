import React, { Component } from 'react'
import styled from 'styled-components';
import Nav from './nav'
import TextCard from "./card"
import colors from '../../../constants/colors';
import Copyright from '../../global/copyright'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
const Margin80 = styled.div`
    height:80px;
`


class Main extends Component {
    render() {
        return (
            <Container>
                <Nav />
                <Margin80 />
                <TextCard backgroundColor={'white'} title={'Thanks for using Treduler'} message1={`You're all logged out.So now what?`} />
                <TextCard backgroundColor={colors.mustardYellow} title={'Follow us'} link1={true} />
                <TextCard marginBottom={true} whiteText={true} backgroundColor={colors.trelloBlue} title={`"Thanks, Treduler, but I’m done for the day."`} message1={'Nice to meet you too! Bye Bye Bye'} />
                <Copyright />
            </Container>
        )
    }
}

export default Main;
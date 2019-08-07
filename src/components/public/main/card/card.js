import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:60px;
    padding-bottom:60px;
    padding-left:20px;
    padding-right:20px;
    background-color: ${props => props.backgroundColor};
`

const BigThickText = styled.div`
    
color: ${props => props.whiteText ? 'white' : `rgb(77, 77, 77)`};
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
color: ${props => props.whiteText ? 'white' : `rgb(77, 77, 77)`};
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

const LinkToMySite = styled.a`
    color:#3498db;
    margin-right:7px;
`

const MarginBottom = styled.div`
    height:40px;
`

const TextCard = ({ title, message1, backgroundColor, link1, whiteText, marginBottom }) => (
    <CardContainer backgroundColor={backgroundColor}>
        <BigThickText whiteText={whiteText}>{title && title}</BigThickText>
        {marginBottom && <MarginBottom />}
        <NormalText whiteText={whiteText}>
            {message1 && message1}
            {link1 && <>
                …on the <LinkToMySite href="https://blog.naver.com/donggyu_00">Rontend Blog,</LinkToMySite>
                <LinkToMySite href="http://www.dgsh.nl/">
                    Donggyu shin site,
                    </LinkToMySite>
                and&nbsp;
                    <LinkToMySite href={'https://github.com/donggyushin'}>
                    Github.
                    </LinkToMySite>
                If you follow my accounts, I will be very happy :)

            </>}
        </NormalText>
    </CardContainer>
)

export default TextCard
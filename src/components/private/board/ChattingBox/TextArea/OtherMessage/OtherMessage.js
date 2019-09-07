import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

const Username = styled.div`
color: #172b4d;
font-weight: 700;
`

const WhiteTextContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: #172b4d;
    background: #fff;
    padding: 3px;
    border-radius: 3px;
    font-weight: 700;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    box-shadow: 2px 2px 2px #777;
    margin-bottom: 10px;

`

const TimeTextContainer = styled.div`
    font-size: 11px;
    font-weight: 100;
    margin-left: 10px;
`

class OtherMessage extends React.Component {
    render() {
        const { time, message, username } = this.props;
        return <Container>
            {username && <Username>{username}</Username>}
            <WhiteTextContainer>
                {message}
                <TimeTextContainer>{time}</TimeTextContainer>
            </WhiteTextContainer>
        </Container>
    }
}

export default OtherMessage
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`

const BlueTextContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: white;
    background: #2980b9;
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

const TimeText = styled.div`
    font-size: 11px;
    font-weight: 100;
    margin-left: 10px;
`

class MyMessage extends React.Component {
    render() {
        const { time, message } = this.props;
        return <Container>
            <BlueTextContainer>
                {message}
                <TimeText>{time}</TimeText>
            </BlueTextContainer>
        </Container>
    }
}

export default MyMessage
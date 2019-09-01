import React from 'react';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap'

const Container = styled.div`
    width:536px;
    margin-top:10px;
`

class ProgressBarComponent extends React.Component {
    render() {
        const { now } = this.props;
        return <Container>
            <ProgressBar now={now} label={`${now}%`} />
        </Container>
    }
}

export default ProgressBarComponent
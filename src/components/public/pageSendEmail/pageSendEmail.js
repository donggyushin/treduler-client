import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100vh;
    background-image: linear-gradient(0deg, rgb(82, 67, 170) 0%, rgb(0, 121, 191) 100%);
    color:white;
`

class PageSendEmail extends React.Component {
    render() {
        return <Container>
            Page Send Email
        </Container>
    }
}

export default PageSendEmail
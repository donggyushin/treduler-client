import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background:#353b48;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    padding-right:5px;
    padding-bottom:5px;
    padding-top:5px;
`
const XButton = styled.div`
    background: #c23616;
    color: #f5f6fa;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
`

class Header extends React.Component {

    render() {
        const { xButtonClicked } = this.props;
        return <Container>
            <XButton onClick={xButtonClicked}>X</XButton>
        </Container>
    }
}


export default Header;
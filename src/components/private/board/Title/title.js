import React from 'react';
import styled from 'styled-components';
import MenuComponent from './Menu'

const Container = styled.div`
        width: 100%;
    background: rgba(0,0,0,.35);
    padding-left: 34px;
    padding-right:34px;
    padding-bottom: 6px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-size: 22px;
    font-weight: 800;
`

const Row = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:100%;
`

const Menu = styled.div`
    color:rgba(255, 255, 255, 0.6);
    font-size:14px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 1px;
    padding-bottom: 1px;
    background: rgba(255,255,255,0.2);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background:rgba(255, 255, 255, 0.4);
    }
    
`

class Title extends React.Component {
    state = {
        menuVisible: false,
        action: false
    }
    render() {
        const { text } = this.props;
        const { menuVisible, action } = this.state;
        const { turnOnMenu, turnDownMenu } = this;
        return (
            <Container>
                <Row>
                    {text}
                    <Menu onClick={turnOnMenu}>Show menu</Menu>
                    {menuVisible && <MenuComponent type={action} turnDownMenu={turnDownMenu} />}
                </Row>
            </Container>
        )
    }

    turnOnMenu = () => {
        this.setState({
            action: false
        })
        this.setState({
            menuVisible: true
        })
    }

    turnDownMenu = () => {
        this.setState({
            action: true
        })
        setTimeout(() => {
            this.setState({
                menuVisible: false
            })

        }, 700);
    }
}


export default Title
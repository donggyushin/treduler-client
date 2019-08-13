import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import MenuItem from './MenuItem';


const boxFade = keyframes`
    0% {
        right:-600px;
    }
    100% {
        right:0px;
    }
`

const MoveBoxToRight = keyframes`
    0%{
        right:0px;
    }
    100% {
        right:-600px;
    }
`

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 40px;
    background-color: #f4f5f7;
    width: 322px;
    min-height: 200px;
    color: #172b4d;
    animation: ${boxFade} 0.7s;
    display:flex;
    flex-direction:column;
    border-top-left-radius:2px;
    border-bottom-left-radius:2px;
    ${props => props.action && css`
        animation: ${MoveBoxToRight} 0.7s;
    `};
    padding-right:7px;
    padding-left:7px;
    
`

const TitleContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    position: relative;
    margin-top: 14px;
`

const Title = styled.div`
    font-size: 17px;
    font-weight: 400;
`

const XButton = styled.div`
    font-size: 17px;
    font-weight: 400;
    position:absolute;
    right:10px;
    cursor: pointer;
`

const DividerContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Divider = styled.hr`
    background-color: rgba(9,30,66,.13);
    border: 0;
    height: 1px;
    margin: 16px 0;
    padding: 0;
    width: 100%;
`

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        const { turnDownMenu } = this.props;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            turnDownMenu();
        }
    }


    render() {
        const { turnDownMenu, action } = this.props;
        return <Container ref={this.setWrapperRef} action={action}>
            <TitleContainer>
                <Title>
                    Menu
                </Title>
                <XButton onClick={turnDownMenu}>X</XButton>
            </TitleContainer>
            <DividerContainer>
                <Divider />
            </DividerContainer>
            <MenuItem icon={'fas fa-trash-alt'} text={'Delete this board'} />
        </Container>
    }
}

export default Menu
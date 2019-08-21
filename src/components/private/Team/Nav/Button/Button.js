import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Container = styled.div`
background-color: ${props => props.checked ? 'white' : '#dfe1e6'} ;
    border: 1px solid #dfe1e6;
    border-bottom: 0;
    border-radius: 3px 3px 0 0;
    display: inline-block;
    font-weight: 700;
    margin: 2px 2px 0;
    padding: 8px 20px;
    text-decoration: none;
    color: #172b4d;
`



class Button extends React.Component {
    render() {
        const { button, buttonClicked } = this.props;
        return <Link onClick={() => buttonClicked(button.id)} to={button.to}>
            <Container checked={button.checked}>{button.name}</Container>
        </Link>
    }
}


export default Button;
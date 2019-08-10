import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display:flex;
    align-items:center;
    background:#e4f0f6;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
`

const Icon = styled.img`
    width:20px;
    margin-right:8px;
`

const NormalText = styled.div`
color:#0079bf;
font-weight:700;
`

class ItemComponent extends React.Component {
    render() {
        return (
            <Item>
                <Icon src={require('../../../../../../assets/images/trello.png')} />
                <NormalText>
                    Boards
                </NormalText>
            </Item>
        )
    }
}

export default ItemComponent
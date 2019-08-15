import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { deleteChecklist } from '../../../../../../../../../actions/card'
import { Checkbox } from 'antd'

const Container = styled.div`
    padding-left: 10px;
    display: flex;
    align-items:center;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 4px;
    margin-bottom:3px;
    position: relative;
    &:hover {
        background: rgba(0,0,0,0.03);
    }
`

const Content = styled.div`
    color:${props => props.checked && 'rgba(0,0,0,0.2)'};
    text-decoration-line:${props => props.checked && 'line-through'};
    cursor: pointer;
`

const XButton = styled.div`
    position:absolute;
    right:10px;
    opacity:0;
    cursor: pointer;
    ${Container}:hover & {
        opacity:0.7;
    }
`

class Item extends React.Component {
    render() {
        const { checkboxClicked, checklist, inputModeOn } = this.props;
        const { deleteButtonClicked } = this;
        return (
            <Container >
                <Checkbox onClick={() => checkboxClicked(checklist.id)} checked={checklist.checked} className={'marginRight'} />
                <Content onClick={inputModeOn} checked={checklist.checked}>{checklist.content}</Content>
                <XButton onClick={() => deleteButtonClicked(checklist.id)}>X</XButton>
            </Container>
        )
    }

    deleteButtonClicked = (id) => {
        const { deleteChecklist } = this.props;
        deleteChecklist(id)
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { deleteChecklist })(Item);
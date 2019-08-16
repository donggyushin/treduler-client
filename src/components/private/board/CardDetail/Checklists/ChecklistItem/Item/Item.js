import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import { toggleChecklist } from '../../../../../../../actions/checklist'

const Container = styled.div`
    display:flex;
    align-items:center;
    width:532px;
    padding: 4px;
    border-radius: 4px;
    position: relative;
    &:hover {
        background:rgba(0,0,0,0.03);
    }
`
const Text = styled.div`
    margin-left:10px;
    cursor: pointer;
    text-decoration:${props => props.checked ? 'line-through' : 'none'};
    color:${props => props.checked ? 'rgba(0,0,0,0.5)' : ''};
`
const XButton = styled.div`
    cursor: pointer;
    position:absolute;
    right:10px;
    opacity:0;
    ${Container}:hover & {
        opacity:1;
    }
`

class Item extends React.Component {
    render() {
        const { checklist, inputModeOn } = this.props;
        const { checkboxClicked } = this;
        return (
            <Container >
                <Checkbox onClick={() => checkboxClicked(checklist.id)} className={'checkbox'} checked={checklist.checked} />
                <Text checked={checklist.checked} onClick={inputModeOn}>{checklist.content}</Text>
                <XButton>X</XButton>
            </Container>
        )
    }

    checkboxClicked = (checklistId) => {
        const { toggleChecklist } = this.props;
        toggleChecklist(checklistId)
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { toggleChecklist })(Item);
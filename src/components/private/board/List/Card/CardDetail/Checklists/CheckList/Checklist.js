import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { toggleCheck } from '../../../../../../../../actions/card'
import './style.css'
import Input from './Input';
import Item from './Item';

const Container = styled.div``

class CheckList extends React.Component {

    state = {
        inputMode: false
    }

    render() {
        const { checklist } = this.props
        const { checkboxClicked, inputModeOn, inputModeDown } = this;
        const { inputMode } = this.state;
        return <Container>
            {inputMode ? <Input checklistId={checklist.id} inputModeDown={inputModeDown} content={checklist.content} /> : <Item inputModeOn={inputModeOn} checkboxClicked={checkboxClicked} checklist={checklist} />}

        </Container>

    }

    inputModeDown = () => {
        if (this.state.inputMode === true) {
            this.setState({
                inputMode: false
            })
        }
    }

    inputModeOn = () => {
        if (this.state.inputMode === false) {
            this.setState({
                inputMode: true
            })
        }

    }

    checkboxClicked = (checklistId) => {
        const { toggleCheck } = this.props;

        toggleCheck(checklistId)
    }

}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { toggleCheck })(CheckList)
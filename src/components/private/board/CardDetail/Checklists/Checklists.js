import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import ChecklistItem from './ChecklistItem';
import AddNewItem from './AddNewItem';

const Container = styled.div`
    padding-top:10px;
`

class Checklists extends React.Component {

    render() {
        const { checklists } = this.props;
        return <Container>
            {checklists && checklists.map(checklist => <ChecklistItem key={checklist.id} checklist={checklist} />)}
            <AddNewItem />
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        checklists: state.checklist.checklists
    }
}

export default connect(mapStateToProps, {})(Checklists) 
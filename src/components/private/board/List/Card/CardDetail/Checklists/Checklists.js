import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CheckListItem from './CheckList'
import AddAnItem from './AddAnItem';

const Container = styled.div`
    margin-left: 34px;
    width: 519px;
`

class CheckList extends React.Component {
    render() {
        const { checklists } = this.props;
        return <Container>
            {checklists && checklists.map(checklist => <CheckListItem key={checklist.id} checklist={checklist} />)}
            <AddAnItem />
        </Container>
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {})(CheckList)
import React from 'react';
import styled from 'styled-components';
import Navigation from './nav'
import { connect } from 'react-redux'
import { getUserInfo } from '../../../actions/user'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`



class Main extends React.Component {

    componentDidMount() {
        const { getUserInfo } = this.props;
        getUserInfo()
    }

    render() {
        return (
            <Container>
                <Navigation />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { getUserInfo })(Main) 
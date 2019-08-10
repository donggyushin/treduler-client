import React from 'react';
import styled from 'styled-components';
import Navigation from './nav'
import { connect } from 'react-redux'
import { getUserInfo } from '../../../actions/user'
import Body from './body';
import { Helmet } from 'react-helmet'

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
                <Helmet>
                    <title>
                        Boards | Treduler
                    </title>
                </Helmet>
                <Navigation />
                <Body />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { getUserInfo })(Main) 
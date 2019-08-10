import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import FirstContainer from './FirstContainer';
import SecondContainerComponent from './SecondContainer';


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`




class Main extends React.Component {

    state = {
        navigationHasBackgroundColor: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    render() {
        const { navigationHasBackgroundColor } = this.state;
        return <Container>
            <Nav navigationHasBackgroundColor={navigationHasBackgroundColor} />
            <FirstContainer />
            <SecondContainerComponent />
        </Container>
    }

    listenToScroll = () => {
        if (document.documentElement.scrollTop > 80) {
            this.setState({
                navigationHasBackgroundColor: true
            })
        } else {
            this.setState({
                navigationHasBackgroundColor: false
            })
        }
    }
}

export default Main
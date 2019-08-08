import React from 'react';
import styled from 'styled-components';
import CheckedComponent from './checkedComponent';
import UncheckComponent from './uncheckedComponent';
import queryString from 'query-string'
import axios from 'axios'

const Container = styled.div``

class CheckEmailPage extends React.Component {
    state = {
        checked: false,
        loading: true
    }

    componentDidMount() {
        const parsed = queryString.parse(window.location.search)
        const token = parsed.t
        this.requestVerifyUser(token)
    }


    render() {
        const { checked, loading } = this.state;
        return <Container>
            {loading && 'loading...'}
            {!loading && <Container>

                {checked ? <CheckedComponent /> : <UncheckComponent />}
            </Container>}

        </Container>
    }

    requestVerifyUser = (token) => {
        axios.put('/api/verification/', {
            token
        })
            .then(res => res.data)
            .then(data => {
                if (data.ok) {
                    this.setState({
                        loading: false,
                        checked: true
                    })
                } else {
                    this.setState({
                        load: false,
                        checked: false
                    })
                }
            })
            .catch(err => console.error(err))
    }
}

export default CheckEmailPage
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux'

const Container = styled.div`
    height:39px;
    width:100%;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    background:#f4f5f7;
    
`

class NavigationBar extends React.Component {
    state = {
        loading: true,
        buttons: []
    }

    componentDidMount() {
        const { team } = this.props;
        if (team.id) {
            this.setState({
                buttons: [
                    {
                        id: 0,
                        name: "Boards",
                        checked: true,
                        to: `/team/${team.id}`
                    },
                    {
                        id: 1,
                        name: "Members",
                        checked: false,
                        to: `/team/${team.id}/members`
                    }
                ],
                loading: false
            })
        }

    }

    componentWillReceiveProps(nextProps) {
        const { team } = nextProps
        console.log(team)
        if (team.id) {
            this.setState({
                buttons: [
                    {
                        id: 0,
                        name: "Boards",
                        checked: true,
                        to: `/team/${team.id}`
                    },
                    {
                        id: 1,
                        name: "Members",
                        checked: false,
                        to: `/team/${team.id}/members`
                    }
                ],
                loading: false
            })
        }
    }



    render() {
        const { buttons, loading } = this.state;
        const { buttonClicked } = this;
        return <Container>
            {buttons.map(button => <Button buttonClicked={buttonClicked} key={button.id} button={button} />)}
        </Container>
    }

    buttonClicked = (id) => {
        const { buttons } = this.state;
        const updatedButtons = buttons.map(button => {
            if (button.id === id) {
                const updatedButton = {
                    ...button,
                    checked: true
                }
                return updatedButton
            } else {
                const updatedButton = {
                    ...button,
                    checked: false
                }
                return updatedButton
            }
        })
        this.setState({
            buttons: updatedButtons
        })
    }

}

const mapStateToProps = state => {
    return { team: state.team.team }
}

export default connect(mapStateToProps, {})(NavigationBar)
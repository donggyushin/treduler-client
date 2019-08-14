import React from 'react';
import styled from 'styled-components';
import DeleteAlertModal from './DeleteAlertModal';

const Container = styled.div`
    display:flex;
    align-items:center;
    padding-left: 12px;
    cursor: pointer;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 4px;
    &:hover {
        background:rgba(9,30,66,.13);
    }
`

const Icon = styled.i`
    font-size: 12px;
    margin-right: 20px;
`

const Text = styled.div`
    font-size: 15px;
    font-weight: 500;
`

class MenuItem extends React.Component {

    state = {
        alert: false
    }

    render() {
        const { icon, text, type } = this.props;
        const { alert } = this.state;
        const { turnOn, turnDown } = this;
        return <Container onClick={turnOn} >
            <Icon className={icon} />
            <Text >{text}</Text>
            {(alert === true && type === 'delete') && <DeleteAlertModal turnDown={turnDown} />}
        </Container>
    }

    turnDown = () => {
        this.setState({
            alert: false
        })
    }

    turnOn = () => {
        if (this.state.alert === false) {
            this.setState({
                alert: true
            })
        }

    }

}

export default MenuItem
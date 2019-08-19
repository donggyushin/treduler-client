import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { turnAddNewTeamDown } from '../../../../actions/addNewTeamForm'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
    
`

const Card = styled.div`
    width:304px;
    height:429px;
    background:#fff;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    margin-top: 69px;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
`



class AddNewTeamForm extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            console.log('clicked outside')
            const { turnAddNewTeamDown } = this.props;
            turnAddNewTeamDown()
        }
    }
    render() {
        return <Container>
            <Card ref={this.setWrapperRef}>
                card
            </Card>
        </Container>
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnAddNewTeamDown })(AddNewTeamForm)
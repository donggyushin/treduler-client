import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { turnAddNewTeamDown } from '../../../../actions/addNewTeamForm'
import Textarea from 'react-autosize-textarea'
import './styles.css'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
    align-items:flex-start;
`

const Card = styled.div`
    width:304px;
    /* height:429px; */
    background:#fff;
    box-shadow: 0 8px 16px -4px rgba(9,30,66,.25), 0 0 0 1px rgba(9,30,66,.08);
    margin-top: 69px;
    border-radius: 4px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 4px;
    padding-bottom: 14px;
`

const Title = styled.div`
    color: #6b778c;
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin-top:10px;
    border-bottom: 1px solid rgba(9,30,66,.13);
    padding-bottom: 10px;
    margin-bottom: 18px;
`

const XButton = styled.div`
    position:absolute;
    right:0px;
    cursor: pointer;
`

const Label = styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 7px;
    color: #6b778c;
`

const Input = styled.input`
    border: none;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    color: #172b4d;
    box-sizing: border-box;
    -webkit-appearance: none;
    border-radius: 3px;
    display: block;
    line-height: 20px;
    margin-bottom: 12px;
    padding: 8px 12px;
    transition-property: background-color,border-color,box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    width: 100%;
    outline: none;
    background: ${props => props.buttonDisable ? '#fafbfc' : '#fff'};
    box-shadow:${props => props.buttonDisable ? 'inset 0 0 0 2px #dfe1e6;' : 'inset 0 0 0 2px #0079bf;'};
    
    &:focus {
        background: #fff;
        border: none;
        box-shadow: inset 0 0 0 2px #0079bf;
    }

`

const SaveButton = styled.button`
    background: ${props => props.disabled ? '#95a5a6' : '#27ae60'}; 
    border: 0;
    border-radius: 4px;
    color: white;
    font-weight: 900;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    &:hover {
        background:${props => props.disabled ? '#95a5a6' : '#2ecc71'} ;
    }
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

    state = {
        name: '',
        description: '',
        nameAble: false,
        descriptionAble: false,
        buttonDisable: true
    }

    render() {
        const { name, description, nameAble, descriptionAble, buttonDisable } = this.state;
        const { handleInput } = this;
        const { turnAddNewTeamDown } = this.props;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <TitleContainer>
                    <Title>Create team</Title>
                    <XButton onClick={turnAddNewTeamDown}>X</XButton>
                </TitleContainer>
                <Label >
                    Name
                </Label>
                <Input buttonDisable={buttonDisable} autoFocus={true} name={'name'} value={name} onChange={handleInput} />
                <Label>
                    Description
                </Label>
                <Textarea name={'description'} value={description} onChange={handleInput} className={'addnewteamform-textarea'} />
                <SaveButton disabled={buttonDisable}>Create</SaveButton>
            </Card>
        </Container>
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'name') {
            if (e.target.value.length === 0) {
                this.setState({
                    buttonDisable: true
                })
            } else {
                this.setState({
                    buttonDisable: false
                })
            }
        }
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { turnAddNewTeamDown })(AddNewTeamForm)
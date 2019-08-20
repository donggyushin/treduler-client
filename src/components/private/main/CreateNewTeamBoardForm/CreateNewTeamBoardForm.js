import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnDownCreateNewBoard } from '../../../../actions/CreateNewTeamBoard'

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:1;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 60px;
`

const Card = styled.div``

const BackgroundImageContainer = styled.div`
    width: 344px;
    height: 130px;
    overflow:hidden;
    border-radius:4px;
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
`

const BackgroundImage = styled.img`
    width:100%;
`

const TitleInput = styled.input`
    position: absolute;
    background: transparent;
    border: 0;
    font-size: 17px;
    font-weight: 900;
    top: 10px;
    left: 10px;
    color: white;
    padding-left: 10px;
    border-radius: 4px;
    outline:none;
    &:hover {
        background: hsla(0,0%,100%,.15);
    }
`

const CreateButton = styled.button`
    width: 120px;
    height: 32px;
    margin-top: 15px;
    border-radius: 7px;
    background: ${props => props.disabled ? '#ecf0f1' : '#2980b9'} ;
    color: ${props => props.disabled ? '#bdc3c7' : 'white'} ;
    border: 0;
    font-weight: 800;
    cursor: auto;
`

class CreateNewTeamBoardForm extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const randomNumberBetween0to6 = String(Math.floor(Math.random() * 7))
        this.setState({
            bacgkroundImageNumber: randomNumberBetween0to6,
            loading: false
        })
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
            const { turnDownCreateNewBoard } = this.props;
            turnDownCreateNewBoard()
        }
    }


    state = {
        bacgkroundImageNumber: "",
        loading: true,
        buttonDisabled: true,
        title: ""
    }
    render() {
        const { loading, bacgkroundImageNumber, buttonDisabled, title } = this.state;
        const { handleInput } = this;
        return <Container>
            {loading === false &&
                <Card ref={this.setWrapperRef}>
                    <BackgroundImageContainer>
                        <BackgroundImage src={require(`../../../../assets/boardBackground/${bacgkroundImageNumber}.png`)} />
                        <TitleInput onChange={handleInput} name={'title'} value={title} placeholder={'Add board title'} />
                    </BackgroundImageContainer>
                    <CreateButton disabled={buttonDisabled}>Create</CreateButton>
                </Card>
            }
        </Container>
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.value.length === 0) {
            this.setState({
                buttonDisabled: true
            })
        } else {
            this.setState({
                buttonDisabled: false
            })
        }
    }


}
const mapStateToProps = state => {
    return {}
}
export default connect(mapStateToProps, { turnDownCreateNewBoard })(CreateNewTeamBoardForm)
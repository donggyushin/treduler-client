import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { postNewBoard } from '../../../../../../actions/board'

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.75);
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Form = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 59px;
`

const Card = styled.div`
    width: 344px;
    height: 130px;
    position:relative;
    background:transparent;
`

const BackgroundImageContainer = styled.div`
    width:100%;
    height:100%;
    position: absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4px;
    overflow:hidden;
`

const BackgroundImage = styled.img`
    width:100%;
`

const TitleInput = styled.input`
    position:absolute;
    background: transparent;
    border: 0;
    font-size: 17px;
    font-weight: 900;
    top: 10px;
    left: 10px;
    color: white;
    padding-left: 10px;
    border-radius: 4px;
    &:focus, &:hover {
        background:hsla(0,0%,100%,.15);
        outline:none;
    }
    ::placeholder {
    }
`

const Button = styled.button`
width: 120px;
    height: 32px;
    margin-top: 15px;
    border-radius: 7px;
    background:${props => props.disabled ? '#ecf0f1' : '#2ecc71'};
    color:${props => props.disabled ? '#bdc3c7' : 'white'};
    border: 0;
    font-weight: 800;
    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    
    
`


class CreateNewBoardUI extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    state = {
        title: "",
        buttonDisabled: true,
        backgroundImage: "",
        loading: true
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const a = String(Math.floor(Math.random() * 7))
        this.setState({
            backgroundImage: a
        })
        this.setState({
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
        const { makeCreateNewBoardUIInvisible } = this.props;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            makeCreateNewBoardUIInvisible()
        }
    }
    render() {
        const { handleInput, CreateButtonClicked, enterKeyPressed } = this;
        const { title, buttonDisabled, backgroundImage, loading } = this.state;
        return <Container>
            <Form ref={this.setWrapperRef}>
                <Card >
                    <BackgroundImageContainer >
                        {loading === false && <BackgroundImage src={require(`../../../../../../assets/boardBackground/${backgroundImage}.png`)} />}

                    </BackgroundImageContainer>
                    <TitleInput onKeyPress={enterKeyPressed} value={title} onChange={handleInput} name={'title'} placeholder={'Add board title'} />
                </Card>
                <Button disabled={buttonDisabled} onClick={CreateButtonClicked} >Create</Button>
            </Form>
        </Container>
    }

    enterKeyPressed = e => {
        const { key } = e;
        if (key === 'Enter') {
            this.CreateButtonClicked()
        }
    }

    CreateButtonClicked = () => {
        const { title, backgroundImage } = this.state;
        const { postNewBoard, makeCreateNewBoardUIInvisible } = this.props;

        postNewBoard(title, backgroundImage)
        makeCreateNewBoardUIInvisible()
    }


    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.value.length >= 1 && e.target.value.length < 50) {

            this.setState({
                buttonDisabled: false
            })
        } else {

            this.setState({
                buttonDisabled: true
            })
        }
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { postNewBoard })(CreateNewBoardUI) 
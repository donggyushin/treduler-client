import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { deleteBoard } from '../../../../../../../actions/board'

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.75);
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor:default;
    
`

const Card = styled.div`
    width:500px;
    background:#f4f5f7;
    border-radius:2px;
    margin-top: 85px;
    padding: 27px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position: relative;
    width:100%;
`

const Title = styled.div`
    margin-bottom:40px;
`

const XButton = styled.div`
    position: absolute;
    right: 0;
    font-weight: 300;
    bottom: 38px;
    cursor: pointer;
`

const NormalText = styled.div`
    font-size: 18px;
    font-weight: 200;
    text-align: center;
    line-height: 1.8;
    margin-bottom: 20px;
`

const RedText = styled.span``

const Input = styled.input`
box-shadow: inset 0 0 0 2px #0079bf;
    border: 0;
    margin-bottom: 10px;
    width:100%;
    padding-left:15px;
    &:focus {
        outline:none;
    }
`

const Button = styled.button`

    border: 0;
background: ${props => props.disabled ? '#95a5a6' : '#e74c3c'};
    color: white;
    width: 100px;
    border-radius: 4px;
    cursor:${props => props.disabled ? 'default' : 'pointer'};
    
`

class AlertModal extends React.Component {

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
            const { turnDown } = this.props;
            turnDown();
        }
    }


    state = {
        title: "",
        buttonDisabled: true
    }
    render() {
        const { title, buttonDisabled } = this.state
        const { handleInput, deleteButtonClicked } = this;
        const { turnDown } = this.props;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <TitleContainer>
                    <Title>
                        Delete board
                </Title>
                    <XButton onClick={turnDown}
                    >X</XButton>
                </TitleContainer>
                <NormalText>
                    Are you sure to delete this board?
                    You can't resotre any sort of data of this board after delete it.
                    Do you want to proceed?
                </NormalText>
                <NormalText>
                    Please input your <RedText>board name</RedText> to delete this board.
                </NormalText>
                <Input onChange={handleInput} name={'title'} value={title} />
                <Button onClick={deleteButtonClicked} disabled={buttonDisabled}>DELETE</Button>
            </Card>
        </Container>
    }

    deleteButtonClicked = () => {
        const { deleteBoard, boardId } = this.props;
        deleteBoard(boardId)
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.value === this.props.boardTitle) {
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
    return {
        boardTitle: state.board.board.title,
        boardId: state.board.board.id
    }
}

export default connect(mapStateToProps, { deleteBoard })(AlertModal)
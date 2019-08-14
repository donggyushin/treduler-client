import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6);
    display:flex;
    flex-direction:column;
    align-items:center;
    cursor:auto;
`

const Card = styled.div`
    background:#f4f5f7;
    width:768px;
    min-height:682px;
    margin-top:52px;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    padding-top: 10px;
    padding-left: 20px;
`

const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    position: relative;
`
const TitleIcon = styled.i`
    margin-right:30px;
`
const Title = styled.div`
    font-size:26px;
`
const XButton = styled.div`
    position:absolute;
    right:21px;
    cursor: pointer;
`

class CardDetail extends React.Component {
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
            const { turnCardDetailDown } = this.props;
            turnCardDetailDown()
        }
    }
    render() {
        const { turnCardDetailDown } = this.props;
        return (
            <Container>
                <Card ref={this.setWrapperRef}>
                    <TitleContainer>
                        <TitleIcon className={'fas fa-credit-card'} />
                        <Title>title</Title>
                        <XButton onClick={turnCardDetailDown}>X</XButton>
                    </TitleContainer>
                </Card>
            </Container>
        )
    }
}

export default CardDetail
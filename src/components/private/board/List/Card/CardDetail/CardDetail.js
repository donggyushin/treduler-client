import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { fetchCard } from '../../../../../../actions/card'
import DescDetail from './DescriptionDetail';

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
    overflow-y:scroll;
`

const Card = styled.div`
    background:#f4f5f7;
    width:768px;
    min-height:300px;
    margin-top:52px;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    padding-top: 10px;
    padding-left: 20px;
    margin-bottom:100px;
`

const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    position: relative;
`
const DescContainer = styled.div`
    display:flex;
    align-items:center;
    position: relative;
    margin-top:40px;
    margin-bottom:15px;
`

const TitleIcon = styled.i`
    margin-right:22px;
`

const NameContainer = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    top: 7px;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const ListName = styled.div`
        font-size: 13px;
    color: rgba(0,0,0,0.6);
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
        const { fetchCard, cardId } = this.props;
        fetchCard(cardId)
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
        const { turnCardDetailDown, list, card } = this.props;
        return (
            <Container>
                <Card ref={this.setWrapperRef}>
                    <TitleContainer>
                        <TitleIcon className={'fas fa-credit-card'} />
                        <NameContainer>
                            <Title>{card.title}</Title>
                            <ListName>In list {list.title}</ListName>
                        </NameContainer>
                        <XButton onClick={turnCardDetailDown}>X</XButton>
                    </TitleContainer>
                    <DescContainer>
                        <TitleIcon className={'fas fa-list'} />
                        <Title>Description</Title>
                    </DescContainer>
                    <DescDetail />
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        card: state.card.card
    }
}

export default connect(mapStateToProps, { fetchCard })(CardDetail) 
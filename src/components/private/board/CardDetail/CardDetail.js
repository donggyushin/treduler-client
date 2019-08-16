import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { connect } from 'react-redux'
import { shutDownCard } from '../../../../actions/card'
import Description from './Description';

const Container = styled.div`
    position:absolute;
    top:0;
    left: 0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.64);
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Card = styled.div`
    background:#f4f5f7;
    width:768px;
    min-height:300px;
    border-radius:4px;
    margin-top:50px;
    color:#172b4d;
    position: relative;
    display:flex;
    flex-direction:column;
    padding:24px;
`

const XButton = styled.div`
    
    position: absolute;
    top: 18px;
    right: 18px;
    font-weight: 600;
    cursor: pointer;
`

const GreyThinText = styled.div`
    margin-left: 35px;
    color: rgba();
    color: rgba(0,0,0,0.5);
`
const Margin = styled.div`
    height:20px;
`

class CardDetail extends React.Component {


    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const { card } = this.props;
        if (card.id) {
            this.setState({
                loading: false
            })
        }
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
            const { XButtonClicked } = this;
            XButtonClicked()
        }
    }


    state = {
        loading: true
    }

    render() {
        const { loading } = this.state;
        const { card } = this.props;
        const { XButtonClicked } = this;
        return <Container>
            {!loading &&
                <Card ref={this.setWrapperRef}>
                    <XButton onClick={XButtonClicked}>X</XButton>
                    <Title icon={'fas fa-credit-card'} title={card.title} />
                    <GreyThinText>in list {card.list.title}</GreyThinText>
                    <Margin />
                    <Title icon={'fas fa-list'} title={'Description'} />
                    <Description desc={card.description} />
                    <Margin />
                    <Title icon={'fas fa-check-square'} title={'Checklist'} />
                </Card>
            }

        </Container>
    }

    XButtonClicked = () => {
        const { shutDownCard } = this.props;
        shutDownCard()
    }
}

const mapStateToProps = state => {
    return {
        card: state.card.card
    }
}

export default connect(mapStateToProps, { shutDownCard })(CardDetail) 
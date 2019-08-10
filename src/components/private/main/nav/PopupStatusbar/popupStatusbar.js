import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logoutUser } from '../../../../../actions/authenticationActions'



const PopupStateBar = styled.div`
    min-width:200px;
    min-height:200px;
    border-radius:4px;
    position:absolute;
    top: 52px;
    right: 10px;
    background:white;
    display:${props => props.popupStatusBar ? 'flex' : 'none'};
    flex-direction:column;
    -webkit-box-shadow: 2px 8px 15px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 8px 15px -3px rgba(0,0,0,0.75);
box-shadow: 2px 8px 15px -3px rgba(0,0,0,0.75);
`


const Name = styled.div`
color:#6b778c;
display:flex;
justify-content:center;
margin-top:10px;
`
const XIcon = styled.div`
color:#6b778c;
margin-top:10px;
position:absolute;
right:10px;
cursor: pointer;
`

const NormalText = styled.div`
    color:#172b4d;
    margin-left:12px;
    cursor: pointer;
`

const LogoutText = styled.div`
color: #172b4d;
    margin-left: 12px;
    position: absolute;
    bottom: 10px;
    cursor: pointer;
`

const DividerAboveLogout = styled.div`
background-color: rgba(9,30,66,.13);
    content: " ";
    display: block;
    height: 1px;
    margin: 8px auto;
    width: calc(100% - 20px);
    position: absolute;
    bottom: 26px;
    left: 10px;
`

const Divider = styled.div`
background-color: rgba(9,30,66,.13);
content: " ";
display: block;
height: 1px;
margin: 8px auto;
width: calc(100% - 20px);
`


class PopUpStatusBar extends React.Component {

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

            const { makePopunInvisible } = this.props;
            makePopunInvisible()
        }
    }

    render() {
        const { popupStatusBar, makePopunInvisible, logoutUser } = this.props;
        const { name } = this.props.user;
        return (
            <PopupStateBar ref={this.setWrapperRef} popupStatusBar={popupStatusBar}>

                <Name>
                    {name}
                </Name>
                <XIcon onClick={makePopunInvisible}>X</XIcon>

                <Divider />
                <NormalText>
                    Change profile
</NormalText>
                <DividerAboveLogout />
                <LogoutText onClick={logoutUser}>Logout</LogoutText>

            </PopupStateBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { logoutUser })(PopUpStatusBar) 
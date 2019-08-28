import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { changeProfileFalse } from '../../../../actions/changeProfile'
import { changeProfilePhoto, changeProfilePhotoV2 } from '../../../../actions/user'

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6);
    display:flex;
    justify-content:center;
`

const Card = styled.div`
    position: relative;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ProfileImageContainer = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
`

const ProfileImage = styled.img`
    width:100%;
`

const Input = styled.input`
        width: 150px;
    height: 150px;
    border-radius: 50%;
    opacity: 0;
    position:absolute;
    top:0;
    cursor: pointer;
`

const Button = styled.button`
    background: ${props => props.disabled ? '#95a5a6' : '#2980b9'};
    border: 0;
    outline: none;
    color: white;
    font-weight: 900;
    border-radius: 4px;
    margin-top: 16px;
    padding-right: 16px;
    padding-left: 16px;
    font-size: 19px;
    cursor: pointer;
`

class ChangeProfile extends React.Component {


    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const { user } = this.props;
        this.setState({
            profilePhoto: user.profilePhoto
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
            const { changeProfileFalse } = this.props;
            changeProfileFalse()
        }
    }


    state = {
        profilePhoto: null,
        buttonDisable: true,
        imageFile: null
    }

    render() {
        const { profilePhoto, buttonDisable } = this.state
        const { changeInput, saveButtonClickedV2 } = this;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <ProfileImageContainer>
                    <ProfileImage src={profilePhoto ? profilePhoto : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhIRBxIOExAQEREVFxYVDRcVExIVGBIWFhUSFRUYHSggGh0lGxcVLTEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ4PEjEZFRkrKysrLTctLSsrKzctNysrLSsrNy0tKysrKy0rLSsrKysrKysrKystLSsrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADUQAQABAgMDCQcEAwEAAAAAAAABAgMEBRESITETQVFhcYGhscEUIjI0kdHwQlKS4SRy8SP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP0wBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqiiblWlETMg8vsRrOkcV2jLKqvjmmPGWjh8NTh6fcjf088mjMtZdXX8WlPbx+kJ4yr91U/xaQmqzpyqOaqf4o68rqj4KontjRqhowbuErtfHTOnTG+EDpVTE4Gm9GtO6rp6e2DUxij3dtTZr0uRv/N8PCgAAAAAAAAAAAAAAAAAA3MDh+Qsxr8U75+zHw9O3iKY6aodClABFAAAAAAQYzDxiLWnPHCWFMaTpPGHSMjNbWxfiqP1ecfkLBRAVAAAAAAAAAAAAAAAAFnL41xlPf5S3GHlvzlPf5S3EpABFAAAAAAFLNaNrC6/tmPt6rqtmM/4dWvV5wDDAaQAAAAAAAAAAAAAAABZy75ynv8pbjCwE6Yynt9JbqVQBAAAAAAAYmZVTOLmJmdI07t0Ntg46dcZV2+iwQAKgAAAAAAAAAAAAAAACfBRPtNMxE7qo5m8hwdGxhqYp6In6pkqgCAAAAAAAwMXExiatqJjWqebrb6pmdG1hJmeMaTH1WDFAVAAAAAAAAAAAAAAAAG5l9e3hKerd9Flm5Pc3VUz2+k+jSZqgAAAAAAAClm1ezhtP3THhv+y6yc2ubV6KY/THjKwUAFQAAAAAAAAAAAAAAABJh702LsVU/wDYbeFv+0WdqI047tWA08nubqqZ7fSfQo0gGVAAAAAAQYvEez2tdNd+nFh3bk3LkzVxmWhnFe+mmOufSPVmtRAAAAAAAAAAAAAAAAAABNhL3IYiJnhwnsQgOlidY3CllVya7GlX6Z0hdZUAAAABWzGuaMJOzz6R9QZWMu8tiZmOHCOyEANIAAAAAAAAAAAAAAAAAAAA2MpjTDT11T5RC6rZfTsYOnr1n6zqssqAAAAK2YxtYOru84WUeIp27FURz0zHgDngGkAAAAAAAAAAAAAAAAAAHqinbriKeMzoUUzXVpREzLVwGC5Gdq78XkC7TGzTERzQ+gyoAAAAADn8Vb5LEVR1+E8ETbx2E9op1p3VRw6+qWPctzaq0uRMS1EeAAAAAAAAAAAAAAB9iNqdKd8r2Hy2a997dHRz/wBAo007c6URMz1L+Hyyat9+dI6I4tGzZps06W4iPOe9ImmI7VmmzTpbiISAigAAAAAAADzctxcp0riJh6AZmIyznsT3T6Sz7lubdWlyJiXRvFy3F2nS5ETC6mOdGjiMs034ee6fSVCuiaKtK4mJ61HkAAAAAAH2N87gfFvC4Gq9vq92nxnshbwWA2I2r++ejmj+19NENjD02I/847+ee9MCKAAAAAAAAAAAAAAAAI71mm9TpciJ/OlIAyMVl8299r3o8Y+6i6VTxmBi/GtG6rwntXUYw9VUzRVMVRpMPKgAA0sqw2vv1933Z1MbVURHGZ0dFbo5O3EU8IjQo9AMqAAAAAAAAAAAAAAAAAAAAAAo5nh9u3t08aePXDIdLMaxvc9ft8leqp6J8OZYiMBRLhfmaP8AanzdACUgAigAAAAAAAAAAAAAAAAAAAAADEzL5yru8oBYKoCsv//Z'} />
                </ProfileImageContainer>

                <Input onChange={changeInput} type={'file'} />
                <Button onClick={saveButtonClickedV2} disabled={buttonDisable}>Save</Button>


            </Card>
        </Container>
    }

    saveButtonClickedV2 = () => {
        const { changeProfileFalse, changeProfilePhotoV2 } = this.props;
        const { imageFile } = this.state;
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/blog-naver-com-donggyu-00/upload'
        const CLOUDINARY_UPLOAD_PRESET = 'ndp6lsvf';
        var formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('api_key', '549695488835179');
        formData.append('api_secret', 'daxgUAkjrrLmxbfLCMJzgm8Xqbc')

        const xhr = new XMLHttpRequest();
        xhr.open('POST', CLOUDINARY_UPLOAD_URL, false);
        xhr.send(formData);
        const imageResponse = JSON.parse(xhr.responseText);
        const imagePath = imageResponse.secure_url;
        console.log('image path: ', imagePath)
        changeProfilePhotoV2(imagePath)
        changeProfileFalse()
    }

    saveButtonClicked = () => {
        const { changeProfilePhoto, changeProfileFalse } = this.props;
        const { imageFile } = this.state;
        const fd = new FormData()
        fd.append('imageData', imageFile)
        changeProfilePhoto(fd)
        changeProfileFalse()
    }

    changeInput = e => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        let file = e.target.files[0]
        reader.onload = function () {
            this.setState({
                profilePhoto: reader.result,
                buttonDisable: false,
                imageFile: file
            })
        }.bind(this)
    }

}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { changeProfilePhotoV2, changeProfileFalse, changeProfilePhoto })(ChangeProfile)
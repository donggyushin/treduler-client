import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { turnDownTeamPhotoChangeForm } from '../../../../actions/TeamPhotoChangeForm'
import { changeTeamPhoto } from '../../../../actions/team'
import axios from 'axios'

const Container = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6);
    z-index:1;
    display:flex;
    flex-direction:column;
    align-items:center;

`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    margin-top:58px;
`

const TeamPhoto = styled.img`
    width:300px;
    height:200px;
    object-fit:cover;
    border-radius: 5px;
`

const FileInput = styled.input`
    width:300px;
    height:200px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
`

const Button = styled.button`
    margin-top: 38px;
    border: 0;
    border-radius: 4px;
    height: 32px;
    outline: none;
    background: #2980b9;
    color: white;
    cursor: pointer;
    &:hover {
        background:#3498db;
    }
`

class TeamPhotoChangeForm extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        const { team } = this.props;
        if (team.photo) {
            this.setState({
                filePreview: team.photo
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        const { team } = nextProps
        if (team.photo) {
            this.setState({
                filePreview: team.photo
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
            const { turnDownTeamPhotoChangeForm } = this.props;
            turnDownTeamPhotoChangeForm()
        }
    }

    state = {
        file: null,
        filePreview: null
    }

    render() {
        const { filePreview, file } = this.state;
        const { handleChange, submitButtonClicked } = this;
        return <Container>
            <Card ref={this.setWrapperRef}>
                <TeamPhoto src={filePreview ? filePreview : require('../../../../assets/boardBackground/0.png')} />
                <FileInput onChange={handleChange} type={'file'} accept={"image/*"} />
                {file && <Button onClick={submitButtonClicked}>Submit</Button>}

            </Card>
        </Container>
    }

    submitButtonClicked = () => {
        const { changeTeamPhoto, team, turnDownTeamPhotoChangeForm } = this.props;
        const { file } = this.state;
        const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/blog-naver-com-donggyu-00/upload'
        const CLOUDINARY_UPLOAD_PRESET = 'ndp6lsvf';
        var formData = new FormData();
        formData.append('file', file)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        axios({
            url: CLOUDINARY_UPLOAD_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                formData
            }
        }).then(res => res.data)
            .then(data => {
                const imageFilePath = data.secure_url
                console.log('image file path: ', imageFilePath)
                changeTeamPhoto(imageFilePath, team.id)
            })
            .catch(err => console.error(err))
        turnDownTeamPhotoChangeForm()
    }


    handleChange = event => {
        this.setState({
            filePreview: URL.createObjectURL(event.target.files[0]),
            file: event.target.files[0]
        })
    }

}

const mapStateToProps = state => {
    return {
        team: state.team.team
    }
}

export default connect(mapStateToProps, { turnDownTeamPhotoChangeForm, changeTeamPhoto })(TeamPhotoChangeForm)
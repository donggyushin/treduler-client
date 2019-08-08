import React from 'react';
import styled from 'styled-components'

const CopyrightContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding-top:60px;
    padding-bottom:60px;
`

const BigText = styled.div`
    font-size:22px;
    font-weight:600;
    margin-bottom:20px;
`;

const NormalText = styled.div`
    font-weight:400;
`;

class Copyright extends React.Component {
    render() {
        return (
            <CopyrightContainer>
                <BigText>
                    Rontend
                        </BigText>
                <NormalText>
                    © Copyright 2019. All rights reserved.
                        </NormalText>
            </CopyrightContainer>
        )
    }
}

export default Copyright
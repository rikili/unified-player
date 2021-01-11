import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const CenteredDiv = styled.div`
    margin: auto;
    width: 90%;
    background-color: rgb(230, 230, 230);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
`;

const Space = styled.div`
    height: 10vh;
`;

const StyledInput = styled(Input)`
    width: 60%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    font-size: 34px;
    font-family: Helvetica
`;

const SearchPage = () => {
    return (
        <CenteredDiv>
            <Space />
            <StyledInput placeholder="Enter Title to Search" />
        </CenteredDiv>
    );
};

export default SearchPage;

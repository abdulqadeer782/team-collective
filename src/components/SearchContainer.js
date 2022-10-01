import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    width : 80%;
    margin : 0 auto;
    
    @media (max-width:867px){
        width:100%;
    }
`;

const SearchComponent = ({handleSearch,result}) => {

    return (
        <Container>
            <Input 
                size='large'
                placeholder='Please enter username.'
                onChange={(e)=>handleSearch(e.target.value)}
                style={{borderRadius:'10px',height:'50px'}}
            />
        </Container>
    );
};

export default SearchComponent;
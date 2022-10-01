import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { apiConfig } from '../shared/apiConfig';
const { Option } = AutoComplete;

const Container = styled.div`
    width : 50%;
    margin : 0 auto;
`;

const SearchComponent = () => {
    const [result, setResult] = useState([]);

    const handleSearch = (value) => {
        apiConfig.get(`/gists?${value}`).then((res)=>{
            setResult(res.data)
        })
    };

    return (
        <Container>
            <AutoComplete
                size='large'
                allowClear
                style={{
                    borderRadius:'140px',
                    width:'100%'
                }}
                onSearch={handleSearch}
                placeholder="Input User Name"
            >
                {result.map((email) => (
                    <Option key={email} value={email}>
                        {email}
                    </Option>
                ))}
            </AutoComplete>
        </Container>
    );
};

export default SearchComponent;
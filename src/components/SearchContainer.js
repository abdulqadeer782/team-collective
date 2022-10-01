import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
const { Option } = AutoComplete;

const Container = styled.div`
    width : 50%;
    margin : 0 auto;
`;

const SearchComponent = () => {
    const [result, setResult] = useState([]);

    const handleSearch = (value) => {
        let res = [];

        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
        }

        setResult(res);
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
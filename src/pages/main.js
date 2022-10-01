import React, { useState } from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'
import SearchComponent from '../components/SearchContainer';
import TableComponent from '../components/TableComponent';
import { apiConfig } from '../shared/apiConfig';

const { Content } = Layout;

const HeaderContainer = styled.div`
    height : 70px;
    width : 100%;
    background : #fff;
    padding : 0 24px;
    display : flex;
    justify-content : center;
    align-items : center;
`;

function Main() {
    const [data,setData] = useState([])

    const handleSearch = (value) => {
        if(value){
            apiConfig.get(`/users/${value}/gists`).then((res)=>{
                setData(res.data)
            })
        }
    };

    return (
        <Layout
            style={{ minHeight: '100vh' }}
        >
            <HeaderContainer>
                <SearchComponent handleSearch={handleSearch} result={data}/>
            </HeaderContainer>
            <Content style={{ padding: '24px' }}>
                <TableComponent data={data}/>
            </Content>
        </Layout>
    )
}

export default Main

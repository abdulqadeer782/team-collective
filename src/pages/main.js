import React, { useState } from 'react'
import { Layout } from 'antd'
import SearchComponent from '../components/SearchContainer';
import TableComponent from '../components/TableComponent';
import { apiConfig } from '../shared/apiConfig';

const { Content,Header } = Layout;


function Main() {
    const [data,setData] = useState([])

    const handleSearch = (value) => {
        if(value){
            apiConfig.get(`/users/${value}/gists`).then((res)=>{
                if(res.data){
                    console.log(res.data)
                    setData(res.data)
                }
            })
        }
        setData([])
    };

    return (
        <Layout
            style={{ minHeight: '100vh' }}
        >
            <Header style={{background:'#fff'}}>
                <SearchComponent handleSearch={handleSearch}/>
            </Header>
            {data.length > 0 && <Content style={{ padding: '24px' }}>
                <TableComponent data={data}/>
            </Content>}
        </Layout>
    )
}

export default Main

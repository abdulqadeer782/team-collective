import React from 'react'
import {Layout} from 'antd'
import styled from 'styled-components'
import SearchComponent from '../components/SearchContainer';
import TableComponent from '../components/TableComponent';

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

function Main(props) {
  return (
    <Layout 
        style={{minHeight:'100vh'}}
    >
        <HeaderContainer>
            <SearchComponent/>
        </HeaderContainer>
        <Content style={{padding:'24px'}}>
            <TableComponent/>
        </Content>
    </Layout>
  )
}

export default Main

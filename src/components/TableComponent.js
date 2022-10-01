import React, { useEffect, useState } from 'react';
import { Table, Tag,Avatar } from 'antd';
import { apiConfig } from '../shared/apiConfig';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Files',
        dataIndex: 'files',
        key: 'files',
        render:(_,record) =>{
            const fileName = Object.keys(record.files)[0]
            const fileType = fileName.split('.')[1] 
            if(fileType === 'js' || fileType === 'py'){
                return(
                    <Tag color={fileType === 'js' ? 'orange' :'geekblue'}>{fileName}</Tag>
                )
            }

            return fileName
        }
    },
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render : (_,record)=>
        <a href={record.owner.avatar_url}>
            <Avatar
                src={record.owner.avatar_url && record.owner.avatar_url}
            />
        </a>
        
    },
];  

function TableComponent() {
    const [data,setData] = useState([])

    useEffect(() => {
        apiConfig.get('/gists').then((res) => {
            if(res.data){
                setData(res.data)
            }
        })
    }, [])


    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{x:1100}}
            />
        </>
    )
}
export default TableComponent

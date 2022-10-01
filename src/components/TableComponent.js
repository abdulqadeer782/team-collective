import React from 'react';
import { Table, Tag,Avatar } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'owner',
        key: 'name',
        render:(_,record)=> record.owner.login
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
                size={'large'}
                src={record.owner.avatar_url && record.owner.avatar_url}
            />
        </a>
        
    },
];  

function TableComponent({data}) {
    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{x:1100}}
                rowKey="f"
            />
        </>
    )
}
export default TableComponent

import React from 'react';
import { Input } from 'antd';

const SearchComponent = ({handleSearch}) => {

    return (
        <>
            <Input 
                size='large'
                placeholder='Please enter username.'
                onChange={(e)=>handleSearch(e.target.value)}
                style={{borderRadius:'10px',height:'50px'}}
            />
        </>
    );
};

export default SearchComponent;
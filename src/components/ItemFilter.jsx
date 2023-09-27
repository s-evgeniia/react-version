import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const ItemFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput type="text"
                     value={filter.query}
                     onChange={e => setFilter({...filter, query: e.target.value})}
                     placeholder="Search..."
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorted by"
                option={[
                    {value: 'title', name: 'Title'},
                    {value: 'price', name: 'Price'},
                    {value: 'size', name: 'Size'},
                ]}
            />
        </div>
    );
};

export default ItemFilter;
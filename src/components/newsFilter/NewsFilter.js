import React from "react";
import { Select } from "antd";

const { Option } = Select;

function NewsFilter({ categories, onFilter }) {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        onFilter(value);
    };
    return (
        <Select
            onChange={handleChange}
            style={{
                width: 120,
            }}
        >
            <Option value=""></Option>
            {categories.map((element, index) => (
                <Option key={index} value={element}>
                    {element}
                </Option>
            ))}
        </Select>
    );
}

export default NewsFilter;

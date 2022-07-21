import React from "react";
import { Input } from "antd";
import "./NewsForm.css";

function NewsForm({ add }) {
    return (
        <>
            <Input
                type="text"
                name=""
                id=""
                placeholder="Title"
                className="inputForm"
            />
            <Input
                type="text"
                name=""
                id=""
                placeholder="Category"
                className="inputForm"
            />
        </>
    );
}

export default NewsForm;

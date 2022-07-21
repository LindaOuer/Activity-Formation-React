import React from "react";
import "./News.css";
import { useState } from "react";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Collapse, Modal, Button, Comment, List } from "antd";
import NewsForm from "./../newsForm/NewsForm";
const { Meta } = Card;
const { Panel } = Collapse;

function News({ id, title, category, comments, deleteNews }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isUpdateVisible, setIsUpdateVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const toggleUpdate = () => setIsUpdateVisible(!isUpdateVisible);

    return (
        <>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" onClick={showModal} />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={title}
                    description={category}
                />
            </Card>
            <Modal
                title={`${title} details`}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <h2>{title}</h2>
                <Button
                    type="primary"
                    ghost
                    icon={<EditOutlined />}
                    onClick={toggleUpdate}
                >
                    Update me!
                </Button>
                <Button
                    type="primary"
                    danger
                    ghost
                    icon={<DeleteOutlined />}
                    onClick={() => {
                        deleteNews(id);
                        handleCancel();
                    }}
                >
                    Delete
                </Button>
                <br />
                {isUpdateVisible && <NewsForm />}
                <br />
                <List
                    className="comment-list"
                    header={`${comments.length} replies`}
                    itemLayout="horizontal"
                    dataSource={comments}
                    renderItem={(item) => (
                        <li>
                            <Comment key={item.id} content={item.text} />
                        </li>
                    )}
                />
            </Modal>
        </>
    );
}

export default News;

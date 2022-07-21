import React from "react";
import "./NewsList.css";
import News from "./../news/News";
import { Col, Row } from "antd";

function NewsList({ news, deleteNews }) {
    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={10}>
                    {news.map((element) => (
                        <Col span={8}>
                            <News
                                id={element.id}
                                title={element.title}
                                category={element.category}
                                comments={element.comments}
                                deleteNews={(id) => deleteNews(id)}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}

export default NewsList;

import React, { useEffect, useState, useCallback } from "react";
import * as api from "../../services/news.service";
import NewsList from "./../newsList/NewsList";
import { Input, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import NewsFilter from "./../newsFilter/NewsFilter";
import NewsForm from "./../newsForm/NewsForm";

const { Search } = Input;

function NewsPage() {
    const [news, setNews] = useState([]);
    const [newsCopy, setNewsCopy] = useState([]);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isVisibleForm, setIsVisibleForm] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setError(false);
                const result = await api.fetchNews();
                setNews(result);
                setNewsCopy(await api.fetchNews());
            } catch (e) {
                setError(true);
                console.log("error on fetch Data: ", e);
            }
        }
        fetchData();
        async function fetchCategories() {
            try {
                setError(false);
                const result = await api.fetchCategories();
                setCategories(result);
            } catch (e) {
                setError(true);
                console.log("error on fetch categories: ", e);
            }
        }
        fetchCategories();
    }, []);

    const deleteNews = useCallback(
        async (id) => {
            // await api.deleteNews(id);
            setNews(news.filter((element) => element.id != id));
        },
        [news]
    );

    const addNews = useCallback(
        async (news) => {
            const newObj = await api.addNews({
                news,
            });
            setNews([...news, newObj]);
        },
        [news]
    );

    const onSearch = async (value) => {
        if (value.length !== 0) {
            const result = news.filter(
                (element) =>
                    element.title.includes(value) ||
                    element.category.includes(value)
            );
            setNews(result);
        } else setNews(await api.fetchNews());
    };

    const onFilter = async (value) => {
        if (value.length !== 0) {
            const result = newsCopy.filter((element) =>
                element.category.includes(value)
            );
            setNews(result);
            setNewsCopy(await api.fetchNews());
        } else setNews(await api.fetchNews());
    };

    const handleAdd = () => {
        setIsVisibleForm(!isVisibleForm);
    };

    return (
        <>
            <Search
                placeholder="input search text"
                onSearch={onSearch}
                style={{
                    width: 200,
                }}
            />
            <NewsFilter categories={categories} onFilter={onFilter} />
            <Button
                type="primary"
                danger
                ghost
                icon={<PlusCircleOutlined />}
                onClick={handleAdd}
            >
                Add
            </Button>
            <br />
            <br />
            {isVisibleForm && <NewsForm add="true" />}
            <br />
            {error && (
                <p style={{ color: "red" }}>
                    There are some errors loading data{" "}
                </p>
            )}
            {!error && <NewsList news={news} deleteNews={deleteNews} />}
        </>
    );
}

export default NewsPage;

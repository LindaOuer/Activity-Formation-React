import "./App.css";
import NewsPage from "./components/pages/NewsPage";
import { Route, Router, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>News Page</h1>
            <NewsPage />
        </div>
    );
}

export default App;

import React from "react";
import axios from "axios";


const useNews = () => {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get("/api/news").then(({data: { newsList }}) => {
            setNewsList(newsList);
        });
    }, [setNewsList]);

    return { newsList };
}

export default useNews;

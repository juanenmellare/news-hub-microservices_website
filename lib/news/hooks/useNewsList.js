import React from "react";
import axios from "axios";
import {useRouter} from "next/router";

const NEWS_LIST_LIMIT = 20;
const PAGES_OFFSET = 1;

const useNewsList = () => {
    const router = useRouter();
    const { page } = router.query;

    const [isLoading, setIsLoading] = React.useState(true);
    const [newsList, setNewsList] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(0);
    const [fromToPages, setFromToPages] = React.useState([]);

    React.useEffect(() => {
        setPage(page ? Number(page) : 1);
    }, [page]);


    React.useEffect(() => {
        if (!currentPage) return;
        setIsLoading(true);
        const offset = NEWS_LIST_LIMIT * currentPage;
        const path = `/api/news?offset=${offset}`;

        axios.get(path).then(({ data: { pages, newsList } }) => {
            setTotalPages(pages - 1);
            setNewsList(newsList);

            const fromPage = currentPage > PAGES_OFFSET ? currentPage - PAGES_OFFSET : 1;
            const toPage = currentPage + PAGES_OFFSET > pages - 1 ? pages - 1 : currentPage + PAGES_OFFSET;
            const fromToPagesAux = [];
            for(let index = fromPage; index <= toPage; index++) {
                fromToPagesAux.push(index);
            }
            setFromToPages(fromToPagesAux);
        }).finally(() => {
            setIsLoading(false);
        });

    }, [currentPage, setTotalPages, setNewsList, setFromToPages, setIsLoading]);

    const setPage = (candidatePage) => {
        if ((!totalPages || candidatePage <= totalPages) && candidatePage >= 1) {
            setCurrentPage(candidatePage);
        }
    }

    return {
        isLoading,
        newsList,
        currentPage,
        fromToPages,
        totalPages,
        setPage,
        pagesOffset: PAGES_OFFSET,
    };
}

export default useNewsList;

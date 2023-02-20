import React from "react";

import PageHead from "../src/components/PageHead";
import NewsCard from "../src/components/NewsCard";
import PaginationDots from "../src/components/PaginationDots";
import PaginationNumber from "../src/components/PaginationsNumber";

import Masonry from "react-masonry-css";
import styles from '../styles/Home.module.scss';

import {useNewsList} from "../src/lib/news/hooks/useNewsList";
const MASONRY_BREAK_POINT_COLS = Object.freeze({default: 4, 991: 3, 575: 1});


const Home = () => {
    const { newsList, totalPages, isLoading, currentPage, fromToPages, pagesOffset, setPage } = useNewsList();

    return (
        <>
            <PageHead title={'Home'}/>
            <Masonry
                breakpointCols={MASONRY_BREAK_POINT_COLS}
                className={`row ${styles.containerCardNews}`}>
                { newsList.map(news => <NewsCard key={news.id} news={news}/>) }
            </Masonry>
            { !isLoading &&
            <nav>
                <ul className={`pagination justify-content-center ${styles.newsPagination}`}>
                    { currentPage > (pagesOffset + 1) && <PaginationNumber pageNumber={1} setPage={setPage}/> }
                    { currentPage > (pagesOffset + 2) && <PaginationDots/> }
                    { fromToPages.map(page =>
                        <PaginationNumber key={page} pageNumber={page} isActive={page === currentPage} setPage={setPage}/>)
                    }
                    { (currentPage + pagesOffset + 1) < totalPages && <PaginationDots/> }
                    { (currentPage + pagesOffset) < totalPages && <PaginationNumber pageNumber={totalPages} setPage={setPage}/> }
                </ul>
            </nav>
            }
        </>
    );
};

export default Home;

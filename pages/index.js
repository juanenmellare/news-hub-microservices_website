import NewsCard from "../components/NewsCard";

import Masonry from "react-masonry-css";
import styles from '../styles/Home.module.scss';

import useNews from "../lib/news/hooks";


const Home = () => {
    const { newsList } = useNews();

    return <>
        <Masonry
            breakpointCols={{default: 4, 991: 3, 575: 1}}
            className={`row ${styles.containerCardNews}`}>
            { newsList.map(news => <NewsCard news={news}/>) }
        </Masonry>
    </>
};

export default Home;

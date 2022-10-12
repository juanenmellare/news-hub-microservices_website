import React from "react";
import axios from "axios";
import moment from "moment";

import styles from '../styles/Home.module.scss';
import Masonry from "react-masonry-css";


const Home = () => {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get("/api/news").then(({data: {newsList}}) => {
            setNewsList(newsList);
        });
    }, [setNewsList]);

    return (
        <Masonry breakpointCols={{default: 4, 991: 3, 575: 1}} className={`row ${styles.containerCardNews}`}>
            { newsList.map(({title, imageUrl, channel, url,  publishedAt}) => {
                    const channelImageSrc = `/channels/${channel.toString().toUpperCase()}.png`;
                    const publishedAtFormatted = moment(publishedAt).format('DD/MM/YYYY HH:mm');

                    return <div className={`${styles.cardNews}`}>
                        <div className="card border-danger">
                            <a href={url} target="_blank">
                                <img className="card-img-top" src={imageUrl} alt={imageUrl}/>
                                <div className={`card-header ${styles.cardHeaderNews}`}>{title}</div>
                                <div className={`card-body ${styles.cardBodyNews}`}>
                                    <img alt={channel} src={channelImageSrc} height="12"/>
                                    <p className={styles.cardNewsDatetime}>{publishedAtFormatted}</p>
                                </div>
                            </a>
                        </div>
                    </div>;
                }
            )}
        </Masonry>
    );
};

export default Home;

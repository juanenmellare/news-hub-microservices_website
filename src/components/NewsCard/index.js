import React from 'react';
import moment from "moment";

import styles from './NewsCard.module.scss';
import useRead from "../../lib/news/hooks/useRead";


const NewsCard = ({ news }) => {
    const { read, hasBeenReadValue } = useRead(news);

    const { title, imageUrl, channel, publishedAt, hasBeenRead } = news;
    const channelImageSrc = `/channels/${channel.toString().toUpperCase()}.png`;
    const publishedAtFormatted = moment(publishedAt).format('DD/MM/YYYY HH:mm');

    return (
        <div className={`${styles.cardNews}`}>
            <div className="card border-danger">
                <a onClick={read}>
                    { !!hasBeenRead && hasBeenReadValue &&
                    <i className={`bi bi-eyeglasses ${styles.cardNewsIconRead}`}/> }
                    <img className="card-img-top" src={imageUrl} alt={imageUrl}/>
                    <div className={`card-header ${styles.cardHeaderNews}`}>{title}</div>
                    <div className={`card-body ${styles.cardBodyNews}`}>
                        <img alt={channel} src={channelImageSrc} height="12"/>
                        <p className={styles.cardNewsDatetime}>{publishedAtFormatted}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default NewsCard;

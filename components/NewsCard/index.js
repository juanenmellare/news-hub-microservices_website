import React from 'react';
import moment from "moment";

import styles from './NewsCard.module.scss';


const NewsCard = ({ news: { id, title, imageUrl, channel, url, publishedAt }}) => {
    const channelImageSrc = `/channels/${channel.toString().toUpperCase()}.png`;
    const publishedAtFormatted = moment(publishedAt).format('DD/MM/YYYY HH:mm');

    return (
        <div key={id} className={`${styles.cardNews}`}>
            <div className="card border-danger">
                <a href={url} target="_blank" rel="noreferrer">
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

import React from 'react'
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ image, title, channel, views, timestamp, channelImage, gifimage }) {
    return (
        <div className="videoCard">
            <div className="videoCard__imgsize">
                <img className="videoCard__thumbnail w-100 imgtop" src={gifimage} alt="" />
                <img className="videoCard__thumbnail w-100 imgdown" src={image} alt="" />
            </div>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard

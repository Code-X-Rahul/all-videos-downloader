import React from 'react'
import { useEffect, useState } from 'react';

const Video = ({ videoInfo }) => {
    const [videoTitle, setVideoTitle] = useState();
    const [videoThumbnail, setVideoThumbnail] = useState();
    useEffect(() => {
        if (window.location.href === "https://code-x-rahul.github.io/all-videos-downloader/instagram-downloader") {
            setVideoThumbnail(videoInfo?.thumb)
            setVideoTitle(videoInfo?.meta.title)
        } else {
            setVideoThumbnail(videoInfo?.thumbnail)
            setVideoTitle(videoInfo?.fulltitle)
        }
    }, [videoInfo])



    return (
        <div className='flex'>
            <div className="card flex">
                <div className="image--container flex">
                    {videoInfo && <img src={videoThumbnail} alt="thumbnail" />}

                </div>
                <div className="title--container">
                    <p>{videoInfo && videoTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
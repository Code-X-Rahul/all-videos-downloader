import React from 'react'

const Video = ({ videoInfo, instaVideoInfo }) => {

    return (
        <div className='flex'>
            <div className="card flex">
                <div className="image--container flex">
                    {videoInfo && <img src={videoInfo?.thumb} alt="thumbnail" />}
                    {instaVideoInfo && <img src={instaVideoInfo?.thumb} alt="thumbnail" />}
                </div>
                <div className="title--container">
                    <p>{videoInfo && videoInfo?.title}</p>
                    <p>{instaVideoInfo && instaVideoInfo.meta.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Video
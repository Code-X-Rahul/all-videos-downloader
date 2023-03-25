import React from 'react'
import Options from './options'
import { useEffect, useState } from 'react';

const Form = ({ getVideo, videoLink, setVideoLink, videoInfo, setDownloadLinkNo, downloadLinkNo }) => {
    const [downloadLink, setDownloadLink] = useState();

    useEffect(() => {
        if (window.location.href === "https://code-x-rahul.github.io/all-videos-downloader/instagram-downloader") {
            setDownloadLink(videoInfo?.url[0].url)
        } else {
           setDownloadLink(videoInfo?.formats[downloadLinkNo].url)
        }
    }, [videoInfo])
    const videoLinkHandler = (e) => {
        setVideoLink(e.target.value)
    }
    return (
        <form onSubmit={getVideo} className="flex">
            {!videoInfo && <input
                placeholder='Paste Video link here'
                type="text"
                value={videoLink}
                onChange={videoLinkHandler}
            />}
            {!videoInfo && <button type='submit'>Get Video</button>}

            {videoInfo && window.location.href === "https://code-x-rahul.github.io/all-videos-downloader/" && <Options videoInfo={videoInfo} setDownloadLinkNo={setDownloadLinkNo} />}

            {videoInfo && <button>
                <a href={downloadLink} target="_blank">Download Video</a>
            </button>}
        </form>
    )
}

export default Form
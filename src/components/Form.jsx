import React, { useRef } from 'react'
import Options from './options'

const Form = ({ videoInfoMp3, videoInfo, getYouTubeVideoId , setinstaVideoLink , instaVideoInfo}) => {
    let searchRef = useRef()

    const videoLinkHandler = (e) => {
        e.preventDefault()
        let videoUrl = searchRef.current.value
        if(getYouTubeVideoId){
            getYouTubeVideoId(videoUrl)
        } else{
            setinstaVideoLink(videoUrl)
        }
        
    }
    return (
        <form onSubmit={videoLinkHandler} className="flex">
            {!videoInfo && !instaVideoInfo && <input
                placeholder='Paste Video link here'
                type="text"
                ref={searchRef}
            />}
            {!videoInfo && !instaVideoInfo && <button type='submit'>Get Video</button>}

            {videoInfo && !instaVideoInfo && <Options videoInfoMp3={videoInfoMp3} videoInfo={videoInfo} />}

            {instaVideoInfo && <a className='insta-Download' href={instaVideoInfo.url[0].url} target = "_blank" rel='noreferrer'>Download Now</a>}
        </form>
    )
}

export default Form
import React, { useState , useEffect} from 'react'
import Form from './Form'
import Video from './Video'

const Instagram = ({ setVideoLink, setSpinner, videoLink }) => {
    const [instaVideoInfo, setinstaVideoInfo] = useState()
    const [instaVideoLink, setinstaVideoLink] = useState()

    // api function
    useEffect(() => {
        if (instaVideoLink) {
            setSpinner(true);
            const options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                    "X-RapidAPI-Host": "aiov-download-youtube-videos.p.rapidapi.com",
                },
            };

            fetch(
                `https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails?URL=${instaVideoLink}`,
                options
            )
                .then((response) => response.json())
                .then((response) => setinstaVideoInfo(response))
                .then(() => setSpinner(false))
                .catch((err) => console.log(err));
        } else {
            return;
        }
    }, [instaVideoLink])

    return (
        <section>
            <header className='flex'>
                <h1 className='insta-h1'>Instagram Reels Downloader</h1>
            </header>
            <Video instaVideoInfo={instaVideoInfo} />
            <Form instaVideoInfo={instaVideoInfo} setinstaVideoLink={setinstaVideoLink} />
        </section>
    )
}

export default Instagram


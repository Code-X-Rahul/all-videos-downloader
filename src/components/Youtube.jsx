import React, { useEffect, useState } from "react";
import Form from './Form'
import Video from './Video'



const Youtube = ({ setVideoLink, setSpinner, videoLink }) => {
  const [videoInfo, setVideoInfo] = useState();
  const [videoInfoMp3, setVideoInfoMp3] = useState();

  useEffect(() => {
    if (videoLink) {
      setSpinner(true);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            process.env.REACT_APP_YTAPI_KEY,
          "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
        },
      };

      fetch(
        `https://youtube-mp3-download1.p.rapidapi.com/dl?id=${videoLink}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setVideoInfoMp3(response))
        .then(() => setSpinner(false))
        .catch((err) => console.error(err));
    } else {
      return;
    }
  }, [videoLink]);


  useEffect(() => {
    if (videoLink) {
      setSpinner(true);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            process.env.REACT_APP_MP3API_KEY,
          "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
        },
      };

      fetch(
        `https://youtube-video-download-info.p.rapidapi.com/dl?id=${videoLink}`,
        options
      )
        .then((response) => response.json())
        .then((response) => setVideoInfo(response))
        .then(() => setSpinner(false))
        .catch((err) => console.error(err));
    } else {
      return;
    }
  }, [videoLink]);

  function getYouTubeVideoId(url) {
    var videoId;
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    videoId = (match && match[7].length == 11) ? match[7] : false;
    setVideoLink(videoId)
  }

  return (
    <>
      <header className='flex'>
        <h1>Youtube Videos Downloader</h1>
      </header>
      <Video videoInfo={videoInfo}/>
      <Form videoInfo={videoInfo} videoInfoMp3 = {videoInfoMp3} getYouTubeVideoId  = {getYouTubeVideoId}/>
    </>
  )
}

export default Youtube
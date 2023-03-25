import "./App.css";
import Youtube from "./components/Youtube";
import Form from "./components/Form";
import Video from "./components/Video";
import Instagram from "./components/Instagram";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const [videoLink, setVideoLink] = useState("");
  const [downloadLinkNo, setDownloadLinkNo] = useState(0);
  const [videoInfo, setVideoInfo] = useState();

  const getVideo = (e) => {
    e.preventDefault();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e2d5258e3fmshc8dcafb3bbf094cp1649a3jsne5b09457ce1f",
        "X-RapidAPI-Host": "aiov-download-youtube-videos.p.rapidapi.com",
      },
    };

    fetch(
      `https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails?URL=${videoLink}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideoInfo(response))
      .catch((err) => console.error(err));
  };
  return (
    <>
      <Routes>
        <Route path="https://code-x-rahul.github.io/all-videos-downloader/" element={<Youtube />} />
        <Route path="https://code-x-rahul.github.io/all-videos-downloader/instagram-downloader" element={<Instagram />} />
      </Routes>
      <div class="links">
        <button className="pages-links">
          <Link to="https://code-x-rahul.github.io/all-videos-downloader/">Videos Downloader</Link>
        </button>
        <button className="pages-links">
          <Link to="https://code-x-rahul.github.io/all-videos-downloader/instagram-downloader">Reels Downloader</Link>
        </button>
      </div>
      <Video videoInfo={videoInfo} />
      <Form
        getVideo={getVideo}
        videoLink={videoLink}
        downloadLinkNo={downloadLinkNo}
        setVideoLink={setVideoLink}
        setDownloadLinkNo={setDownloadLinkNo}
        videoInfo={videoInfo}
      />
    </>
  );
}

export default App;

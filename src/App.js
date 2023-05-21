import "./App.css";
import Youtube from "./components/Youtube";
import Instagram from "./components/Instagram";
import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import loading from "./assets/loading.webp";

function App() {
  const [videoLink, setVideoLink] = useState();
  const [spinner, setSpinner] = useState(false);

  return (
    <main>
      {spinner && (
        <div className="loading flex">
          <img src={loading} alt="loading..." />
        </div>
      )}
      <div className="links">
        <button className="pages-links">
          <Link to="/">Videos Downloader</Link>
        </button>
        <button className="pages-links">
          <Link to="/instagram-downloader">Reels Downloader</Link>
        </button>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Youtube
              setSpinner={setSpinner}
              setVideoLink={setVideoLink}
              videoLink={videoLink}
            />
          }
        />
        <Route
          path="/instagram-downloader"
          element={
            <Instagram
              setSpinner={setSpinner}
              setVideoLink={setVideoLink}
              videoLink={videoLink}
            />
          }
        />
      </Routes>
      <div className="social--links">
        <button className="pages-links">
          <a
            href="https://instagram.com/r_.a._h_.u._l?igshid=ZDdkNTZiNTM="
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </button>
        <button className="pages-links">
          <a
            href="https://www.linkedin.com/in/rahul-rajput-655705202"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </button>
        <button className="pages-links">
          <a
            href="https://youtube.com/@CODE-X-RAHUL"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </button>
      </div>
    </main>
  );
}

export default App;

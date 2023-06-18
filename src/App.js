import "./App.css";
import Youtube from "./components/Youtube";
import Instagram from "./components/Instagram";
import { Route, Routes, Link } from "react-router-dom";
// import loading from "./assets/loading.webp";
import Footer from "./components/Footer";
import YoutubePage from "./pages/YoutubePage";
import InstagramPage from "./pages/InstagramPage";
import { useState } from "react";

function App() {
  const [instaUrl, setInstaUrl] = useState('')
  return (
    <main className="max relative">
      <div className="links max">
        <button className="pages-links">
          <Link to="/">Videos Downloader</Link>
        </button>
        <button className="pages-links">
          <Link to="/instagram-downloader">Reels Downloader</Link>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Youtube />} />
        <Route path="/instagram-downloader" element={<Instagram setInstaUrl={setInstaUrl}/>} />
        <Route path="/youtube/:videoId" element={<YoutubePage />} />
        <Route path="/instagram/:url" element={<InstagramPage instaUrl={instaUrl} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

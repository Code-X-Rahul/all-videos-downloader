import { useNavigate } from 'react-router-dom';
import Form from './Form'

const Youtube = () => {
  const navigate = useNavigate()
  function getYouTubeVideoId(url) {
    var videoId;
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    videoId = (match && match[7].length == 11) ? match[7] : false;
    navigate(`/youtube/${videoId}`)
  }

  const pushUrl = (url) => {
    getYouTubeVideoId(url)
  }
  
  return (
    <>
      <header className='flex items-center justify-center'>
        <h1>Youtube Videos Downloader</h1>
      </header>
      <Form pushUrl={pushUrl} />
    </>
  )
}

export default Youtube

const Options = ({ videoInfo, videoInfoMp3 }) => {

  let quality;
  let qualities = Object.values(videoInfo?.link);
  console.log(qualities)
  quality = qualities?.map(format => {
    if (format[2] !== "adaptive") {
      return <p key={Math.random() * 1000}> {format[3]}<span><a href={format[0]} target="_blank" rel="noreferrer">Download Now</a></span></p>
    } else {
      return ""
    }
  })


  return (
    <div className='all-links'>
      {videoInfoMp3 && videoInfoMp3.status === "ok" && <p>Mp3<span><a href={videoInfoMp3.link} target="_blank" rel="noreferrer">Download Now</a></span></p>}
      {quality}
    </div>
  )
}

export default Options


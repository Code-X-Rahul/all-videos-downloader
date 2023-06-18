
const Video = ({ videoInfo, instaVideoInfo }) => {

    return (
        <div className='flex_flex'>
            <div className="card flex_flex">
                <div className="image--container flex_flex">
                    {videoInfo && <img src={videoInfo?.thumb} alt="thumbnail" />}
                    {instaVideoInfo && <img src={instaVideoInfo?.thumb} alt="thumbnail" />}
                </div>
                <div className="title--container">
                    <p>{videoInfo && videoInfo?.title}</p>
                    {/* <p>{instaVideoInfo && instaVideoInfo.meta.title}</p> */}
                </div>
                {instaVideoInfo && <a className='insta-Download' href={instaVideoInfo?.url} target="_blank" rel='noreferrer'>Download Now</a>}

            </div>
        </div>
    )
}

export default Video
import { useQuery } from 'react-query'
import { fetchMp3, fetchMp4 } from "../utils";
import Video from '../components/Video'
import { useParams } from 'react-router-dom';
import Options from '../components/options';
import Loading from '../components/Loading';

const YoutubePage = () => {
    const { videoId } = useParams()
    console.log(videoId);

    const mp3Query = useQuery(
        ["videoInfoMp3", videoId],
        () => fetchMp3(videoId),
    )
    const videoQuery = useQuery(
        ["videoInfo", videoId],
        () => fetchMp4(videoId),
    )


    if (videoQuery.isLoading || mp3Query.isLoading) return <Loading />
    if (videoQuery.isError || mp3Query.isError) return <h1>Something went wrong</h1>
    if (videoQuery.data?.error) return <h1>Invalid URL</h1>
    if (!videoQuery.data) return <h1>yoyoyoyoy</h1>
    return (
        <div className='flex justify-center items-center outer-div'>
            <Video videoInfo={videoQuery?.data} />
            <Options videoInfoMp3={mp3Query?.data} videoInfo={videoQuery.data} />
        </div>
    )
}

export default YoutubePage
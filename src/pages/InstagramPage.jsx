import { useQuery } from 'react-query'
import { fetchInsta } from "../utils";
import Video from '../components/Video'
import Loading from '../components/Loading';

const InstagramPage = ({ instaUrl }) => {

    const { data, isError, isLoading, isSuccess, error } = useQuery(
        ["instaVideoInfo", instaUrl],
        () => fetchInsta(instaUrl),
    )
    if (isLoading) return <Loading />
    if (isError) return <h1>Something went wrong</h1>
    if (error) return <h1>Invalid URL</h1>

    return (
        <>
            <Video instaVideoInfo={data} />
        </>
    )
}

export default InstagramPage
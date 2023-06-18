import Form from './Form'
import { useNavigate } from 'react-router-dom'

const Instagram = ({setInstaUrl}) => {
    const navigate = useNavigate()
    const pushUrl = (url) => {
        setInstaUrl(url)
        navigate(`/instagram/reel-download`)
    }

    return (
        <section>
            <header className='flex'>
                <h1 className='insta-h1'>Instagram Reels Downloader</h1>
            </header>
            <Form pushUrl={pushUrl} />
        </section>
    )
}

export default Instagram


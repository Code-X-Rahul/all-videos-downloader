import React, { useRef } from 'react'
import Options from './options'

const Form = ({ pushUrl }) => {
    let searchRef = useRef()

    const videoLinkHandler = (e) => {
        e.preventDefault()
        let videoUrl = searchRef.current.value
        pushUrl(videoUrl)
    }

    return (
        <form onSubmit={videoLinkHandler} className="flex_flex">
            <input
                placeholder='Paste Video link here'
                type="text"
                ref={searchRef}
            />
            <button type='submit'>Get Video</button>
        </form>
    )
}

export default Form
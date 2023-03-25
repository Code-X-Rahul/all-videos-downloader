import React from 'react'

const Options = ({ videoInfo, setDownloadLinkNo }) => {
    const setLink = (e) => {
        setDownloadLinkNo(e.target.value)
    }

    const qualities = videoInfo?.formats;
    const quality = qualities?.map(format => {
        if (window.location.href === "http://localhost:3000/") {
            return <option
                key={Math.random() * 1000}
                value={qualities.indexOf(format)}
            >
                {format?.resolution} ({format?.format_note}) ({format?.filesize && Math.ceil(format.filesize / 1048576) + " Mb"})
            </option>
        }else{
            return
        }
    }
    )
    return (
        <div className="select">
            <select name="todos" onChange={setLink} >
                {quality}
            </select>
        </div>
    )
}

export default Options
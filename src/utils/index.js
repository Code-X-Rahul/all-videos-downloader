export async function fetchMp3(link) {
  const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${link}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(url, options);
    const results = await res.json();
    return results;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchMp4(link) {
  const url = `https://youtube-video-download-info.p.rapidapi.com/dl?id=${link}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
    }
  };

  try {
    const res = await fetch(url, options);
    const results = await res.json();
    return results;
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchInsta(link) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "aiov-download-youtube-videos.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(
      `https://aiov-download-youtube-videos.p.rapidapi.com/GetVideoDetails?URL=${link}`,
      options
    );
    const results = await res.json();
    return results;
  } catch (error) {
    throw new Error(error);
  }
}

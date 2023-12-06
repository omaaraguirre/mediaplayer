export const fetchTracks = async (playlistId = '500661123') => {
  try {
    const res = await fetch(`https://api.jamendo.com/v3.0/playlists/tracks/?client_id=${import.meta.env.VITE_API_CLIENT_ID}&format=jsonpretty&id=${playlistId}`)
    const { results } = await res.json()
    const mapped = mapTracks(results[0].tracks)
    return mapped
  } catch (error) {
    console.log(error)
    return []
  }
}

const mapTracks = tracks =>
  tracks.map(track => ({
    id: track.id,
    title: track.name,
    artist: track.artist_name,
    image: track.album_image,
    link: track.audio,
    duration: track.duration
  }))

// API RESPONSE
// {
//   "headers": {
//     "status": "success",
//     "code": 0,
//     "error_message": "",
//     "warnings": "",
//     "results_count": 1
//   },
//   "results": [
//     {
//       "id": "500640938",
//       "name": "Pop Bestie #1",
//       "creationdate": "2023-01-01",
//       "user_id": "7674650",
//       "user_name": "nickystrinity@gmail.com",
//       "zip": "https://storage.jamendo.com/download/p500640938/mp32/",
//       "tracks": [
//         {
//           "id": "1834866",
//           "name": "Golden",
//           "album_id": "269111",
//           "artist_id": "371777",
//           "duration": "207",
//           "artist_name": "Neon NiteClub",
//           "playlistadddate": "2023-01-01 20:00:20",
//           "position": "10",
//           "license_ccurl": "http://creativecommons.org/licenses/by-nc-nd/3.0/",
//           "album_image": "https://usercontent.jamendo.com?type=album&id=269111&width=300&trackid=1834866",
//           "image": "https://usercontent.jamendo.com?type=album&id=269111&width=300&trackid=1834866",
//           "audio": "https://prod-1.storage.jamendo.com/?trackid=1834866&format=mp31&from=7kwBDlKaPOZFltiiRnkC%2BQ%3D%3D%7CPA78u1g9gZArUhWd44YB2w%3D%3D",
//           "audiodownload": "https://prod-1.storage.jamendo.com/download/track/1834866/mp32/",
//           "audiodownload_allowed": true
//         },
//         ...
//       ]
//     }
//   ]
// }

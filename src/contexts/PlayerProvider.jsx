import { createContext, useState, useRef, useEffect } from 'react'
import { fetchTracks } from '../services/media.js'

export const PlayerContext = createContext()

const PlayerProvider = ({ children }) => {
  const [tracks, setTracks] = useState([])
  const [currentSong, setCurrentSong] = useState({
    id: '',
    title: '',
    artist: '',
    image: '',
    link: '',
    duration: ''
  })
  const [showed, setShowed] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [history, setHistory] = useState([])
  const howlerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('')
  const [leftTime, setLeftTime] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTracks = async () => {
      setLoading(true)
      const tracks = await fetchTracks()
      setTracks(tracks)
      setCurrentSong(tracks[0])
      setLoading(false)
    }
    getTracks()
  }, [])

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <PlayerContext.Provider value={{
      loading,
      tracks,
      currentSong,
      setCurrentSong,
      showed,
      setShowed,
      playing,
      setPlaying,
      repeat,
      setRepeat,
      shuffle,
      setShuffle,
      history,
      setHistory,
      howlerRef,
      progress,
      setProgress,
      currentTime,
      setCurrentTime,
      leftTime,
      setLeftTime,
      formatTime
    }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerProvider

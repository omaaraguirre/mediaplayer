import { useContext, useEffect } from 'react'
import { PlayerContext } from '../contexts/PlayerProvider'

const usePlayer = () => {
  const {
    loading,
    tracks,
    currentSong, setCurrentSong,
    showed, setShowed,
    playing, setPlaying,
    repeat, setRepeat,
    shuffle, setShuffle,
    history, setHistory,
    howlerRef,
    progress, setProgress,
    currentTime, setCurrentTime,
    leftTime, setLeftTime,
    formatTime
  } = useContext(PlayerContext)

  useEffect(() => {
    document.title = `MediaPlayer - ${currentSong?.title}`
  }, [currentSong])

  useEffect(() => {
    const timer = setInterval(() => {
      if (howlerRef?.current?.howler?.seek) {
        const current = howlerRef.current.howler.seek()
        setCurrentTime(formatTime(current))

        const duration = howlerRef.current.duration()
        setLeftTime(formatTime(duration - current))

        const percentagePlayed = (current / duration) * 100
        setProgress(percentagePlayed)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const seek = percentage => {
    const duration = howlerRef.current.duration()
    const newTime = duration * (percentage / 100)
    howlerRef.current.howler.seek(newTime)
    setProgress(percentage)
    setCurrentTime(formatTime(newTime))
    setLeftTime(formatTime(duration - newTime))
  }

  const showPlayer = bool => setShowed(bool)

  const play = () => setPlaying(true)

  const pause = () => setPlaying(false)

  const playSong = id => {
    const song = tracks.find(song => song.id === id)
    setCurrentSong(song)
    setPlaying(true)
  }

  const nextSong = () => {
    if (shuffle) return shuffleSong()

    const currentIndex = tracks.findIndex(song => song.id === currentSong.id)
    const newIndex = currentIndex === tracks.length - 1 ? 0 : currentIndex + 1
    setCurrentSong(tracks[newIndex])
  }

  const prevSong = () => {
    const currentIndex = tracks.findIndex(song => song.id === currentSong.id)
    const newIndex = currentIndex === 0 ? tracks.length - 1 : currentIndex - 1
    setCurrentSong(tracks[newIndex])
  }

  const shuffleSong = () => {
    let unplayedSongs = tracks.filter(song => !history.includes(song.id))
    if (unplayedSongs.length === 0) {
      unplayedSongs = tracks
      setHistory([])
    }

    const randomIndex = Math.floor(Math.random() * unplayedSongs.length)
    const randomSong = unplayedSongs[randomIndex]
    setCurrentSong(randomSong)

    setHistory(prevHistory => [...prevHistory, randomSong.id])
  }

  const toggleRepeat = () => setRepeat(!repeat)

  const toggleShuffle = () => {
    shuffle ? setHistory([]) : setHistory([currentSong.id])
    setShuffle(!shuffle)
  }

  const endOfSongEvent = () => {
    if (repeat) return
    nextSong()
  }

  return {
    loading,
    tracks,
    currentSong,
    seek,
    showed,
    showPlayer,
    playing,
    play,
    pause,
    playSong,
    nextSong,
    prevSong,
    repeat,
    toggleRepeat,
    shuffle,
    toggleShuffle,
    endOfSongEvent,
    history,
    howlerRef,
    progress,
    setProgress,
    currentTime,
    leftTime
  }
}

export default usePlayer

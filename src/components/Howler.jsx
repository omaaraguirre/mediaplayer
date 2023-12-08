import ReactHowler from 'react-howler'
import usePlayer from '../hooks/usePlayer'

const Howler = () => {
  const {
    howlerRef,
    currentSong,
    playing,
    repeat,
    muted,
    volume,
    rate,
    endOfSongEvent
  } = usePlayer()

  return (
    <ReactHowler
      ref={howlerRef}
      html5
      preload
      src={currentSong?.link}
      playing={playing}
      loop={repeat}
      mute={muted}
      volume={volume}
      rate={rate}
      onEnd={() => endOfSongEvent()}
    />
  )
}

export default Howler

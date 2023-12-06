import ReactHowler from 'react-howler'
import usePlayer from '../hooks/usePlayer'

const Howler = () => {
  const { currentSong, playing, repeat, endOfSongEvent, howlerRef } = usePlayer()

  return (
    <ReactHowler
      html5
      preload
      src={currentSong?.link}
      playing={playing}
      loop={repeat}
      onEnd={() => endOfSongEvent()}
      ref={howlerRef}
    />
  )
}

export default Howler

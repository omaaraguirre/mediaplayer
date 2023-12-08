import { FaPlay, FaPause } from 'react-icons/fa'
import { BsShuffle, BsRepeat1 } from 'react-icons/bs'
import { GiPreviousButton, GiNextButton } from 'react-icons/gi'
import usePlayer from '../hooks/usePlayer'
import VolumeControl from './VolumeControl'
import RateControl from './RateControl'

const MediaButtons = () => {
  const { showed, playing, play, pause, nextSong, prevSong, repeat, toggleRepeat, shuffle, toggleShuffle } = usePlayer()

  return (
    <div className={`flex justify-between items-center ${showed ? ' w-[min(100%,500px)] mx-auto' : 'absolute right-2 top-1/2 -translate-y-1/2'}`}>
      {
        showed && (
          <>
            <RateControl />
            <button
              className={`text-xl sm:text-2xl hover:text-primary hover:scale-110 ${shuffle && 'text-primary'} transition-all duration-300`}
              onClick={toggleShuffle}
            >
              <BsShuffle />
            </button>
            <button
              className='text-3xl sm:text-5xl hover:text-primary hover:scale-110 transition-all duration-300'
              onClick={prevSong}
            >
              <GiPreviousButton />
            </button>
          </>
        )
      }
      <button
        onClick={playing ? pause : play}
        className={`${showed ? 'text-3xl sm:text-5xl hover:text-primary hover:scale-110' : 'text-xl sm:text-2xl'} transition-all duration-300`}
      >
        {playing ? <FaPause /> : <FaPlay className='translate-x-1' />}
      </button>
      {
        showed && (
          <>
            <button
              className='text-3xl sm:text-5xl hover:text-primary hover:scale-110 transition-all duration-300'
              onClick={nextSong}
            >
              <GiNextButton />
            </button>
            <button
              className={`text-xl sm:text-2xl hover:text-primary hover:scale-110 ${repeat && 'text-primary'} transition-all duration-300`}
              onClick={toggleRepeat}
            >
              <BsRepeat1 />
            </button>
            <VolumeControl />
          </>
        )
      }
    </div>
  )
}

export default MediaButtons

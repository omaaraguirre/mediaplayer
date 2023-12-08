import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import { useState } from 'react'
import usePlayer from '../hooks/usePlayer'

const VolumeControl = () => {
  const [show, setShow] = useState(false)
  const { volume, setVolume, muted, toggleMuted } = usePlayer()

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      className='relative'
    >
      <div className={`bg-dark/70 backdrop-blur-md rounded-full absolute bottom-7 left-1/2 -translate-x-1/2 overflow-hidden transition-all duration-500 ${show ? 'p-2 h-32 opacity-100' : 'h-0 opacity-0'}`}>
        <input
          type='range'
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={e => setVolume(Number(e.target.value))}
          className='w-4 h-full accent-primary cursor-pointer [-webkit-appearance:slider-vertical]'
        />
      </div>
      <button
        className={`text-xl sm:text-2xl hover:text-primary hover:scale-110 ${muted && 'text-primary'} transition-all duration-300`}
        onClick={toggleMuted}
      >
        {muted ? <FaVolumeMute /> : volume <= 0.5 ? <FaVolumeDown /> : <FaVolumeUp />}
      </button>
    </div>
  )
}

export default VolumeControl

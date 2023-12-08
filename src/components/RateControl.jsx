import { useState } from 'react'
import usePlayer from '../hooks/usePlayer'

const VolumeControl = () => {
  const [show, setShow] = useState(false)
  const { rate, setRate } = usePlayer()
  const rates = [0.5, 1, 1.5, 2]

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      className='relative'
    >
      <div className={`bg-black/70 backdrop-blur-md rounded-md absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-500 overflow-hidden ${show ? 'p-1 h-[140px] opacity-100' : 'h-0 opacity-0'}`}>
        {
          rates.map((r, i) => (
            <button
              key={i}
              className={`border rounded-full p-1 text-[10px] w-full font-bold ${rate === r ? 'text-red-500 border-red-500 hover:text-red-500 hover:border-red-500' : 'text-gray-400 border-gray-400 hover:text-white hover:border-white'} transition-colors duration-300`}
              onClick={() => setRate(r)}
            >
              {r.toFixed(1)}
            </button>
          ))
        }
      </div>
      <button className={`text-[10px] border p-1 rounded-md w-6 h-6 hover:text-red-500 hover:border-red-500 hover:scale-110 ${rate !== 1 && 'text-red-500 border-red-500'} transition-all duration-300`}>
        {rate.toFixed(1)}
      </button>
    </div>
  )
}

export default VolumeControl

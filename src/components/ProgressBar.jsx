import usePlayer from '../hooks/usePlayer'

const ProgressBar = () => {
  const { progress, seek, currentTime, leftTime } = usePlayer()

  return (
    <div className='flex items-center gap-3 text-sm w-[min(100%,500px)] mx-auto'>
      <span className='text-gray-400'>{currentTime}</span>
      <input
        type='range'
        min='0'
        max='100'
        value={progress || 0}
        onChange={e => seek(e.target.value)}
        step='0.1'
        className='flex-1 accent-red-500 h-1 rounded-full cursor-pointer'
      />
      <span className='text-gray-400'>{leftTime}</span>
    </div>
  )
}

export default ProgressBar

import usePlayer from '../hooks/usePlayer'

const ProgressBar = () => {
  const { progress, seek, currentTime, leftTime } = usePlayer()

  return (
    <div className='flex items-center gap-3 text-sm w-[min(100%,500px)] mx-auto'>
      <span className='w-10 text-center text-medium'>{currentTime}</span>
      <input
        type='range'
        min='0'
        max='100'
        step='1'
        value={progress || 0}
        onChange={e => seek(e.target.value)}
        className='flex-1 accent-primary h-1 rounded-full cursor-pointer'
      />
      <span className='w-10 text-center text-medium'>{leftTime}</span>
    </div>
  )
}

export default ProgressBar

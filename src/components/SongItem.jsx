import usePlayer from '../hooks/usePlayer'

const SongItem = ({ song }) => {
  const { id, image, title, artist, duration } = song
  const { currentSong, playSong, formatTime } = usePlayer()
  const isPlaying = id === currentSong?.id

  return (
    <button
      key={id}
      className={`flex items-center gap-4 py-4 px-5 w-full text-left rounded-lg backdrop-blur-md hover:cursor-pointer transition-all duration-500 ${isPlaying ? 'bg-light/80 hover:bg-light/80 text-secondary' : 'bg-dark/30 hover:bg-light/20'}`}
      onClick={() => playSong(id)}
    >
      <img
        src={image}
        alt={title}
        className='max-w-[50px] md:max-w-[70px] rounded-lg'
      />
      <div className='flex-1 flex flex-col text-sm'>
        <span className='font-bold'>{title}</span>
        <span className={`${isPlaying ? 'text-dark' : 'text-medium'}`}>{artist}</span>
      </div>
      <span className={`text-xs ${isPlaying ? 'text-dark' : 'text-medium'}`}>{formatTime(duration)}</span>
    </button>
  )
}

export default SongItem

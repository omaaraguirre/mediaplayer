import usePlayer from '../hooks/usePlayer'

const SongItem = ({ song }) => {
  const { id, image, title, artist } = song
  const { currentSong, playSong } = usePlayer()

  return (
    <button
      key={id}
      className={`flex items-center gap-4 p-4 w-full text-left rounded-lg bg-black/10 hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition-all duration-500 ${id === currentSong?.id && 'bg-white/80 hover:bg-white/80 text-red-950'}`}
      onClick={() => playSong(id)}
    >
      <img
        src={image}
        alt={title}
        className='max-w-[50px] md:max-w-[70px] rounded-lg'
      />
      <div className='flex flex-col text-sm'>
        <span className='font-bold'>{title}</span>
        <span className={`${id === currentSong?.id ? 'text-black' : 'text-gray-400'}`}>{artist}</span>
      </div>
    </button>
  )
}

export default SongItem

import usePlayer from '../hooks/usePlayer'

const SongInfo = () => {
  const { showed, currentSong } = usePlayer()

  return (
    <div className={`flex flex-col items-center justify-center w-full text-center ${!showed && 'absolute -z-10'}`}>
      <p className={`${showed ? 'text-2xl sm:text-4xl font-bold' : 'text-base'}`}>{currentSong?.title}</p>
      <p className={`text-gray-400 ${showed ? 'text-lg sm:text-xl' : 'text-sm'}`}>{currentSong?.artist}</p>
    </div>
  )
}
export default SongInfo

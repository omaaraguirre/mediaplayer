import usePlayer from '../hooks/usePlayer'

const Image = () => {
  const { currentSong } = usePlayer()

  return (
    <div className='flex items-center justify-center'>
      <img
        src={currentSong?.image}
        className='w-[min(100%,300px)] aspect-square rounded-lg shadow-xl shadow-black'
        alt={`${currentSong?.title} Album`}
      />
    </div>
  )
}

export default Image

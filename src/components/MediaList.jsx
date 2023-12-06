import usePlayer from '../hooks/usePlayer'
import SongItem from './SongItem'

const MediaList = () => {
  const { showed, tracks } = usePlayer()

  return (
    <section className={`flex flex-col gap-1 ${showed ? 'h-0 -z-20' : 'flex-1 py-5'} overflow-y-scroll transition-all duration-300`}>
      {tracks?.map(song => <SongItem key={song.id} song={song} />)}
    </section>
  )
}

export default MediaList

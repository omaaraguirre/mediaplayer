import Header from '../components/Header'
import Image from '../components/Image'
import SongInfo from '../components/SongInfo'
import ProgressBar from '../components/ProgressBar'
import MediaButtons from '../components/MediaButtons'
import Howler from '../components/Howler'
import usePlayer from '../hooks/usePlayer'

const NowPlaying = () => {
  const { showed, currentSong } = usePlayer()

  return (
    <section className={`relative flex justify-between gap-4 overflow-y-scroll transition-all duration-300 ${showed ? 'flex-1 flex-col py-5' : 'h-20 border-t border-white/30 py-3'}`}>
      <Header />
      {showed && <Image />}
      <SongInfo />
      {showed && <ProgressBar />}
      <MediaButtons />
      {currentSong && <Howler />}
    </section>
  )
}

export default NowPlaying

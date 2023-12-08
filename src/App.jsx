import usePlayer from './hooks/usePlayer'
import MediaList from './components/MediaList'
import NowPlaying from './components/NowPlaying'
import Skeleton from './components/Skeleton'

const App = () => {
  const { loading } = usePlayer()

  return (
    <>
      <div className='absolute inset-0 -z-20 bg-gradient-to-t from-dark to-secondary' />
      <main className='flex flex-col absolute top-0 bottom-0 left-0 right-0 w-[min(90%,800px)] mx-auto text-light font-poppins'>
        {
          loading
            ? <Skeleton />
            : (
              <>
                <MediaList />
                <NowPlaying />
              </>
              )
        }
      </main>
    </>
  )
}

export default App

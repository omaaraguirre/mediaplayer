import { FaChevronDown } from 'react-icons/fa'
import usePlayer from '../hooks/usePlayer'

const Header = () => {
  const { showed, showPlayer } = usePlayer()

  return (
    <header className='relative grid place-items-center'>
      <button
        className='absolute left-1'
        onClick={() => showPlayer(!showed)}
      >
        <FaChevronDown className={`text-xl sm:text-2xl ${!showed && 'rotate-180'} transition-all duration-700`} />
      </button>
      {showed && <span className='text-md sm:text-xl'>Now Playing</span>}
    </header>
  )
}

export default Header

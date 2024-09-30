import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navElements = [
    { link: '/', linkName: 'Home' },
    { link: '/about', linkName: 'About' },
  ]
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-white'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link to='/' className='text-lg font-bold align-middle '>
            Github finder
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            {navElements.map((element, i) => (
              <Link
                key={i}
                to={element.link}
                className='btn btn-sm btn-ghost rounded-btn'
              >
                {element.linkName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

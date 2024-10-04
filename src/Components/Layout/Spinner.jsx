import Snoop from './assets/Snoop.gif'

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={Snoop}
        alt='Loading ...'
      />
    </div>
  )
}

export default Spinner

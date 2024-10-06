import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'
import { FaExclamationTriangle } from 'react-icons/fa'

const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className='flex items-center mb-4 space-x-2'>
        {alert.type === 'error' && (
          // error sysmobol goes here
          <FaExclamationTriangle className='text-red-300' />
        )}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  )
}

export default Alert

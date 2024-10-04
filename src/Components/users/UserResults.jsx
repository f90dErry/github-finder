import { useEffect, useState } from 'react'
import Spinner from '../Layout/Spinner'
import UserItem from './UserItem'

const UserResults = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const REACT_APP_GITHUB_URL = 'https://api.github.com'
    const response = await fetch(`${REACT_APP_GITHUB_URL}/users`)
    const data = await response.json()

    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults

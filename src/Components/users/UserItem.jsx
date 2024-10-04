const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex items-center space-x-4 card-body'></div>
    </div>
  )
}

export default UserItem

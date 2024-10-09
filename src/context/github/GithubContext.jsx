import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  //get single user
  const getUser = async (login) => {
    setLoaing()

    const response = await fetch(`${GITHUB_URL}/users/${login}`)

    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()

      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  //Get User Repos
  const getUserRepos = async (login) => {
    setLoaing()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10,
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`)

    const data = await response.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    })
  }

  // clear users from state
  const clearUsers = () =>
    dispatch({
      type: 'CLEAR_USERS',
    })

  // set loading
  const setLoaing = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext

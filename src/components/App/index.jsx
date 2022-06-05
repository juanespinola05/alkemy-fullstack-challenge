import { useContext } from 'react'
import { AppContext } from '../../Context/appContext'
import { HomePage } from '../../Pages/Home'
import { Auth } from '../../Pages/Auth'

function App () {
  const { user } = useContext(AppContext)
  return (
    <>
      {
        user
          ? <HomePage />
          : <Auth />
      }
    </>
  )
}

export { App }

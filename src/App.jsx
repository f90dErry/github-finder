import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main>content</main>

        <Footer />
      </div>
    </Router>
  )
}

export default App

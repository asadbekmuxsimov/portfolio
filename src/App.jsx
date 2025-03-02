import './App.css'
import AboutMe from './componenrs/about-me/AboutMe'
import Contact from './componenrs/contact/Contact'
import Main from './componenrs/main/main'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/AboutMe' element={<AboutMe />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
  )
}

export default App

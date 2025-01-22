import './App.css'
import AboutMe from './componenrs/about-me/AboutMe'
import Contact from './componenrs/contact/contact'
import Main from './componenrs/main/Main'
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

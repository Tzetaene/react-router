import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage/About.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { NavBar } from './components/NavBar/NavBar.jsx'

export function App() {
  return(
  
    <BrowserRouter>
      <main>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/vans' element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter> 
  ) 
}
 
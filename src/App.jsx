import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import Detail from './pages/Detail'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/content' element={<Content />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Articles from './components/Articles';
import Footer from './components/Footer';
import { Demo } from './pages/Demo';

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
        <Route path='/demo' element={<Demo />}/>
        <Route path='/' element={<>
          <HeroSection />
        <Features />
        <Articles />
        </>} />
      </Routes>
        
      </main>
      <footer>
        <Footer />

      </footer>
      </BrowserRouter>
    
    </>
  )
}

export default App

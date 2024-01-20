import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Blog } from './pages/Blog.jsx';
import { Careers } from './pages/Careers.jsx';
import { Support } from './pages/Support.jsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/support' element={<Support />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
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

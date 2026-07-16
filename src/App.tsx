import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { ScrollToTop } from './ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { WorksList } from './pages/WorksList';
import { WorkDetail } from './pages/WorkDetail';

export function App() {
  return (
    <HashRouter>
      <div style={{ 
        backgroundColor: '#FFF8E1', 
        color: '#F49961', 
        fontFamily: '"Zen Maru Gothic"', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <ScrollToTop />
        <Header />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<WorksList />} />
            <Route path="/works/:id" element={<WorkDetail />} />
            {/* 迷子防止用お守りルート */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Contact />
        
        <Footer />
      </div>
    </HashRouter>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { TravelTours } from './pages/TravelTours';
import { MedicalTourism } from './pages/MedicalTourism';
import { Corporate } from './pages/Corporate';
import { Wedding } from './pages/Wedding';
import { About } from './pages/About';
import { Login } from './pages/Login';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travel-tours" element={<TravelTours />} />
            <Route path="/medical-tourism" element={<MedicalTourism />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
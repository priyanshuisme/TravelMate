import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Plane, Building2, Stethoscope, Heart } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">TravelMate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/travel-tours" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Plane className="h-5 w-5" />
              <span>Travel & Tours</span>
            </Link>
            <Link to="/medical-tourism" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Stethoscope className="h-5 w-5" />
              <span>Medical Tourism</span>
            </Link>
            <Link to="/corporate" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Building2 className="h-5 w-5" />
              <span>Corporate</span>
            </Link>
            <Link to="/wedding" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Heart className="h-5 w-5" />
              <span>Wedding</span>
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/travel-tours" className="block py-2 text-gray-600 hover:text-blue-600">
              Travel & Tours
            </Link>
            <Link to="/medical-tourism" className="block py-2 text-gray-600 hover:text-blue-600">
              Medical Tourism
            </Link>
            <Link to="/corporate" className="block py-2 text-gray-600 hover:text-blue-600">
              Corporate
            </Link>
            <Link to="/wedding" className="block py-2 text-gray-600 hover:text-blue-600">
              Wedding
            </Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            <Link to="/login" className="block py-2 text-gray-600 hover:text-blue-600">
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
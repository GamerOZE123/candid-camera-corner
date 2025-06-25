
import { Camera, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold">LensRent</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/categories" className="hover:text-orange-500 transition-colors">
              Equipment
            </Link>
            <a href="#about" className="hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">
              Contact
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </nav>

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
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/categories" className="hover:text-orange-500 transition-colors">
                Equipment
              </Link>
              <a href="#about" className="hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors self-start">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

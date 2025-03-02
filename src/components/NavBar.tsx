
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellowkite-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Yellow<span className="text-yellowkite-primary">Kite</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-yellowkite-primary transition-colors">Home</Link>
            <Link to="/careers" className="text-yellowkite-primary font-medium">Trabalhe Conosco</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellowkite-darker/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-yellowkite-primary py-2 transition-colors">Home</Link>
              <Link to="/careers" className="text-yellowkite-primary font-medium py-2">Trabalhe Conosco</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

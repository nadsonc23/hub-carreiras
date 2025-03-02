
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-yellowkite-primary">Yellow<span className="text-yellowkite-secondary">Kite</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-yellowkite-dark hover:text-yellowkite-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                Home
              </Link>
              <Link to="/sobre" className="text-yellowkite-dark hover:text-yellowkite-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                Sobre
              </Link>
              <Link to="/servicos" className="text-yellowkite-dark hover:text-yellowkite-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                Serviços
              </Link>
              <Link to="/portfolio" className="text-yellowkite-dark hover:text-yellowkite-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                Portfólio
              </Link>
              <Link to="/blog" className="text-yellowkite-dark hover:text-yellowkite-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                Blog
              </Link>
              <Link to="/careers" className="text-yellowkite-dark hover:text-yellowkite-primary px-3 py-2 text-sm font-medium transition-colors duration-300">
                Trabalhe Conosco
              </Link>
              <Link to="/contato" className="bg-yellowkite-primary text-white hover:bg-yellowkite-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Contato
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-yellowkite-dark hover:text-yellowkite-primary focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
          <Link to="/" className="text-yellowkite-dark hover:text-yellowkite-primary block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/sobre" className="text-yellowkite-dark hover:text-yellowkite-primary block px-3 py-2 rounded-md text-base font-medium">
            Sobre
          </Link>
          <Link to="/servicos" className="text-yellowkite-dark hover:text-yellowkite-primary block px-3 py-2 rounded-md text-base font-medium">
            Serviços
          </Link>
          <Link to="/portfolio" className="text-yellowkite-dark hover:text-yellowkite-primary block px-3 py-2 rounded-md text-base font-medium">
            Portfólio
          </Link>
          <Link to="/blog" className="text-yellowkite-dark hover:text-yellowkite-primary block px-3 py-2 rounded-md text-base font-medium">
            Blog
          </Link>
          <Link to="/careers" className="text-yellowkite-dark hover:text-yellowkite-primary block px-3 py-2 rounded-md text-base font-medium">
            Trabalhe Conosco
          </Link>
          <Link to="/contato" className="bg-yellowkite-primary text-white block px-3 py-2 rounded-md text-base font-medium">
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;


import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="yk-gradient-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-yellowkite-dark animate-fade-in">
            Yellow<span className="text-yellowkite-primary">Kite</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-up">
            Transformando ideias em resultados excepcionais através de estratégias de marketing digital inovadoras.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            <Link 
              to="/contato" 
              className="yk-button-primary"
            >
              Fale Conosco
            </Link>
            <Link 
              to="/careers" 
              className="yk-button-secondary"
            >
              Trabalhe Conosco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

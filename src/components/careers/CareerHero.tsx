
import { useRef } from 'react';

const CareerHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="relative bg-black min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="public/lovable-uploads/2fa62d16-ff06-420f-a129-c43064495331.png" 
          alt="Ambiente de trabalho" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Small text above title */}
          <div className="mb-4 text-center">
            <span className="text-white uppercase tracking-wider text-sm md:text-base">VAGAS DE TRABALHO</span>
          </div>
          
          {/* Main Title - Company Name */}
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-white text-center" 
            ref={titleRef}
          >
            Yellow Kite
          </h1>
          
          {/* Logo and Tagline on right side */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-16">
            <div className="w-full md:w-1/2">
              <a 
                href="#vagas" 
                className="bg-yellowkite-primary hover:bg-yellowkite-primary/90 text-black font-medium py-3 px-8 rounded-md inline-flex items-center transition-all duration-300"
              >
                Conheça as vagas
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
              <div className="text-right flex flex-col items-end">
                <div className="mb-3">
                  <div className="bg-white text-black p-3 rounded inline-flex items-center justify-center">
                    <span className="font-bold text-xl">YK</span>
                  </div>
                </div>
                <p className="text-lg text-white">
                  Honrando e <span className="text-yellowkite-primary font-semibold">impulsionando</span>
                </p>
                <p className="text-lg text-white">
                  <span className="font-semibold">empreendedores</span> de todo o mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;

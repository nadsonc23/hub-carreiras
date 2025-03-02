
import { useRef } from 'react';

const CareerHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="relative bg-black min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="public/lovable-uploads/d4256a8e-e21b-4bdf-bbce-3f255120c3b2.png" 
          alt="Pessoas trabalhando" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-none text-white" 
              ref={titleRef}
            >
              Trabalhe<br/>Conosco
            </h1>
            
            <p 
              className="text-lg text-gray-400 mb-10 max-w-xl" 
              ref={textRef}
            >
              Na Yellow Kite, acreditamos que as melhores ideias surgem de um ambiente onde a 
              criatividade é valorizada, a colaboração é incentivada e cada pessoa pode ser autêntica. 
              Estamos sempre em busca de talentos apaixonados que queiram crescer conosco e fazer 
              a diferença no mundo digital.
            </p>
            
            <a 
              href="#vagas" 
              className="bg-yellowkite-primary hover:bg-yellowkite-primary/90 text-black font-medium py-3 px-6 rounded inline-flex items-center transition-all duration-300"
            >
              Ver vagas abertas
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative h-[550px] w-full rounded-2xl overflow-hidden">
              <img 
                src="public/lovable-uploads/3c5b6f67-b7cc-476e-b177-ae5a87223ea3.png" 
                alt="Ambiente de trabalho" 
                className="w-full h-full object-cover"
              />
              
              {/* White box with logo */}
              <div className="absolute bottom-10 right-10 bg-white p-10 rounded-lg shadow-xl">
                <div className="w-10 h-10 rounded-full bg-yellowkite-primary mb-2 flex items-center justify-center">
                  <span className="font-bold text-black">YK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;


import { useEffect, useRef } from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const CareerHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white pt-24 pb-16 md:py-32 yk-gradient-bg">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 opacity-20 blur-3xl bg-yellowkite-primary rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 opacity-20 blur-3xl bg-yellowkite-accent rounded-full transform -translate-x-1/2 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-yellowkite-primary bg-yellowkite-primary/10 rounded-full opacity-0 translate-y-8 transition-all duration-700 delay-100" ref={titleRef}>
              VENHA FAZER PARTE DO NOSSO TIME
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance opacity-0 translate-y-8 transition-all duration-700 delay-200" ref={titleRef}>
              Trabalhe Conosco
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl opacity-0 translate-y-8 transition-all duration-700 delay-300" ref={textRef}>
              Na Yellow Kite, acreditamos que as melhores ideias surgem de um ambiente onde a criatividade é valorizada, a colaboração é incentivada e cada pessoa pode ser autêntica. Estamos sempre em busca de talentos apaixonados que queiram crescer conosco e fazer a diferença no mundo digital.
            </p>
            <a 
              href="#vagas" 
              className="yk-button-primary group"
            >
              Ver vagas abertas
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 opacity-0 translate-y-8 transition-all duration-700 delay-400" ref={imageRef}>
            <div className="relative">
              <div className="absolute inset-0 bg-yellowkite-primary opacity-10 rounded-2xl transform rotate-3"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="Equipe Yellow Kite trabalhando" 
                  className="w-full h-[400px] md:h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg glassmorphism">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellowkite-accent rounded-full"></div>
                  <p className="text-sm font-medium">Ambiente colaborativo e inovador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="yk-card p-8 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-yellowkite-primary/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="h-6 w-6 text-yellowkite-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultura Inspiradora</h3>
              <p className="text-gray-600">Promovemos um ambiente onde cada pessoa é valorizada por suas ideias e contribuições únicas.</p>
            </div>
            
            <div className="yk-card p-8 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-yellowkite-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-yellowkite-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Crescimento Constante</h3>
              <p className="text-gray-600">Investimos no desenvolvimento de nossos talentos com treinamentos e oportunidades de aprendizado contínuo.</p>
            </div>
            
            <div className="yk-card p-8 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-yellowkite-accent/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-yellowkite-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Equilíbrio e Bem-estar</h3>
              <p className="text-gray-600">Acreditamos que o equilíbrio entre vida pessoal e profissional é essencial para a criatividade e produtividade.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;

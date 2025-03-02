
import { useEffect, useRef } from 'react';

const CareerHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

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

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  // Função para rolar suavemente até a seção de vagas
  const scrollToJobs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const jobsSection = document.getElementById('vagas');
    if (jobsSection) {
      jobsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay de fundo escuro */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
          alt="Equipe trabalhando" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Conteúdo centralizado */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="uppercase text-xs tracking-widest text-yellowkite-primary block mb-4">VAGAS DE TRABALHO</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white opacity-0 translate-y-8 transition-all duration-700 delay-200" ref={titleRef}>
              Yellow<span className="text-yellowkite-primary">Kite</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 opacity-0 translate-y-8 transition-all duration-700 delay-300" ref={textRef}>
              Honrando e <span className="text-yellowkite-primary font-semibold">impulsionando empreendedores</span> de todo o Brasil.
            </p>
            <a 
              href="#vagas" 
              onClick={scrollToJobs}
              className="inline-flex items-center px-8 py-4 bg-yellowkite-primary text-black font-bold rounded-full hover:bg-yellowkite-primary/90 transition-all transform hover:scale-105"
            >
              Conheça as vagas
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellowkite-dark to-transparent z-10"></div>
    </div>
  );
};

export default CareerHero;

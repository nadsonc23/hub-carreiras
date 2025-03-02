
import { useRef, useEffect } from 'react';
import { Briefcase, User, Award } from 'lucide-react';

const CompanyCulture = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="bg-yellowkite-darker py-16 md:py-24">
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        ref={sectionRef}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="yk-section-title text-center">Nossa Cultura</h2>
          <p className="yk-section-subtitle text-center">
            Valorizamos o ambiente de trabalho e o desenvolvimento profissional e pessoal de nossos colaboradores
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Cultura Inspiradora */}
            <div className="text-center bg-yellowkite-dark/50 p-8 rounded-xl border border-yellowkite-dark/80 hover:shadow-lg hover:shadow-yellowkite-primary/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-yellowkite-darker flex items-center justify-center border-2 border-yellowkite-primary/50 mb-6">
                <Briefcase className="w-10 h-10 text-yellowkite-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Cultura Inspiradora</h3>
              <p className="text-gray-400">
                Promovemos um ambiente onde cada pessoa é valorizada por suas ideias e contribuições únicas.
              </p>
            </div>

            {/* Crescimento Constante */}
            <div className="text-center bg-yellowkite-dark/50 p-8 rounded-xl border border-yellowkite-dark/80 hover:shadow-lg hover:shadow-yellowkite-primary/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-yellowkite-darker flex items-center justify-center border-2 border-yellowkite-primary/50 mb-6">
                <User className="w-10 h-10 text-yellowkite-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Crescimento Constante</h3>
              <p className="text-gray-400">
                Investimos no desenvolvimento de nossos talentos com treinamentos e oportunidades de aprendizado contínuo.
              </p>
            </div>

            {/* Equilíbrio e Bem-estar */}
            <div className="text-center bg-yellowkite-dark/50 p-8 rounded-xl border border-yellowkite-dark/80 hover:shadow-lg hover:shadow-yellowkite-primary/10 transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-yellowkite-darker flex items-center justify-center border-2 border-yellowkite-primary/50 mb-6">
                <Award className="w-10 h-10 text-yellowkite-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Equilíbrio e Bem-estar</h3>
              <p className="text-gray-400">
                Acreditamos que o equilíbrio entre vida pessoal e profissional é essencial para a criatividade e produtividade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCulture;

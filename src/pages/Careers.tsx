
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import CareerHero from '../components/careers/CareerHero';
import JobSearch from '../components/careers/JobSearch';
import TalentPool from '../components/careers/TalentPool';

const Careers = () => {
  useEffect(() => {
    // Scroll para o topo quando a página carrega
    window.scrollTo(0, 0);
    
    // Adicionar animação às seções quando elas entram no viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-yellowkite-dark text-white">
      <NavBar />
      
      <main>
        {/* Hero section (full screen) */}
        <CareerHero />
        
        {/* Nossa Cultura e Perfil Profissional */}
        <section className="fade-in-section" id="vagas">
          <div className="bg-yellowkite-dark/80 py-16 md:py-24 border-y border-yellowkite-dark/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nosso Perfil de Profissional</h2>
                <p className="text-lg text-gray-400 mb-10">
                  Na Yellow Kite, buscamos pessoas apaixonadas, criativas e com sede de conhecimento. Valorizamos a diversidade de pensamentos e experiências, pois acreditamos que as melhores soluções nascem da colaboração entre diferentes perspectivas.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-yellowkite-dark/70 p-6 rounded-xl shadow-sm border border-yellowkite-dark/50 hover:shadow-md hover:shadow-yellowkite-primary/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-yellowkite-primary">Inovadores</h3>
                    <p className="text-gray-400">
                      Procuramos pessoas que pensam fora da caixa e não têm medo de propor novas ideias e abordagens.
                    </p>
                  </div>
                  
                  <div className="bg-yellowkite-dark/70 p-6 rounded-xl shadow-sm border border-yellowkite-dark/50 hover:shadow-md hover:shadow-yellowkite-secondary/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-yellowkite-secondary">Colaborativos</h3>
                    <p className="text-gray-400">
                      Trabalhamos em equipe e valorizamos quem sabe ouvir, contribuir e crescer junto com os outros.
                    </p>
                  </div>
                  
                  <div className="bg-yellowkite-dark/70 p-6 rounded-xl shadow-sm border border-yellowkite-dark/50 hover:shadow-md hover:shadow-yellowkite-accent/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-yellowkite-accent">Apaixonados</h3>
                    <p className="text-gray-400">
                      Buscamos pessoas que amam o que fazem e se dedicam a entregar resultados excelentes em cada projeto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="fade-in-section">
          <JobSearch />
        </section>
        
        <section className="fade-in-section">
          <TalentPool />
        </section>
      </main>
      
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Yellow<span className="text-yellowkite-primary">Kite</span></h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Transformando ideias em resultados excepcionais através de estratégias de marketing digital inovadoras.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellowkite-primary transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellowkite-primary transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellowkite-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-yellowkite-primary transition-colors">Home</a></li>
                <li><a href="/sobre" className="text-gray-400 hover:text-yellowkite-primary transition-colors">Sobre</a></li>
                <li><a href="/servicos" className="text-gray-400 hover:text-yellowkite-primary transition-colors">Serviços</a></li>
                <li><a href="/portfolio" className="text-gray-400 hover:text-yellowkite-primary transition-colors">Portfólio</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-yellowkite-primary transition-colors">Blog</a></li>
                <li><a href="/contato" className="text-gray-400 hover:text-yellowkite-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
              <address className="not-italic text-gray-400 space-y-2">
                <p>Rua Exemplo, 123</p>
                <p>Maceió, AL</p>
                <p>CEP: 12345-678</p>
                <p className="mt-4">
                  <a href="mailto:contato@yellowkite.com.br" className="hover:text-yellowkite-primary transition-colors">contato@yellowkite.com.br</a>
                </p>
                <p>
                  <a href="tel:+558200000000" className="hover:text-yellowkite-primary transition-colors">(82) 0000-0000</a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Yellow Kite. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Careers;

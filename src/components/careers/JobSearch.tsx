
import { useState, useEffect, useRef } from 'react';
import { Search, Filter, MapPin, BriefcaseIcon, Briefcase } from 'lucide-react';
import JobCard from './JobCard';

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  seniority: string;
  description: string;
  activities: string[];
  requirements: string[];
  differentials: string[];
  benefits: string[];
};

const departments = [
  "Todas as áreas",
  "Performance e Dados",
  "Conteúdo",
  "Redes Sociais",
  "Tecnologia",
  "Comercial",
  "Administrativo"
];

const locations = ["Maceió"];

const seniorityLevels = [
  "Todos os níveis",
  "Estágio",
  "Júnior",
  "Pleno",
  "Sênior",
  "Especialista"
];

// Dados fictícios de vagas
const jobsData: Job[] = [
  {
    id: 1,
    title: "Analista de Marketing Digital",
    department: "Performance e Dados",
    location: "Maceió",
    type: "Tempo Integral",
    seniority: "Pleno",
    description: "Estamos buscando um analista de marketing digital para gerenciar campanhas de performance e analisar métricas de desempenho.",
    activities: [
      "Gerenciar campanhas de anúncios digitais",
      "Analisar métricas de performance e elaborar relatórios",
      "Otimizar campanhas para melhorar ROI",
      "Trabalhar com equipe de criação para desenvolvimento de materiais",
      "Manter-se atualizado sobre tendências e melhores práticas"
    ],
    requirements: [
      "Formação em Marketing, Publicidade ou áreas correlatas",
      "Experiência mínima de 2 anos com ferramentas de marketing digital",
      "Conhecimento em Google Ads, Meta Ads e LinkedIn Ads",
      "Habilidade com análise de dados e relatórios de performance"
    ],
    differentials: [
      "Certificações Google Analytics e Google Ads",
      "Experiência com ferramentas de automação de marketing",
      "Conhecimento em SEO e estratégias de conteúdo"
    ],
    benefits: [
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Bônus por performance",
      "Horário flexível e day-off no aniversário",
      "Ambiente descontraído e colaborativo"
    ]
  },
  {
    id: 2,
    title: "Redator de Conteúdo",
    department: "Conteúdo",
    location: "Maceió",
    type: "Tempo Integral",
    seniority: "Júnior",
    description: "Procuramos um redator criativo para criar conteúdos envolventes para blogs, redes sociais e materiais promocionais.",
    activities: [
      "Produzir textos para blogs, sites e redes sociais",
      "Criar roteiros para vídeos e podcasts",
      "Desenvolver e-books, whitepapers e outros materiais ricos",
      "Revisar textos para garantir qualidade e coerência",
      "Pesquisar tendências e assuntos relevantes para o público-alvo"
    ],
    requirements: [
      "Formação em Jornalismo, Letras ou Comunicação",
      "Excelente capacidade de escrita e revisão",
      "Conhecimento em SEO para conteúdo",
      "Experiência com criação de conteúdo para diferentes plataformas"
    ],
    differentials: [
      "Portfólio diversificado de textos",
      "Conhecimento em copywriting",
      "Experiência com estratégias de conteúdo"
    ],
    benefits: [
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Bônus por performance",
      "Horário flexível e day-off no aniversário",
      "Ambiente descontraído e colaborativo"
    ]
  },
  {
    id: 3,
    title: "Social Media Manager",
    department: "Redes Sociais",
    location: "Maceió",
    type: "Tempo Integral",
    seniority: "Pleno",
    description: "Buscamos um profissional para gerenciar nossas redes sociais, criar estratégias de conteúdo e engajamento.",
    activities: [
      "Gerenciar perfis em diversas plataformas de redes sociais",
      "Desenvolver calendário editorial e estratégia de conteúdo",
      "Analisar métricas de desempenho e engajamento",
      "Coordenar com designers para criação de materiais visuais",
      "Responder comentários e interagir com a comunidade online"
    ],
    requirements: [
      "Experiência com gestão de redes sociais",
      "Conhecimento em ferramentas de design como Photoshop e Canva",
      "Habilidade com planejamento de conteúdo",
      "Experiência com análise de métricas de mídias sociais"
    ],
    differentials: [
      "Conhecimento em fotografia e edição de vídeos",
      "Experiência com gestão de comunidades online",
      "Conhecimento em Instagram, TikTok e LinkedIn Ads"
    ],
    benefits: [
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Bônus por performance",
      "Horário flexível e day-off no aniversário",
      "Ambiente descontraído e colaborativo"
    ]
  },
  {
    id: 4,
    title: "Desenvolvedor Front-end",
    department: "Tecnologia",
    location: "Maceió",
    type: "Tempo Integral",
    seniority: "Sênior",
    description: "Estamos procurando um desenvolvedor front-end para criar interfaces responsivas e intuitivas para nossos clientes.",
    activities: [
      "Desenvolver interfaces de usuário responsivas e acessíveis",
      "Implementar designs de UI/UX em código",
      "Otimizar aplicações para máximo desempenho",
      "Colaborar com designers e desenvolvedores back-end",
      "Realizar testes e garantir compatibilidade cross-browser"
    ],
    requirements: [
      "Experiência com HTML, CSS e JavaScript",
      "Conhecimento em frameworks como React ou Vue.js",
      "Habilidade com design responsivo e otimização de performance",
      "Experiência com integração de APIs"
    ],
    differentials: [
      "Conhecimento em TypeScript",
      "Experiência com testes automatizados",
      "Conhecimento em UX/UI design"
    ],
    benefits: [
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Bônus por performance",
      "Horário flexível e day-off no aniversário",
      "Ambiente descontraído e colaborativo"
    ]
  },
  {
    id: 5,
    title: "Consultor de Vendas",
    department: "Comercial",
    location: "Maceió",
    type: "Tempo Integral",
    seniority: "Pleno",
    description: "Procuramos um consultor de vendas para prospectar clientes e apresentar nossas soluções de marketing digital.",
    activities: [
      "Prospectar e qualificar leads de potenciais clientes",
      "Realizar apresentações e demonstrações de produtos/serviços",
      "Elaborar propostas comerciais personalizadas",
      "Negociar contratos e fechar vendas",
      "Manter relacionamento com clientes atuais"
    ],
    requirements: [
      "Experiência com vendas consultivas B2B",
      "Conhecimento em técnicas de prospecção e negociação",
      "Habilidade com apresentações e propostas comerciais",
      "Experiência com CRM e gestão de pipeline de vendas"
    ],
    differentials: [
      "Experiência no setor de marketing digital ou tecnologia",
      "Carteira de clientes ativa",
      "Conhecimento em metodologias de vendas como SPIN Selling"
    ],
    benefits: [
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Comissões atrativas",
      "Horário flexível e day-off no aniversário",
      "Ambiente descontraído e colaborativo"
    ]
  },
  {
    id: 6,
    title: "Assistente Administrativo",
    department: "Administrativo",
    location: "Maceió",
    type: "Tempo Integral",
    seniority: "Estágio",
    description: "Buscamos um assistente administrativo para auxiliar nas rotinas administrativas e financeiras da empresa.",
    activities: [
      "Organizar documentos e processos administrativos",
      "Auxiliar no controle financeiro e contas a pagar/receber",
      "Dar suporte às equipes internas",
      "Realizar atendimento a fornecedores e prestadores",
      "Auxiliar na organização de eventos e reuniões"
    ],
    requirements: [
      "Formação em Administração ou áreas correlatas",
      "Conhecimento em rotinas administrativas e financeiras",
      "Habilidade com organização e gestão de documentos",
      "Experiência com atendimento e suporte interno"
    ],
    differentials: [
      "Conhecimento em ferramentas de gestão financeira",
      "Experiência em empresas de tecnologia ou agências",
      "Conhecimento em inglês"
    ],
    benefits: [
      "Vale alimentação e refeição",
      "Plano de saúde e odontológico",
      "Bônus por performance",
      "Horário flexível e day-off no aniversário",
      "Ambiente descontraído e colaborativo"
    ]
  }
];

const JobSearch = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("Todas as áreas");
  const [selectedLocation, setSelectedLocation] = useState("Maceió");
  const [selectedSeniority, setSelectedSeniority] = useState("Todos os níveis");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);
  const [showFilters, setShowFilters] = useState(false);
  const searchSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filtrar vagas com base nos critérios selecionados
    const filtered = jobsData.filter(job => {
      const matchesDepartment = selectedDepartment === "Todas as áreas" || job.department === selectedDepartment;
      const matchesLocation = job.location === selectedLocation;
      const matchesSeniority = selectedSeniority === "Todos os níveis" || job.seniority === selectedSeniority;
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesDepartment && matchesLocation && matchesSeniority && (searchTerm === "" || matchesSearch);
    });
    
    setFilteredJobs(filtered);
  }, [selectedDepartment, selectedLocation, selectedSeniority, searchTerm]);

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

    if (searchSectionRef.current) observer.observe(searchSectionRef.current);

    return () => {
      if (searchSectionRef.current) observer.unobserve(searchSectionRef.current);
    };
  }, []);

  return (
    <div id="vagas" className="yk-gradient-bg py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
          ref={searchSectionRef}
        >
          <div className="text-center mb-12">
            <h2 className="yk-section-title">Nossas Vagas Abertas</h2>
            <p className="yk-section-subtitle">
              Encontre a oportunidade perfeita para você iniciar ou continuar sua jornada na Yellow Kite.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12 backdrop-blur-sm bg-white/90 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-yellowkite-primary focus:border-yellowkite-primary transition duration-150 ease-in-out"
                  placeholder="Buscar por palavra-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-3 border border-yellowkite-primary rounded-lg text-sm font-medium text-yellowkite-primary bg-white hover:bg-yellowkite-primary/5 transition-all duration-300"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filtros
              </button>
            </div>
            
            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Área
                  </label>
                  <div className="relative">
                    <select
                      id="department"
                      className="block w-full pl-3 pr-10 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-yellowkite-primary focus:border-yellowkite-primary"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Localização
                  </label>
                  <div className="relative">
                    <select
                      id="location"
                      className="block w-full pl-3 pr-10 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-yellowkite-primary focus:border-yellowkite-primary"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="seniority" className="block text-sm font-medium text-gray-700 mb-1">
                    Senioridade
                  </label>
                  <div className="relative">
                    <select
                      id="seniority"
                      className="block w-full pl-3 pr-10 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-yellowkite-primary focus:border-yellowkite-primary"
                      value={selectedSeniority}
                      onChange={(e) => setSelectedSeniority(e.target.value)}
                    >
                      {seniorityLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma vaga encontrada</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Não encontramos vagas com os critérios selecionados. Tente ajustar seus filtros ou inscreva-se em nosso banco de talentos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;

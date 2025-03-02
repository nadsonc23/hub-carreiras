
import { useState, useEffect, useRef } from 'react';
import { Search, Filter, MapPin, BriefcaseIcon } from 'lucide-react';
import JobCard from './JobCard';

type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
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

// Dados fictícios de vagas
const jobsData: Job[] = [
  {
    id: 1,
    title: "Analista de Marketing Digital",
    department: "Performance e Dados",
    location: "Maceió",
    type: "Tempo Integral",
    description: "Estamos buscando um analista de marketing digital para gerenciar campanhas de performance e analisar métricas de desempenho."
  },
  {
    id: 2,
    title: "Redator de Conteúdo",
    department: "Conteúdo",
    location: "Maceió",
    type: "Tempo Integral",
    description: "Procuramos um redator criativo para criar conteúdos envolventes para blogs, redes sociais e materiais promocionais."
  },
  {
    id: 3,
    title: "Social Media Manager",
    department: "Redes Sociais",
    location: "Maceió",
    type: "Tempo Integral",
    description: "Buscamos um profissional para gerenciar nossas redes sociais, criar estratégias de conteúdo e engajamento."
  },
  {
    id: 4,
    title: "Desenvolvedor Front-end",
    department: "Tecnologia",
    location: "Maceió",
    type: "Tempo Integral",
    description: "Estamos procurando um desenvolvedor front-end para criar interfaces responsivas e intuitivas para nossos clientes."
  },
  {
    id: 5,
    title: "Consultor de Vendas",
    department: "Comercial",
    location: "Maceió",
    type: "Tempo Integral",
    description: "Procuramos um consultor de vendas para prospectar clientes e apresentar nossas soluções de marketing digital."
  },
  {
    id: 6,
    title: "Assistente Administrativo",
    department: "Administrativo",
    location: "Maceió",
    type: "Tempo Integral",
    description: "Buscamos um assistente administrativo para auxiliar nas rotinas administrativas e financeiras da empresa."
  }
];

const JobSearch = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("Todas as áreas");
  const [selectedLocation, setSelectedLocation] = useState("Maceió");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);
  const [showFilters, setShowFilters] = useState(false);
  const searchSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filtrar vagas com base nos critérios selecionados
    const filtered = jobsData.filter(job => {
      const matchesDepartment = selectedDepartment === "Todas as áreas" || job.department === selectedDepartment;
      const matchesLocation = job.location === selectedLocation;
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            job.department.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesDepartment && matchesLocation && (searchTerm === "" || matchesSearch);
    });
    
    setFilteredJobs(filtered);
  }, [selectedDepartment, selectedLocation, searchTerm]);

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
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

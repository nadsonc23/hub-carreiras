import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { toast } from 'sonner';

// Job type definition
type Job = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  seniority: string;
  employment: string;
  description: string;
  activities: string[];
  requirements: string[];
  differentials: string[];
  benefits: string[];
  bitrixJobId?: string; // Added for Bitrix24 integration
};

// Sample job data - this would be fetched from Bitrix24 API in production
const initialJobs: Job[] = [
  {
    id: 1,
    title: 'Desenvolvedor(a) Front-end',
    department: 'Tecnologia',
    location: 'Remoto',
    type: 'CLT',
    seniority: 'Pleno',
    employment: 'Full-time',
    description: 'Estamos buscando um(a) Desenvolvedor(a) Front-end apaixonado(a) por construir interfaces incríveis e que queira fazer parte de um time de alta performance.',
    activities: [
      'Desenvolvimento de interfaces web responsivas e acessíveis.',
      'Implementação de testes unitários e de integração.',
      'Participação em discussões técnicas eCode Reviews.',
    ],
    requirements: [
      'Experiência com React, HTML, CSS e JavaScript.',
      'Conhecimento em testes automatizados.',
      'Familiaridade com metodologias ágeis.',
    ],
    differentials: [
      'Conhecimento em Next.js.',
      'Experiência com Storybook.',
      'Inglês avançado.',
    ],
    benefits: [
      'Plano de saúde e odontológico.',
      'Vale alimentação e/ou refeição.',
      'Seguro de vida.',
      'Gympass.',
      'Zenklub',
    ],
  },
  {
    id: 2,
    title: 'Analista de Marketing Digital',
    department: 'Marketing',
    location: 'Híbrido (Maceió - AL)',
    type: 'PJ',
    seniority: 'Sênior',
    employment: 'Full-time',
    description: 'Buscamos um(a) Analista de Marketing Digital para liderar nossas estratégias online e impulsionar o crescimento da Yellow Kite.',
    activities: [
      'Planejamento e execução de campanhas de marketing digital.',
      'Análise de métricas e otimização de resultados.',
      'Gestão de redes sociais e produção de conteúdo.',
    ],
    requirements: [
      'Experiência em Google Ads, Facebook Ads e SEO.',
      'Conhecimento em ferramentas de análise de dados.',
      'Certificações em marketing digital.',
    ],
    differentials: [
      'Experiência com e-commerce.',
      'Conhecimento em CRM.',
      'Inglês avançado.',
    ],
    benefits: [
      'Vale alimentação e/ou refeição.',
      'Seguro de vida.',
      'Gympass.',
      'Zenklub',
    ],
  },
  {
    id: 3,
    title: 'Especialista em SEO',
    department: 'Marketing',
    location: 'Remoto',
    type: 'CLT',
    seniority: 'Sênior',
    employment: 'Full-time',
    description: 'Estamos à procura de um(a) Especialista em SEO para otimizar a presença online de nossos clientes e garantir o melhor posicionamento nos resultados de busca.',
    activities: [
      'Realização de auditorias de SEO e identificação de oportunidades de melhoria.',
      'Implementação de estratégias de SEO on-page e off-page.',
      'Acompanhamento de métricas e relatórios de desempenho.',
    ],
    requirements: [
      'Experiência comprovada em SEO técnico e de conteúdo.',
      'Conhecimento avançado em ferramentas de SEO (Google Search Console, SEMrush, etc.).',
      'Familiaridade com algoritmos de busca e atualizações do Google.',
    ],
    differentials: [
      'Experiência com SEO para e-commerce.',
      'Conhecimento em otimização de taxa de conversão (CRO).',
      'Inglês avançado.',
    ],
    benefits: [
      'Plano de saúde e odontológico.',
      'Vale alimentação e/ou refeição.',
      'Seguro de vida.',
      'Gympass.',
      'Zenklub',
    ],
  },
];

const JobSearch = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    departments: [] as string[],
    locations: [] as string[],
    types: [] as string[],
    seniorities: [] as string[],
    employments: [] as string[] // Added employment filter
  });
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch jobs from Bitrix24 API
  const fetchJobsFromBitrix = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // This would be replaced with an actual API call to Bitrix24
      // For demonstration, we'll simulate a fetch with a timeout
      setTimeout(() => {
        // In a real implementation, this would be data from the Bitrix24 API
        console.log('Fetched jobs from Bitrix24');
        setJobs(initialJobs);
        setFilteredJobs(initialJobs);
        setLoading(false);
      }, 1000);
      
      // Example of real fetch (commented out):
      /*
      const response = await fetch('https://yourcompany.bitrix24.com/rest/1/YOUR_WEBHOOK_TOKEN/lists.element.get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          IBLOCK_TYPE_ID: 'lists',
          IBLOCK_ID: 'YOUR_JOB_LIST_ID', 
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs from Bitrix24');
      }
      
      const data = await response.json();
      
      // Transform Bitrix24 data to our job format
      const transformedJobs = data.result.map(item => ({
        id: item.ID,
        bitrixJobId: item.ID,
        title: item.PROPERTY_VALUES.TITLE,
        department: item.PROPERTY_VALUES.DEPARTMENT,
        location: item.PROPERTY_VALUES.LOCATION,
        type: item.PROPERTY_VALUES.TYPE,
        seniority: item.PROPERTY_VALUES.SENIORITY,
        employment: item.PROPERTY_VALUES.EMPLOYMENT,
        description: item.PROPERTY_VALUES.DESCRIPTION,
        activities: item.PROPERTY_VALUES.ACTIVITIES?.split('\n') || [],
        requirements: item.PROPERTY_VALUES.REQUIREMENTS?.split('\n') || [],
        differentials: item.PROPERTY_VALUES.DIFFERENTIALS?.split('\n') || [],
        benefits: item.PROPERTY_VALUES.BENEFITS?.split('\n') || [],
      }));
      
      setJobs(transformedJobs);
      setFilteredJobs(transformedJobs);
      */
      
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Não foi possível carregar as vagas. Tente novamente mais tarde.');
      toast.error('Erro ao carregar vagas do Bitrix24');
    } finally {
      setLoading(false);
    }
  };

  // Call this function when the component mounts to load jobs
  useEffect(() => {
    fetchJobsFromBitrix();
  }, []);

  // Extract unique filter options from jobs
  const getUniqueFilterOptions = () => {
    const departments = [...new Set(jobs.map(job => job.department))];
    const locations = [...new Set(jobs.map(job => job.location))];
    const types = [...new Set(jobs.map(job => job.type))];
    const seniorities = [...new Set(jobs.map(job => job.seniority))];
    const employments = [...new Set(jobs.map(job => job.employment))];
    
    return { departments, locations, types, seniorities, employments };
  };

  const filterOptions = getUniqueFilterOptions();

  // Handle filter changes
  const toggleFilter = (category: 'departments' | 'locations' | 'types' | 'seniorities' | 'employments', value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[category]];
      
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [category]: currentFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentFilters, value]
        };
      }
    });
  };

  // Apply filters and search
  useEffect(() => {
    let result = [...jobs];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(query) || 
        job.description.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query)
      );
    }
    
    // Apply department filters
    if (filters.departments.length > 0) {
      result = result.filter(job => filters.departments.includes(job.department));
    }
    
    // Apply location filters
    if (filters.locations.length > 0) {
      result = result.filter(job => filters.locations.includes(job.location));
    }
    
    // Apply type filters
    if (filters.types.length > 0) {
      result = result.filter(job => filters.types.includes(job.type));
    }
    
    // Apply seniority filters
    if (filters.seniorities.length > 0) {
      result = result.filter(job => filters.seniorities.includes(job.seniority));
    }
    
    // Apply employment filters
    if (filters.employments.length > 0) {
      result = result.filter(job => filters.employments.includes(job.employment));
    }
    
    setFilteredJobs(result);
  }, [searchQuery, filters, jobs]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      departments: [],
      locations: [],
      types: [],
      seniorities: [],
      employments: []
    });
    setSearchQuery('');
  };

  const anyFiltersActive = 
    searchQuery || 
    filters.departments.length > 0 || 
    filters.locations.length > 0 || 
    filters.types.length > 0 || 
    filters.seniorities.length > 0 || 
    filters.employments.length > 0;

  return (
    <div className="bg-yellowkite-dark py-16 md:py-24" id="vagas-abertas">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Vagas Abertas</h2>
            <p className="text-lg text-gray-400 mb-6">
              Descubra as oportunidades disponíveis na Yellow Kite e junte-se à nossa equipe.
            </p>
            
            {/* Manual refresh button to sync with Bitrix24 */}
            <Button
              variant="outline"
              className="mb-6 border-yellowkite-primary text-yellowkite-primary hover:bg-yellowkite-primary/10"
              onClick={() => {
                toast.info('Sincronizando com Bitrix24...');
                fetchJobsFromBitrix();
              }}
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Sincronizar com Bitrix24'}
            </Button>
            
            {/* Search and filter */}
            <div className="bg-yellowkite-darker p-4 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Buscar vagas..."
                    className="pl-10 bg-yellowkite-dark/50 border-yellowkite-dark/80 text-white placeholder:text-gray-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="border-yellowkite-primary text-yellowkite-primary hover:bg-yellowkite-primary/10"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filtros {showFilters ? 'menos' : 'mais'}
                </Button>
                
                {anyFiltersActive && (
                  <Button
                    onClick={clearFilters}
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5 mr-2" />
                    Limpar
                  </Button>
                )}
              </div>
              
              {/* Filter badges */}
              {anyFiltersActive && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {searchQuery && (
                    <Badge variant="outline" className="bg-yellowkite-primary/20 text-yellowkite-primary border-yellowkite-primary/30">
                      Busca: {searchQuery}
                      <button 
                        className="ml-2 hover:text-white" 
                        onClick={() => setSearchQuery('')}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {filters.departments.map(dept => (
                    <Badge key={dept} variant="outline" className="bg-yellowkite-primary/20 text-yellowkite-primary border-yellowkite-primary/30">
                      {dept}
                      <button 
                        className="ml-2 hover:text-white" 
                        onClick={() => toggleFilter('departments', dept)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {filters.locations.map(loc => (
                    <Badge key={loc} variant="outline" className="bg-yellowkite-secondary/20 text-yellowkite-secondary border-yellowkite-secondary/30">
                      {loc}
                      <button 
                        className="ml-2 hover:text-white" 
                        onClick={() => toggleFilter('locations', loc)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {filters.types.map(type => (
                    <Badge key={type} variant="outline" className="bg-yellowkite-accent/20 text-yellowkite-accent border-yellowkite-accent/30">
                      {type}
                      <button 
                        className="ml-2 hover:text-white" 
                        onClick={() => toggleFilter('types', type)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {filters.seniorities.map(seniority => (
                    <Badge key={seniority} variant="outline" className="bg-green-700/20 text-green-500 border-green-700/30">
                      {seniority}
                      <button 
                        className="ml-2 hover:text-white" 
                        onClick={() => toggleFilter('seniorities', seniority)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {filters.employments.map(employment => (
                    <Badge key={employment} variant="outline" className="bg-purple-700/20 text-purple-500 border-purple-700/30">
                      {employment}
                      <button 
                        className="ml-2 hover:text-white" 
                        onClick={() => toggleFilter('employments', employment)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
              
              {/* Expanded filter options */}
              {showFilters && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-4 border-t border-yellowkite-dark/80 animate-fade-in">
                  <div>
                    <h3 className="font-medium text-white mb-2">Departamento</h3>
                    <div className="space-y-1">
                      {filterOptions.departments.map(dept => (
                        <div key={dept} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`dept-${dept}`}
                            checked={filters.departments.includes(dept)}
                            onChange={() => toggleFilter('departments', dept)}
                            className="mr-2 accent-yellowkite-primary h-4 w-4"
                          />
                          <label htmlFor={`dept-${dept}`} className="text-gray-400 hover:text-white cursor-pointer text-sm">
                            {dept}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-2">Localização</h3>
                    <div className="space-y-1">
                      {filterOptions.locations.map(loc => (
                        <div key={loc} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`loc-${loc}`}
                            checked={filters.locations.includes(loc)}
                            onChange={() => toggleFilter('locations', loc)}
                            className="mr-2 accent-yellowkite-secondary h-4 w-4"
                          />
                          <label htmlFor={`loc-${loc}`} className="text-gray-400 hover:text-white cursor-pointer text-sm">
                            {loc}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-2">Tipo</h3>
                    <div className="space-y-1">
                      {filterOptions.types.map(type => (
                        <div key={type} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`type-${type}`}
                            checked={filters.types.includes(type)}
                            onChange={() => toggleFilter('types', type)}
                            className="mr-2 accent-yellowkite-accent h-4 w-4"
                          />
                          <label htmlFor={`type-${type}`} className="text-gray-400 hover:text-white cursor-pointer text-sm">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-2">Senioridade</h3>
                    <div className="space-y-1">
                      {filterOptions.seniorities.map(seniority => (
                        <div key={seniority} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`seniority-${seniority}`}
                            checked={filters.seniorities.includes(seniority)}
                            onChange={() => toggleFilter('seniorities', seniority)}
                            className="mr-2 accent-green-500 h-4 w-4"
                          />
                          <label htmlFor={`seniority-${seniority}`} className="text-gray-400 hover:text-white cursor-pointer text-sm">
                            {seniority}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-white mb-2">Regime</h3>
                    <div className="space-y-1">
                      {filterOptions.employments.map(employment => (
                        <div key={employment} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`employment-${employment}`}
                            checked={filters.employments.includes(employment)}
                            onChange={() => toggleFilter('employments', employment)}
                            className="mr-2 accent-purple-500 h-4 w-4"
                          />
                          <label htmlFor={`employment-${employment}`} className="text-gray-400 hover:text-white cursor-pointer text-sm">
                            {employment}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Error message */}
          {error && (
            <div className="text-center p-6 bg-red-900/20 border border-red-900 rounded-lg mb-8">
              <p className="text-red-400">{error}</p>
              <Button 
                onClick={fetchJobsFromBitrix} 
                variant="outline" 
                className="mt-4 border-red-500 text-red-400 hover:bg-red-900/10"
              >
                Tentar novamente
              </Button>
            </div>
          )}
          
          {/* Loading state */}
          {loading && (
            <div className="text-center p-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellowkite-primary mb-4"></div>
              <p className="text-gray-400">Carregando vagas...</p>
            </div>
          )}
          
          {/* Job list */}
          {!loading && !error && (
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-12 bg-yellowkite-darker/50 rounded-xl border border-yellowkite-dark/80">
                  <p className="text-gray-400 mb-2">Nenhuma vaga encontrada com os filtros atuais.</p>
                  <Button 
                    onClick={clearFilters} 
                    variant="outline" 
                    className="border-yellowkite-primary text-yellowkite-primary hover:bg-yellowkite-primary/10"
                  >
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;

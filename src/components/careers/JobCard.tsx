
import { useState } from 'react';
import { MapPin, Clock, ChevronRight, ChevronDown } from 'lucide-react';

type JobProps = {
  job: {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
  };
};

const JobCard = ({ job }: JobProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
        isExpanded ? 'shadow-md' : 'hover:shadow-sm'
      }`}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellowkite-primary/10 text-yellowkite-primary mb-3">
              {job.department}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {job.type}
              </div>
            </div>
          </div>
          
          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            {isExpanded ? (
              <ChevronDown className="h-6 w-6 text-yellowkite-primary" />
            ) : (
              <ChevronRight className="h-6 w-6 text-gray-400" />
            )}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-0 animate-fade-in">
          <div className="h-px bg-gray-200 mb-6"></div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Descrição da vaga</h4>
            <p className="text-gray-600">{job.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <a
              href={`/careers/job/${job.id}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellowkite-primary hover:bg-yellowkite-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellowkite-primary"
            >
              Ver detalhes
            </a>
            <a
              href={`https://forms.yellowkite.com.br/job/${job.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-yellowkite-primary text-sm font-medium rounded-md text-yellowkite-primary bg-white hover:bg-yellowkite-primary/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellowkite-primary"
            >
              Candidatar-se
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;

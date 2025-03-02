
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
      className={`bg-yellowkite-darker/80 border border-yellowkite-dark/80 rounded-xl transition-all duration-300 ${
        isExpanded ? 'shadow-lg shadow-yellowkite-primary/10' : 'hover:shadow-md hover:shadow-yellowkite-primary/5'
      }`}
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellowkite-primary/20 text-yellowkite-primary mb-3">
              {job.department}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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
              <ChevronRight className="h-6 w-6 text-gray-500" />
            )}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="px-6 pb-6 pt-0 animate-fade-in">
          <div className="h-px bg-yellowkite-dark/80 mb-6"></div>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-white">Descrição da vaga</h4>
            <p className="text-gray-400">{job.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <a
              href={`/careers/job/${job.id}`}
              className="inline-flex items-center px-4 py-2 bg-yellowkite-primary text-black rounded-md shadow-sm hover:bg-yellowkite-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellowkite-primary transition-all duration-300 font-medium"
            >
              Ver detalhes
            </a>
            <a
              href={`https://forms.yellowkite.com.br/job/${job.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-yellowkite-primary text-sm font-medium rounded-md text-yellowkite-primary bg-transparent hover:bg-yellowkite-primary/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellowkite-primary transition-all duration-300"
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

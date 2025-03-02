
import { useState, useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const departments = [
  "Performance e Dados",
  "Conteúdo",
  "Redes Sociais",
  "Tecnologia",
  "Comercial",
  "Administrativo"
];

const TalentPool = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    resume: null as File | null,
    message: '',
    terms: false
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar os dados do formulário
    console.log('Form data submitted:', formData);
    
    // Simulando envio bem-sucedido
    setTimeout(() => {
      setIsSubmitted(true);
      // Resetar o formulário após alguns segundos
      setTimeout(() => {
        setIsFormOpen(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: '',
          resume: null,
          message: '',
          terms: false
        });
      }, 3000);
    }, 1000);
  };

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
    <div className="bg-white py-16 md:py-24">
      <div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        ref={sectionRef}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Banco de Talentos</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Não encontrou a vaga ideal? Faça parte do nosso banco de talentos e seja notificado quando surgir uma oportunidade compatível com o seu perfil.
          </p>
          
          {!isFormOpen ? (
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-yellowkite-secondary text-white rounded-md shadow-md hover:bg-yellowkite-secondary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellowkite-secondary"
            >
              Cadastrar no Banco de Talentos
            </button>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mt-8 text-left animate-fade-in">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cadastro Realizado!</h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Seus dados foram recebidos com sucesso. Entraremos em contato assim que surgir uma oportunidade compatível com o seu perfil.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Preencha seus dados</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellowkite-secondary focus:border-yellowkite-secondary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellowkite-secondary focus:border-yellowkite-secondary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellowkite-secondary focus:border-yellowkite-secondary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                          Área de interesse *
                        </label>
                        <select
                          id="department"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellowkite-secondary focus:border-yellowkite-secondary"
                        >
                          <option value="" disabled>Selecione uma área</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                          Currículo (PDF, DOC, DOCX) *
                        </label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellowkite-secondary focus:border-yellowkite-secondary"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Tamanho máximo: 5MB
                        </p>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellowkite-secondary focus:border-yellowkite-secondary"
                          placeholder="Conte-nos um pouco sobre você, suas experiências e expectativas..."
                        ></textarea>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="terms"
                              name="terms"
                              type="checkbox"
                              checked={formData.terms}
                              onChange={handleChange}
                              required
                              className="h-4 w-4 text-yellowkite-secondary focus:ring-yellowkite-secondary border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                              Concordo com a <a href="/privacy-policy" className="text-yellowkite-secondary hover:underline">Política de Privacidade</a> da Yellow Kite
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-yellowkite-secondary text-white rounded-md hover:bg-yellowkite-secondary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellowkite-secondary"
                      >
                        Enviar cadastro
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFormOpen(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TalentPool;

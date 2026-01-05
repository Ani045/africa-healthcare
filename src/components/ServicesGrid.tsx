import { Heart, Zap, Stethoscope, Brain, Shield, Activity } from 'lucide-react';

const ServicesGrid = () => {
  const scrollToForm = () => {
    const heroForm = document.getElementById('hero-contact-form');
    if (heroForm) {
      heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const firstInput = heroForm.querySelector('input');
        if (firstInput) (firstInput as HTMLInputElement).focus();
      }, 500);
    }
  };

  const services = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Medical Oncology for Adults',
      description: 'Comprehensive chemotherapy and immunotherapy treatments for adult cancer patients.',
      features: ['Chemotherapy', 'Immunotherapy']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Neuro-Oncology',
      description: 'Specialized treatment for brain and spinal cord cancers with advanced surgical techniques.',
      features: ['Brain Cancers', 'Spinal Cord Cancers']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Haemato-Oncology',
      description: 'Expert care for blood cancers including bone marrow transplantation services.',
      features: ['Blood Cancers', 'Bone Marrow Transplantation']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Breast Cancer',
      description: 'Comprehensive care and treatment for all stages of breast cancer.',
      features: ['Early Detection', 'Advanced Therapies']
    },

    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Radiation Oncology for Tumors',
      description: 'Advanced radiation therapy techniques for precise tumor targeting.',
      features: ['IMRT', 'CyberKnife Technology']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Prostate Cancer Treatment',
      description: 'Specialized care for prostate cancer with minimally invasive surgical options.',
      features: ['Robotic Surgery', 'Targeted Therapy']
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: 'Gastro-Intestinal Oncology',
      description: 'Expert treatment for digestive system cancers with advanced surgical techniques.',
      features: ['GI Cancers', 'Minimally Invasive Surgery']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Breast Cancer Treatment',
      description: 'Comprehensive breast cancer care with personalized treatment approaches.',
      features: ['Surgical Oncology', 'Reconstructive Surgery']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Head & Neck Oncology',
      description: 'Specialized treatment for head and neck cancers with reconstructive options.',
      features: ['ENT Oncology', 'Reconstructive Surgery']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Thoracic Oncology',
      description: 'Expert care for lung and chest cancers with advanced surgical techniques.',
      features: ['Lung Cancer', 'Minimally Invasive Surgery']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Liver Cancer Treatment',
      description: 'Comprehensive liver cancer care with advanced treatment modalities.',
      features: ['Hepatic Surgery', 'Targeted Therapy']
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Pediatric Oncology',
      description: 'Specialized cancer care for children with family-centered approach.',
      features: ['Childhood Cancers', 'Family Support']
    }
  ];

  return (
    <section id="services" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a365d] mb-4">
            Our Cancer Treatment Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We have wide range of Cancer Treatments with the best team of cancer doctors in India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-3 md:p-6 border border-gray-200 hover:border-[#1a365d]/50 hover:shadow-lg transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1a365d]/20 rounded-lg flex items-center justify-center mb-2 md:mb-4 group-hover:bg-[#1a365d]/30 transition-colors">
                  <div className="text-[#1a365d] scale-75 md:scale-100">{service.icon}</div>
                </div>

                <h3 className="text-sm md:text-lg font-semibold text-[#1a365d] mb-1 md:mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="hidden md:block text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-1 md:space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 md:space-x-2">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#1a365d] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600 text-[10px] md:text-sm leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="bg-[#1a365d] text-white px-8 py-4 border-2 border-[#F5A623] rounded-lg font-semibold hover:bg-[#2c5282] transition-colors shadow-lg"
          >
            Get Your First Free Estimation
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
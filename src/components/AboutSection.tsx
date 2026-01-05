import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-4">
            Your Trusted Medical Tourism Partner
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We connect international patients with India's top cancer hospitals. From consultation to recovery, our dedicated team ensures a seamless medical journey with personalized care and significant cost savings.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#FEF3E2] p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-[#1a365d] text-sm mb-1">JCI Accredited</h3>
            <p className="text-gray-600 text-xs">International quality standards</p>
          </div>

          <div className="bg-[#FEF3E2] p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Expert Oncologists</h3>
            <p className="text-gray-600 text-xs">Internationally trained specialists</p>
          </div>

          <div className="bg-[#FEF3E2] p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-2">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Global Patients</h3>
            <p className="text-gray-600 text-xs">140+ countries served</p>
          </div>

          <div className="bg-[#FEF3E2] p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-2">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-[#1a365d] text-sm mb-1">Complete Support</h3>
            <p className="text-gray-600 text-xs">End-to-end assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
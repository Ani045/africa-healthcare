
import { useState } from 'react';
import { Shield, Calendar } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    countryCode: '',
    message: ''
  });

  // Simplified countries list
  const countries = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'Australia', code: '+61' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Canada', code: '+1' },
    { name: 'Egypt', code: '+20' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Iraq', code: '+964' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Nepal', code: '+977' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Oman', code: '+968' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Qatar', code: '+974' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'South Africa', code: '+27' },
    { name: 'South Sudan', code: '+211' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Sudan', code: '+249' },
    { name: 'Tanzania', code: '+255' },
    { name: 'UAE', code: '+971' },
    { name: 'Uganda', code: '+256' },
    { name: 'UK', code: '+44' },
    { name: 'USA', code: '+1' },
    { name: 'Yemen', code: '+967' },
    { name: 'Zambia', code: '+260' },
    { name: 'Zimbabwe', code: '+263' }
  ];

  const handleConsultationClick = () => {
    const formElement = document.getElementById('hero-contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const firstInput = formElement.querySelector('input');
        if (firstInput) (firstInput as HTMLInputElement).focus();
      }, 500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const [countryName, countryCode] = selectedValue.split('|');
      setFormData(prev => ({
        ...prev,
        country: countryName,
        countryCode: countryCode
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        country: '',
        countryCode: ''
      }));
    }
  };

  return (
    <section className="relative min-h-screen lg:min-h-[85vh] flex items-center pt-20 pb-6 lg:pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/damfndmrm/image/upload/v1766993266/best-hospital-in-kollam_1_kbys8k.webp)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/80 via-black/50 to-black/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Simplified */}
          <div className="text-white space-y-4 col-span-full lg:col-span-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">Trusted Medical Tourism Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight ">
              Cancer Treatment in India
              <br />
              <span className="text-[#154D92] bg-white/90 px-2 rounded ">Save up to 70%</span>
            </h1>

            <p className="text-white/90 text-base max-w-md">
              World-class oncology care at affordable prices. Get personalized treatment plans from India's top cancer specialists.
            </p>

            {/* Key Highlights - Compact */}
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-white/20 px-3 py-1.5 rounded-full">✓ JCI Accredited</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full">✓ No Waiting</span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full">✓ Visa Support</span>
            </div>

            {/* CTA Button - Desktop Only */}
            <div className="hidden lg:block pt-2">
              <button
                onClick={handleConsultationClick}
                className="bg-white text-[#154D92] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Get Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Side - Contact Form (Desktop) */}
          <div className="hidden lg:block bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border border-[#154D92]/20 w-full max-w-sm mx-auto">
            <div id="hero-contact-form">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold text-[#154D92]">
                  Get Free Treatment Estimate
                </h2>
                <p className="text-gray-600 text-xs">
                  Connect with our medical tourism team
                </p>
              </div>

              <form accept-charset='UTF-8'  method='POST' className="space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                    placeholder="Your Name *"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                    placeholder="Phone Number *"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <select
                    name="countrySelect"
                    value={formData.country && formData.countryCode ? `${formData.country}|${formData.countryCode}` : ''}
                    onChange={handleCountryChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                  >
                    <option value="">Select Country *</option>
                    {countries.map((country) => (
                      <option key={country.name} value={`${country.name}|${country.code}`}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none resize-none text-sm"
                    placeholder="Briefly describe your condition..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#154D92] text-white py-2.5 rounded-lg font-semibold hover:bg-[#0e3a6e] transition-colors text-sm"
                >
                  Get Free Estimate
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your information is secure & confidential
                </p>
              </form>
            </div>
          </div>

          {/* Mobile Form - Only visible on mobile */}
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-[#154D92]/20 w-full">
            <div id="hero-contact-form-mobile">
              <div className="text-center mb-3">
                <h2 className="text-base font-bold text-[#154D92]">
                  Get Free Treatment Estimate
                </h2>
              </div>

              <form accept-charset='UTF-8' action='https://app.formester.com/forms/74CaRVAvR/submissions' method='POST' className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                    placeholder="Name *"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                    placeholder="Phone *"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                  placeholder="Email"
                />

                <select
                  name="countrySelect"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none text-sm"
                >
                  <option value="">Select Country *</option>
                  {countries.map((country) => (
                    <option key={country.name} value={`${country.name}|${country.code}`}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-[#154D92] focus:outline-none resize-none text-sm"
                  placeholder="Describe your condition..."
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#154D92] text-white py-2.5 rounded-lg font-semibold hover:bg-[#0e3a6e] transition-colors text-sm"
                >
                  Get Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
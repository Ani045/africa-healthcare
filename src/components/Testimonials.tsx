import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const testimonials = [
    {
      name: 'Mrs. Grace Wanjiku',
      country: 'Kenya',
      treatment: 'Breast Cancer Surgery',
      quote: 'The care I received was exceptional. From Nairobi to Delhi, the medical tourism team handled everything perfectly. I saved over 65% compared to treatment options in Europe.'
    },
    {
      name: 'Mr. Tesfaye Bekele',
      country: 'Ethiopia',
      treatment: 'Bone Marrow Transplant',
      quote: 'After searching for years, I finally found world-class cancer treatment in India. The doctors were compassionate and the facilities rivaled the best in the world.'
    },
    {
      name: 'Mrs. Amina Juma',
      country: 'Tanzania',
      treatment: 'Chemotherapy & Radiation',
      quote: 'From Dar es Salaam to India, my journey was seamless. The International Patient Department took care of visa, accommodation, and my entire treatment plan.'
    },
    {
      name: 'Mr. Samuel Ochieng',
      country: 'Kenya',
      treatment: 'Prostate Cancer Treatment',
      quote: 'The personalized treatment approach and affordable costs made all the difference. I received the same quality care as top hospitals worldwide at a fraction of the cost.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-[#FEF3E2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-3">
            Patient Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from international patients who chose India for their cancer treatment
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FEF3E2] rounded-xl p-6 lg:p-8 relative">
            <Quote className="w-10 h-10 text-[#1a365d]/20 absolute top-4 left-4" />

            <div className="text-center pt-6">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div className="mb-4">
                <p className="font-semibold text-[#1a365d] text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].country} • {testimonials[currentIndex].treatment}</p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mb-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-[#1a365d] w-6' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#1a365d]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#1a365d]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToForm}
            className="bg-[#1a365d] text-white px-6 py-3 border-2 border-[#F5A623] rounded-lg font-semibold hover:bg-[#2c5282] transition-colors shadow-lg"
          >
            Get Your First Free Estimation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
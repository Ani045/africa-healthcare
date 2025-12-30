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
      name: 'Mrs. Maria Munjanja',
      country: 'Zimbabwe',
      treatment: 'Bone Marrow Transplant',
      quote: 'The care I received was exceptional. From airport pickup to post-treatment follow-up, everything was seamless. I saved over 60% compared to what I would have paid back home.'
    },
    {
      name: 'Master Emmanuel Kenyi',
      country: 'South Sudan',
      treatment: 'Bone Marrow Transplant',
      quote: 'After 13 years of struggling, I finally found the right treatment in India. The doctors were compassionate and the facilities world-class.'
    },
    {
      name: 'Mr. Ahmed Hassan',
      country: 'Oman',
      treatment: 'Cancer Surgery',
      quote: 'Excellent medical tourism experience. The team helped with visa, accommodation, and made our entire stay comfortable. Highly recommend!'
    },
    {
      name: 'Mrs. Sarah Johnson',
      country: 'Kenya',
      treatment: 'Chemotherapy',
      quote: 'The personalized treatment plan and affordable costs made all the difference. The International Patient Department took care of everything.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-[#f0f7ff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#154D92] mb-3">
            Patient Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from international patients who chose India for their cancer treatment
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f0f7ff] rounded-xl p-6 lg:p-8 relative">
            <Quote className="w-10 h-10 text-[#154D92]/20 absolute top-4 left-4" />

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
                <p className="font-semibold text-[#154D92] text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonials[currentIndex].country} • {testimonials[currentIndex].treatment}</p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mb-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-[#154D92] w-6' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#154D92]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-[#154D92]"
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
            className="bg-[#154D92] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0e3a6e] transition-colors shadow-lg"
          >
            Start Your Treatment Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
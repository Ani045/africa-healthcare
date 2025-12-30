const Footer = () => {
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

  return (
    <footer className="bg-[#154D92] text-white py-4">
      <div className="container mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            SKIP THE WAITING ROOM – REGISTER ONLINE!
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Save time and avoid the hassle by registering online before your visit.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-[#154D92] px-12 py-4 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Book An Appointment
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-2 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2025 Artemis Hospital. All rights reserved. | JCI Accredited Healthcare Provider
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
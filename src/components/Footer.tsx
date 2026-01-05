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
    <footer className="bg-[#1a365d] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main CTA Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Ready to Start Your Treatment Journey?
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Get your first free estimation today. Our medical tourism team is here to help.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#F5A623] text-[#1a365d] px-10 py-4 rounded-lg text-lg font-bold hover:bg-[#FFB84D] transition-all transform hover:scale-105 shadow-lg"
          >
            Get Your First Free Estimation
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 NEWLIFE GLOBAL-HEALTHCARE. All rights reserved. | JCI Accredited Healthcare Provider
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
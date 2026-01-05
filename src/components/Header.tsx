import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/damfndmrm/image/upload/v1767612882/logo_oktwdd.png"
              alt="NEWLIFE GLOBAL-HEALTHCARE"
              className="h-12 lg:h-14 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#1a365d] hover:text-[#F5A623] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={scrollToForm}
              className="bg-[#1a365d] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2c5282] transition-colors shadow-md border-2 border-[#F5A623]">
              Get Free Estimation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1a365d] hover:text-[#F5A623] transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              {['Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-medium text-[#1a365d] hover:text-[#F5A623] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <button
                  className="w-full bg-[#1a365d] text-white px-4 py-2.5 rounded-lg text-sm font-semibold border-2 border-[#F5A623]"
                  onClick={() => {
                    scrollToForm();
                    setIsMenuOpen(false);
                  }}
                >
                  Get Free Estimation
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
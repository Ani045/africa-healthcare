import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CTABanner = () => {
    const phoneNumber = '+919821944337';
    const displayNumber = '+91 98219 44337';

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

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const handleWhatsApp = () => {
        const message = "Hello, I'd like to get a free estimation for cancer treatment.";
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-8 bg-[#1a365d]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    {/* Text */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
                            Get Your First Free Estimation
                        </h2>
                        <p className="text-white/80 text-sm lg:text-base">
                            Speak with our medical tourism experts today
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        {/* Call Button */}
                        <button
                            onClick={handleCall}
                            className="flex items-center gap-2 bg-white text-[#1a365d] px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
                        >
                            <Phone className="w-5 h-5" />
                            <span>{displayNumber}</span>
                        </button>

                        {/* WhatsApp Button */}
                        <button
                            onClick={handleWhatsApp}
                            className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp Us</span>
                        </button>

                        {/* Form CTA */}
                        <button
                            onClick={scrollToForm}
                            className="flex items-center gap-2 bg-[#F5A623] text-[#1a365d] px-5 py-3 rounded-lg font-bold hover:bg-[#FFB84D] transition-colors shadow-md"
                        >
                            <span>Get Free Estimation</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;

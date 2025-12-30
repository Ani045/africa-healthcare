import { ClipboardList, FileCheck, Stamp, Shield, Plane, Stethoscope } from 'lucide-react';

const TripPlanningTimeline = () => {
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

    const steps = [
        {
            number: 1,
            icon: <ClipboardList className="w-6 h-6" />,
            title: 'Send Your Reports',
            description: 'Share your medical reports with us. Our team will connect you with the right oncologist and provide a detailed treatment plan with cost estimate.',
            image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 2,
            icon: <Stethoscope className="w-6 h-6" />,
            title: 'Pre-Medical Consultation',
            description: 'Get a free video consultation with our specialists to discuss your condition, treatment options, and answer all your questions before travel.',
            image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 3,
            icon: <FileCheck className="w-6 h-6" />,
            title: 'Required Documents',
            description: 'Prepare essential documents: passport, medical reports, test results, and treatment history. We guide you through the entire documentation process.',
            image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 4,
            icon: <Stamp className="w-6 h-6" />,
            title: 'Visa Assistance',
            description: 'We provide visa invitation letters and assist with medical visa applications. Foreign patients can apply for e-Medical Visa for hassle-free travel.',
            image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 5,
            icon: <Shield className="w-6 h-6" />,
            title: 'Insurance & Payment',
            description: 'We work with international insurance providers and offer flexible payment options. Most major international health insurance plans are accepted.',
            image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            number: 6,
            icon: <Plane className="w-6 h-6" />,
            title: 'Arrival & Treatment',
            description: 'Complimentary airport pickup, comfortable accommodation arrangements, and dedicated care coordinator throughout your treatment journey.',
            image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#154D92] mb-3">
                        Plan Your Treatment Journey
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We understand that seeking cancer treatment abroad can be challenging. Our International Patient Department ensures you feel at home during your stay.
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="relative mb-8 last:mb-0">
                            {/* Timeline Line - Desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-[#154D92] to-[#154D92]/30 transform -translate-x-1/2 z-0" />
                            )}

                            {/* Mobile Layout */}
                            <div className="md:hidden">
                                <div className="flex items-start gap-4">
                                    {/* Step Circle */}
                                    <div className="relative flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#154D92] rounded-full flex items-center justify-center text-white shadow-lg">
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#154D92] text-xs font-bold border-2 border-[#154D92]">
                                            {step.number}
                                        </div>
                                        {/* Vertical line for mobile */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute left-1/2 top-full w-0.5 h-8 bg-[#154D92]/30 transform -translate-x-1/2" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 bg-[#f0f7ff] rounded-lg p-4 border-l-4 border-[#154D92]">
                                        <h3 className="text-lg font-bold text-[#154D92] mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                                        <button
                                            onClick={scrollToForm}
                                            className="bg-[#154D92] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0e3a6e] transition-colors"
                                        >
                                            Talk To Experts
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout - Alternating */}
                            <div className={`hidden md:flex items-center gap-6 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                                {/* Image */}
                                <div className="w-5/12">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="rounded-xl shadow-lg w-full h-48 object-cover hover:shadow-xl transition-all duration-300"
                                    />
                                </div>

                                {/* Center Diamond */}
                                <div className="w-16 h-16 bg-white rounded-xl rotate-45 flex items-center justify-center shadow-lg border-2 border-[#154D92] flex-shrink-0 z-10">
                                    <div className="-rotate-45 text-[#154D92]">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-5/12">
                                    <div className={`bg-[#f0f7ff] rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'border-l-4' : 'border-r-4'} border-[#154D92]`}>
                                        <span className="text-[#154D92] font-bold">Step {step.number}</span>
                                        <h3 className="text-xl font-bold text-[#154D92] mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                                        <button
                                            onClick={scrollToForm}
                                            className="bg-[#154D92] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0e3a6e] transition-colors"
                                        >
                                            Talk To Experts
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TripPlanningTimeline;

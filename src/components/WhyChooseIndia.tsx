import { Award, GraduationCap, Languages, Clock } from 'lucide-react';

const WhyChooseIndia = () => {
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

    const treatments = [
        { name: 'Cancer Surgery', saving: '60-70%' },
        { name: 'Chemotherapy', saving: '50-60%' },
        { name: 'Bone Marrow Transplant', saving: '70-80%' },
        { name: 'Radiation Therapy', saving: '50-60%' },
        { name: 'Immunotherapy', saving: '60-70%' },
        { name: 'CyberKnife', saving: '50-70%' }
    ];

    const benefits = [
        { icon: <Award className="w-5 h-5" />, title: 'JCI Accredited Hospitals' },
        { icon: <GraduationCap className="w-5 h-5" />, title: 'Internationally Trained Doctors' },
        { icon: <Languages className="w-5 h-5" />, title: 'Multilingual Staff' },
        { icon: <Clock className="w-5 h-5" />, title: 'No Waiting Time' }
    ];

    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-2">
                        Why Choose India for Cancer Treatment?
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm">
                        World-class cancer care at a fraction of Western costs
                    </p>
                </div>

                {/* Cost Savings Grid */}
                <div className="bg-white rounded-xl p-6 shadow-md mb-8 max-w-4xl mx-auto">
                    <h3 className="text-center font-semibold text-[#1a365d] mb-4">
                        Save 50-80% on Cancer Treatment Costs
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {treatments.map((treatment, index) => (
                            <div key={index} className="bg-[#FEF3E2] rounded-lg p-3 text-center">
                                <p className="text-sm text-gray-700 font-medium">{treatment.name}</p>
                                <p className="text-[#1a365d] font-bold text-lg">Save {treatment.saving}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 flex items-center gap-2 shadow-sm">
                            <div className="w-8 h-8 bg-[#1a365d] rounded-full flex items-center justify-center text-white flex-shrink-0">
                                {benefit.icon}
                            </div>
                            <span className="text-sm text-gray-700 font-medium">{benefit.title}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button
                        onClick={scrollToForm}
                        className="bg-[#1a365d] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#2c5282] transition-colors text-sm"
                    >
                        Get Free Cost Estimate
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseIndia;

import { FileText, CreditCard, Plane, Users, Home, HeartPulse, Stethoscope } from 'lucide-react';

const InternationalPatientServices = () => {
    const services = [
        {
            icon: <Stethoscope className="w-6 h-6" />,
            title: 'Pre-Medical Consultation'
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: 'Treatment Plan & Estimate'
        },
        {
            icon: <CreditCard className="w-6 h-6" />,
            title: 'Visa Assistance'
        },
        {
            icon: <Plane className="w-6 h-6" />,
            title: 'Airport Pickup & Drop'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Dedicated Coordinator'
        },
        {
            icon: <Home className="w-6 h-6" />,
            title: 'Accommodation'
        },
        {
            icon: <HeartPulse className="w-6 h-6" />,
            title: 'Post-Treatment Care'
        }
    ];

    return (
        <section className="py-10 bg-[#FEF3E2]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1a365d] mb-2">
                        Our Services for International Patients
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm">
                        Complete end-to-end support for your medical journey to India
                    </p>
                </div>

                {/* Mobile: 2 columns, Tablet: 3 columns, Desktop: 7 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center mx-auto mb-2 text-white">
                                {service.icon}
                            </div>
                            <h3 className="font-medium text-[#1a365d] text-xs lg:text-sm">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InternationalPatientServices;

import { Building2, Users, Globe, Heart } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        {
            icon: <Building2 className="w-6 h-6" />,
            number: '50+',
            description: 'Partner Hospitals'
        },
        {
            icon: <Users className="w-6 h-6" />,
            number: '1400+',
            description: 'Expert Doctors'
        },
        {
            icon: <Heart className="w-6 h-6" />,
            number: '2,00,000+',
            description: 'International Patients'
        },
        {
            icon: <Globe className="w-6 h-6" />,
            number: '140+',
            description: 'Countries Served'
        }
    ];

    return (
        <section className="py-8 bg-[#154D92]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center text-white"
                        >
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                                {stat.icon}
                            </div>
                            <div className="text-2xl lg:text-3xl font-bold mb-1">
                                {stat.number}
                            </div>
                            <p className="text-white/80 text-sm">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

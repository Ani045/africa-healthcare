import { useState } from 'react';
import { Cpu, Zap, ScanLine } from 'lucide-react';

interface Technology {
    id: string;
    name: string;
    icon: React.ReactNode;
    role: string;
    roboticsComponent: string;
    hasRobotics: boolean;
    image: string;
}

const TechnologySection = () => {
    const [activeTab, setActiveTab] = useState('davinci');

    const technologies: Technology[] = [
        {
            id: 'davinci',
            name: 'Da Vinci Robot',
            icon: <Cpu className="w-5 h-5" />,
            role: 'Robotic-assisted tumor removal',
            roboticsComponent: 'Yes — surgeon-controlled robotic system',
            hasRobotics: true,
            image: 'https://urologyaustin.com/wp-content/uploads/2018/04/iStock-511732538.jpg'

        },
        {
            id: 'ioert',
            name: 'IOeRT',
            icon: <Zap className="w-5 h-5" />,
            role: 'Precise intraoperative radiation',
            roboticsComponent: 'No, but highly advanced radiation delivery during surgery',
            hasRobotics: false,
            image: 'https://soiort.com/wp-content/uploads/2025/04/operazione13SalaOperatoria_ZOOM_w1_04_VRayCam002-1024x576-1.jpg'
        },
        {
            id: '3dimaging',
            name: '3D Imaging & IGRT',
            icon: <ScanLine className="w-5 h-5" />,
            role: 'Improves accuracy of diagnosis & treatment',
            roboticsComponent: 'Supports robotic planning',
            hasRobotics: true,
            image: 'data:image/jpeg;base64,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'
        }
    ];

    const activeTech = technologies.find(t => t.id === activeTab) || technologies[0];

    return (
        <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-[#FEF3E2]">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <div className="text-center mb-8 lg:mb-10">
                    <span className="inline-block bg-[#1a365d]/10 text-[#1a365d] px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                        Cutting-Edge Technology
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        Advanced Cancer Care <span className="text-[#1a365d]">Technology</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
                        State-of-the-art medical technology ensuring precision treatment
                    </p>
                </div>

                {/* MOBILE: Tab Navigation + Single Card View */}
                <div className="lg:hidden">
                    {/* Tab Pills */}
                    <div className="-mx-4 px-4 mb-5">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                            {technologies.map((tech) => (
                                <button
                                    key={tech.id}
                                    onClick={() => setActiveTab(tech.id)}
                                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === tech.id
                                        ? 'bg-[#F5A623] text-[#1a365d] shadow-lg'
                                        : 'bg-white text-gray-600 border border-gray-200'
                                        }`}
                                >
                                    {tech.icon}
                                    {tech.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Tech Card - Mobile */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                        {/* Image */}
                        <div className="relative h-48">
                            <img
                                src={activeTech.image}
                                alt={activeTech.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Badge */}
                            <div className="absolute top-3 left-3">
                                <span
                                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${activeTech.hasRobotics ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'
                                        }`}
                                >
                                    {activeTech.hasRobotics ? '✓ Robotics Enabled' : '⚡ Advanced Tech'}
                                </span>
                            </div>

                            {/* Name overlay */}
                            <div className="absolute bottom-3 left-4 right-4">
                                <h3 className="text-white font-bold text-xl drop-shadow-lg">{activeTech.name}</h3>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            {/* 2-Column Grid Info Cards */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-[#FEF3E2] rounded-xl p-3">
                                    <p className="text-[10px] text-[#1a365d] font-semibold uppercase tracking-wide mb-1">
                                        Role in Cancer Care
                                    </p>
                                    <p className="text-gray-800 font-medium text-xs leading-relaxed">
                                        {activeTech.role}
                                    </p>
                                </div>
                                <div className="bg-[#FEF3E2] rounded-xl p-3">
                                    <p className="text-[10px] text-[#1a365d] font-semibold uppercase tracking-wide mb-1">
                                        Robotics Component
                                    </p>
                                    <p className="text-gray-800 font-medium text-xs leading-relaxed">
                                        {activeTech.roboticsComponent}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DESKTOP: Show All 3 Cards Side by Side */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                    {technologies.map((tech) => (
                        <div
                            key={tech.id}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={tech.image}
                                    alt={tech.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                {/* Badge */}
                                <div className="absolute top-3 left-3">
                                    <span
                                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${tech.hasRobotics ? 'bg-green-500 text-white' : 'bg-amber-500 text-white'
                                            }`}
                                    >
                                        {tech.hasRobotics ? '✓ Robotics' : '⚡ Advanced'}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm p-2.5 rounded-lg">
                                    <div className="text-white">{tech.icon}</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{tech.name}</h3>

                                <div className="space-y-3">
                                    <div className="bg-[#FEF3E2] rounded-lg p-3">
                                        <p className="text-[10px] text-[#1a365d] font-semibold uppercase tracking-wide mb-1">
                                            Role in Cancer Care
                                        </p>
                                        <p className="text-gray-800 font-medium text-sm">
                                            {tech.role}
                                        </p>
                                    </div>
                                    <div className="bg-[#FEF3E2] rounded-lg p-3">
                                        <p className="text-[10px] text-[#1a365d] font-semibold uppercase tracking-wide mb-1">
                                            Robotics Component
                                        </p>
                                        <p className="text-gray-800 font-medium text-sm leading-relaxed">
                                            {tech.roboticsComponent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </section>
    );
};

export default TechnologySection;

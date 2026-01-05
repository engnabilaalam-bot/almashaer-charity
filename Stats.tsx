import React from 'react';
import { Users, Droplets, BookOpen, Home } from 'lucide-react';

const Stats: React.FC = () => {
    const stats = [
        { id: 1, name: 'مستفيد سنوياً', value: '+15,000', icon: Users },
        { id: 2, name: 'مشروع مياه (سقيا)', value: '120', icon: Droplets },
        { id: 3, name: 'يتيم مكفول', value: '850', icon: Home },
        { id: 4, name: 'طالب علم مدعوم', value: '2,400', icon: BookOpen },
    ];

    return (
        <div className="bg-brand-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        أرقام تحكي قصة العطاء
                    </h2>
                    <p className="mt-3 text-xl text-brand-100 sm:mt-4">
                        بفضل الله ثم بفضل تبرعاتكم عبر منصة غراس، استطعنا الوصول إلى آلاف المحتاجين في تعز.
                    </p>
                </div>
                <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col p-6 bg-brand-900/50 rounded-2xl border border-brand-700 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-brand-100 flex items-center justify-center gap-2">
                                {stat.name}
                            </dt>
                            <dd className="order-1 text-4xl font-extrabold text-white flex justify-center items-center gap-3 mb-2">
                                <stat.icon className="h-8 w-8 text-yemen-red opacity-80" />
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default Stats;

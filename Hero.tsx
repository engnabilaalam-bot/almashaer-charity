import React from 'react';
import { ArrowLeft, Sprout } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-white overflow-hidden" id="home">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    {/* Decorative shapes */}
                    <svg
                        className="hidden lg:block absolute top-0 left-0 inset-y-0 h-full w-48 text-white transform -translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-500 opacity-5 rounded-bl-full transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-yemen-black opacity-5 rounded-tr-full"></div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-right">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 border border-brand-200 mb-6 shadow-sm">
                                <Sprout className="h-4 w-4" />
                                <span className="text-sm font-bold">منصة غراس للخير والعطاء</span>
                            </div>
                            <h1 className="text-4xl tracking-tight font-extrabold text-yemen-black sm:text-5xl md:text-6xl mb-6">
                                <span className="block xl:inline">غراسنا في تعز</span>{' '}
                                <span className="block text-brand-600 xl:inline">يثمر حياةً وأملاً</span>
                            </h1>
                            <p className="mt-3 text-base text-slate-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium leading-relaxed">
                                في جمعية المشاعر، نغرس بذور الخير لنسقيها معاً بالصدقات. جسرٌ ممتد من العطاء يربط المحسنين بقلوب الأيتام والأسر المحتاجة بشفافية تامة عبر منصة غراس.
                            </p>
                            <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                                <div className="rounded-md shadow">
                                    <a
                                        href="https://gharas.cloud/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-brand-600 hover:bg-brand-700 md:py-4 md:text-lg md:px-10 transition-all transform hover:-translate-y-1"
                                    >
                                        اغرس خيراً (تبرع)
                                        <ArrowLeft className="mr-2 h-5 w-5" />
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="#about"
                                        className="w-full flex items-center justify-center px-8 py-3 border-2 border-brand-100 text-base font-bold rounded-md text-brand-700 bg-white hover:bg-brand-50 hover:border-brand-200 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        عن الجمعية
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 h-64 sm:h-72 md:h-96 lg:h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yemen-black/40 via-transparent to-transparent z-10"></div>
                <img
                    className="h-full w-full object-cover"
                    src="https://picsum.photos/seed/charity/800/600"
                    alt="Helping hands in Yemen"
                />
                {/* Overlay with brand green hint */}
                <div className="absolute inset-0 bg-brand-900 mix-blend-multiply opacity-20"></div>
            </div>
        </div>
    );
};

export default Hero;

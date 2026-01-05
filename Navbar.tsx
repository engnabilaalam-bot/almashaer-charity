import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'الرئيسية', href: '#home' },
        { name: 'عن الجمعية', href: '#about' },
        { name: 'مشاريعنا', href: '#projects' },
        { name: 'الهيكل التنظيمي', href: '#structure' },
        { name: 'تواصل معنا', href: '#contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 border-t-4 border-brand-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center gap-3">
                            {/* Dragon Blood Tree Logo (Socotra Symbol) - Flat Vector Style */}
                            <svg width="65" height="65" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* 1. The Trunk (Black - Yemen Flag) - Strong Foundation */}
                                <path d="M42 95 L58 95 L54 55 L46 55 Z" fill="#000000" />

                                {/* 2. The Canopy (Emerald Green) - Umbrella Shape of Dragon Blood Tree */}
                                <path d="M10 55 Q 50 5 90 55 Z" fill="#047857" /> {/* Emerald Dark */}
                                <path d="M10 55 Q 50 15 90 55" fill="#10B981" fillOpacity="0.9" /> {/* Emerald Light overlay for depth */}

                                {/* 3. The Branches as Hands (White Negative Space) */}
                                {/* Central Branch/Arm */}
                                <path d="M50 55 L50 35" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                {/* Left Branch/Arm */}
                                <path d="M48 55 Q 35 45 30 30" stroke="white" strokeWidth="4" strokeLinecap="round" />
                                {/* Right Branch/Arm */}
                                <path d="M52 55 Q 65 45 70 30" stroke="white" strokeWidth="4" strokeLinecap="round" />

                                {/* 4. The Heart/Fruit (Red - Yemen Flag) - Symbol of Care/Life */}
                                <path d="M50 40 C 45 35 40 40 40 45 C 40 50 50 55 50 55 C 50 55 60 50 60 45 C 60 40 55 35 50 40 Z" fill="#CE1126" stroke="white" strokeWidth="2" />

                                {/* 5. Clean Geometric Touch - Base Line */}
                                <rect x="35" y="92" width="30" height="3" rx="1.5" fill="#047857" />
                            </svg>

                            <div className="flex flex-col">
                                <span className="font-extrabold text-xl text-yemen-black tracking-tighter leading-none">جمعية المشاعر</span>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[10px] text-brand-700 font-bold tracking-[0.2em] uppercase">Al-Mashaer</span>
                                    {/* Tiny Flag Icon */}
                                    <div className="flex flex-col w-4 h-2.5 shadow-sm border border-slate-100">
                                        <div className="h-1/3 w-full bg-yemen-red"></div>
                                        <div className="h-1/3 w-full bg-white"></div>
                                        <div className="h-1/3 w-full bg-black"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:ml-8 md:flex md:space-x-6 md:space-x-reverse mr-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-bold transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="https://gharas.cloud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-200 transform hover:-translate-y-0.5 border-b-4 border-brand-800"
                        >
                            <span>تبرع عبر غراس</span>
                            <ExternalLink className="h-4 w-4" />
                        </a>
                        <div className="-ml-2 flex items-center md:hidden mr-4">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-brand-600 hover:bg-slate-100 focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block pl-3 pr-4 py-2 border-r-4 border-transparent text-base font-medium text-slate-600 hover:bg-slate-50 hover:border-brand-600 hover:text-brand-600"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://gharas.cloud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 block w-full text-center bg-brand-600 text-white px-4 py-3 rounded-md font-bold hover:bg-brand-700"
                        >
                            تبرع الآن
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

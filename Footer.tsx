import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-yemen-black text-white pt-16 pb-8 border-t-8 border-brand-500" id="footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Column 1 */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            {/* Footer Logo Version - Adjusted for Dark Background */}
                            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Trunk - White for visibility on dark footer */}
                                <path d="M42 95 L58 95 L54 55 L46 55 Z" fill="#FFFFFF" />

                                {/* Canopy - Bright Emerald */}
                                <path d="M10 55 Q 50 5 90 55 Z" fill="#047857" />
                                <path d="M10 55 Q 50 15 90 55" fill="#34D399" fillOpacity="0.9" />

                                {/* Branches - Darker Green to cut through the bright canopy */}
                                <path d="M50 55 L50 35" stroke="#064E3B" strokeWidth="4" strokeLinecap="round" />
                                <path d="M48 55 Q 35 45 30 30" stroke="#064E3B" strokeWidth="4" strokeLinecap="round" />
                                <path d="M52 55 Q 65 45 70 30" stroke="#064E3B" strokeWidth="4" strokeLinecap="round" />

                                {/* Heart - Red (Yemen Flag) */}
                                <path d="M50 40 C 45 35 40 40 40 45 C 40 50 50 55 50 55 C 50 55 60 50 60 45 C 60 40 55 35 50 40 Z" fill="#CE1126" stroke="#FFFFFF" strokeWidth="2" />

                                {/* Base Line */}
                                <rect x="35" y="92" width="30" height="3" rx="1.5" fill="#34D399" />
                            </svg>
                            <span className="font-bold text-2xl tracking-tighter">جمعية المشاعر</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-loose mb-4">
                            جمعية المشاعر الخيرية، مؤسسة يمنية رائدة في محافظة تعز. نعمل بروح الفريق الواحد تحت شعار "غراس الخير"، لنصل بالتبرعات إلى مستحقيها بأعلى معايير الشفافية والأمانة.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-500 relative inline-block">
                            روابط سريعة
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3 text-slate-300 text-sm">
                            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">الرئيسية</a></li>
                            <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all inline-block">من نحن (غراس)</a></li>
                            <li><a href="#structure" className="hover:text-white hover:translate-x-1 transition-all inline-block">الهيكل التنظيمي</a></li>
                            <li><a href="https://gharas.cloud/" target="_blank" className="hover:text-brand-400 hover:translate-x-1 transition-all inline-block font-bold">منصة التبرعات</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-500 relative inline-block">
                            تواصل معنا
                            <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-brand-500 rounded-full"></span>
                        </h3>
                        <ul className="space-y-5 text-slate-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-brand-500 mt-1" />
                                <span>الجمهورية اليمنية - تعز<br /><span className="text-xs text-slate-500">شارع جمال - جوار المبنى الإداري</span></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-brand-500" />
                                <span dir="ltr" className="hover:text-white transition-colors">+967 770 000 000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-brand-500" />
                                <span className="hover:text-white transition-colors">info@almashaer.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} جمعية المشاعر الخيرية - تعز. جميع الحقوق محفوظة.</p>
                    <div className="flex gap-2 mt-4 md:mt-0">
                        <div className="h-2 w-8 bg-yemen-red rounded-full"></div>
                        <div className="h-2 w-8 bg-white rounded-full"></div>
                        <div className="h-2 w-8 bg-black border border-slate-700 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

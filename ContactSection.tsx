import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <div className="bg-slate-50 py-16 border-t border-slate-200" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-yemen-black sm:text-4xl">
                        تواصل معنا
                    </h2>
                    <p className="mt-4 text-lg text-slate-500">
                        نسعد باستقبال استفساراتكم واقتراحاتكم. فريقنا جاهز للرد عليكم.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map Placeholder */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 border-b pb-4">بيانات الاتصال</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">المقر الرئيسي</p>
                                        <p className="text-slate-600 mt-1">الجمهورية اليمنية، محافظة تعز، شارع جمال، جوار المبنى الإداري.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">الهاتف</p>
                                        <p className="text-slate-600 mt-1" dir="ltr">+967 770 000 000</p>
                                        <p className="text-slate-500 text-sm">متاح من 8 صباحاً حتى 8 مساءً</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">البريد الإلكتروني</p>
                                        <p className="text-slate-600 mt-1">info@almashaer.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Illustration */}
                        <div className="bg-brand-50 rounded-2xl h-64 flex items-center justify-center border-2 border-dashed border-brand-200 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Taiz_in_Yemen.svg/1200px-Taiz_in_Yemen.svg.png')] bg-center bg-cover bg-no-repeat"></div>
                            <div className="text-center z-10">
                                <MapPin className="h-10 w-10 text-brand-600 mx-auto mb-2" />
                                <span className="text-brand-800 font-bold">خريطة الموقع (تعز)</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl shadow-lg border-t-4 border-brand-500 p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">أرسل رسالة</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="محمد أحمد" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="77xxxxxxx" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">البريد الإلكتروني</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">الموضوع</label>
                                <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all">
                                    <option>استفسار عام</option>
                                    <option>رغبة في التطوع</option>
                                    <option>شراكة / رعاية</option>
                                    <option>شكوى أو اقتراح</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">الرسالة</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all" placeholder="اكتب رسالتك هنا..."></textarea>
                            </div>
                            <button type="submit" className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all shadow-md hover:shadow-lg">
                                <span>إرسال الرسالة</span>
                                <Send className="mr-2 h-5 w-5 transform rotate-180" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;

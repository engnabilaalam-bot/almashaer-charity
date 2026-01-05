import React from 'react';
import { Target, Eye, HeartHandshake, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            name: 'رؤيتنا',
            description: 'الريادة في العمل الإنساني والتنموي لبناء مجتمع منتج ومتكافل في محافظة تعز وعموم اليمن.',
            icon: Eye,
        },
        {
            name: 'رسالتنا',
            description: 'تقديم خدمات إنسانية وتنموية متميزة للفئات الأشد احتياجاً بشفافية عالية وشراكة مجتمعية فاعلة.',
            icon: Target,
        },
        {
            name: 'قيمنا',
            description: 'الإنسانية، الشفافية، العدالة، الإتقان، والتعاون. نحن نؤمن بأن الثقة هي أساس العمل الخيري.',
            icon: HeartHandshake,
        },
        {
            name: 'الشفافية',
            description: 'نعمل تحت إشراف وزارة الشؤون الاجتماعية وتخضع حساباتنا لتدقيق مالي دوري لضمان وصول الأمانات.',
            icon: ShieldCheck,
        },
    ];

    return (
        <div className="py-12 bg-slate-50" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">عن الجمعية</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        نزرع الأمل.. نحصد الخير
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
                        تأسست جمعية المشاعر لتكون عوناً وسنداً، وتعمل كمنظومة متكاملة لخدمة المجتمع المحلي بمحافظة تعز في ظل الظروف الراهنة.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="mr-16 text-lg leading-6 font-medium text-slate-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 mr-16 text-base text-slate-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

            </div>
        </div>
    );
};

export default About;

import React from 'react';
import { ArrowLeft, Droplets, Utensils, GraduationCap, HeartPulse, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'سقيا الماء',
            description: 'حفر الآبار وتوفير خزانات المياه للأحياء المتضررة والتي تعاني من شح المياه في تعز.',
            icon: Droplets,
            color: 'bg-blue-50 text-blue-600 border-blue-200',
            btnColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            title: 'السلة الغذائية',
            description: 'توفير الاحتياجات الغذائية الأساسية للأسر المتعففة والنازحة لسد جوعهم وحفظ كرامتهم.',
            icon: Utensils,
            color: 'bg-amber-50 text-amber-600 border-amber-200',
            btnColor: 'bg-amber-600 hover:bg-amber-700'
        },
        {
            title: 'دعم التعليم',
            description: 'توزيع الحقائب المدرسية وكفالة طلاب العلم لضمان مستقبل مشرق لجيل الغد.',
            icon: GraduationCap,
            color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
            btnColor: 'bg-emerald-600 hover:bg-emerald-700'
        },
        {
            title: 'الرعاية الصحية',
            description: 'دعم العمليات الجراحية وتوفير الأدوية للمرضى غير القادرين على تحمل تكاليف العلاج.',
            icon: HeartPulse,
            color: 'bg-rose-50 text-rose-600 border-rose-200',
            btnColor: 'bg-rose-600 hover:bg-rose-700'
        }
    ];

    return (
        <div className="bg-white py-16" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base text-brand-600 font-bold tracking-wide uppercase">مشاريعنا</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yemen-black sm:text-4xl">
                        أبواب الخير مفتوحة
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                        نقدم حزمة متكاملة من المشاريع التنموية والإغاثية التي يمكنكم المساهمة فيها مباشرة عبر منصة غراس.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, index) => (
                        <div key={index} className="relative group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className={`p-6 ${project.color} border-b-2 flex justify-center items-center h-32`}>
                                <project.icon className="h-16 w-16 opacity-90 transform group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="https://gharas.cloud/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${project.btnColor} transition-colors gap-2`}
                                    >
                                        <span>ساهم الآن</span>
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://gharas.cloud/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-brand-700 bg-brand-100 hover:bg-brand-200 md:text-lg transition-colors"
                    >
                        استعرض جميع المشاريع في غراس
                        <ArrowLeft className="mr-2 h-5 w-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;

import React from 'react';
import { Users, Briefcase, UserCheck, Heart, Coins, Megaphone, Monitor, HandHeart, Flower, Gem } from 'lucide-react';

interface OrgNodeProps {
    title: string;
    icon?: React.ElementType;
    colorClass: string; // Tailwind bg color class
    textColorClass?: string;
    borderColorClass?: string;
    className?: string;
}

const OrgNode: React.FC<OrgNodeProps> = ({ title, icon: Icon, colorClass, textColorClass = "text-slate-800", borderColorClass = "border-slate-200", className = "" }) => (
    <div className={`flex flex-col items-center justify-center p-3 md:p-4 rounded-xl shadow-md border-b-4 ${colorClass} ${borderColorClass} ${className} transition-transform hover:-translate-y-1 bg-white min-w-[140px] md:min-w-[180px] text-center z-10 relative`}>
        {Icon && <Icon className={`h-6 w-6 mb-2 ${textColorClass} opacity-80`} />}
        <span className={`font-bold text-sm md:text-base leading-tight ${textColorClass}`}>{title}</span>
    </div>
);

const CommitteeNode: React.FC<{ title: string }> = ({ title }) => (
    <div className="bg-lime-50 border border-lime-200 text-lime-800 px-4 py-2 rounded-lg shadow-sm text-xs md:text-sm font-bold text-center w-full hover:bg-lime-100 transition-colors">
        {title}
    </div>
);

const OrgStructure: React.FC = () => {
    return (
        <div className="bg-slate-50 py-16 overflow-hidden" id="structure">
            <div className="max-w-[98%] xl:max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-base text-brand-600 font-bold tracking-wide uppercase">الهيكل الإداري</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yemen-black sm:text-4xl">
                        الهيكل التنظيمي للجمعية
                    </p>
                </div>

                {/* Chart Container - Horizontal Scroll for mobile */}
                <div className="w-full overflow-x-auto pb-12 custom-scrollbar">
                    <div className="min-w-[1024px] flex flex-col items-center pt-8 px-4">

                        {/* LEVEL 1: General Assembly */}
                        <div className="flex flex-col items-center relative">
                            <OrgNode
                                title="الجمعية العمومية"
                                icon={Users}
                                colorClass="bg-blue-100"
                                borderColorClass="border-blue-400"
                                textColorClass="text-blue-900"
                                className="w-64 !text-lg"
                            />
                            {/* Connector Down */}
                            <div className="h-10 w-0.5 bg-slate-400"></div>
                        </div>

                        {/* LEVEL 2: Board & Committees */}
                        <div className="flex justify-center items-start gap-8 w-full relative">

                            {/* Left Wing Committees */}
                            <div className="flex flex-col gap-4 mt-8 w-64">
                                <div className="relative">
                                    <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-slate-400"></div> {/* Connector to center line */}
                                    <CommitteeNode title="لجنة التوظيف" />
                                </div>
                                <div className="relative">
                                    <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-slate-400"></div> {/* Connector to center line */}
                                    <CommitteeNode title="لجنة شؤون المستفيدين" />
                                </div>
                            </div>

                            {/* Center: Board of Directors */}
                            <div className="flex flex-col items-center relative -mt-4">
                                {/* Cross line for committees */}
                                <div className="absolute top-12 w-[calc(100%+16rem)] h-0.5 bg-slate-400 -z-10"></div>
                                {/* Vertical line through board */}
                                <div className="absolute top-0 bottom-[-3rem] w-0.5 bg-slate-400 -z-10"></div>

                                <OrgNode
                                    title="مجلس الإدارة"
                                    icon={UserCheck}
                                    colorClass="bg-blue-200"
                                    borderColorClass="border-blue-500"
                                    textColorClass="text-blue-900"
                                    className="w-64 !text-lg"
                                />
                            </div>

                            {/* Right Wing Committees */}
                            <div className="flex flex-col gap-4 mt-8 w-64">
                                <div className="relative">
                                    <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-slate-400"></div>
                                    <CommitteeNode title="لجنة الشؤون الإدارية والمالية" />
                                </div>
                                <div className="relative">
                                    <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-slate-400"></div>
                                    <CommitteeNode title="لجنة الاستثمار والأوقاف" />
                                </div>
                            </div>
                        </div>

                        {/* Connector Space */}
                        <div className="h-12 w-0.5 bg-slate-400"></div>

                        {/* LEVEL 3: Executive Director */}
                        <div className="flex flex-col items-center relative mb-8">
                            <OrgNode
                                title="المدير التنفيذي"
                                icon={Briefcase}
                                colorClass="bg-blue-100"
                                borderColorClass="border-blue-400"
                                textColorClass="text-blue-900"
                                className="w-64 !text-lg"
                            />
                            {/* Main Vertical Line to Departments */}
                            <div className="h-10 w-0.5 bg-slate-400"></div>
                        </div>

                        {/* LEVEL 4: Departments */}
                        <div className="relative w-full">
                            {/* Horizontal Distribution Line */}
                            <div className="absolute top-0 left-[4%] right-[4%] h-0.5 bg-slate-400"></div>

                            {/* Grid of Departments */}
                            <div className="flex justify-between items-start pt-6 gap-2 w-full">

                                {/* 1. Women's Section (Pink) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="القسم النسائي"
                                        colorClass="bg-pink-50"
                                        borderColorClass="border-pink-400"
                                        textColorClass="text-pink-900"
                                        icon={Flower}
                                    />
                                </div>

                                {/* 2. Volunteering Unit (Grey) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="وحدة التطوع"
                                        colorClass="bg-gray-100"
                                        borderColorClass="border-gray-500"
                                        textColorClass="text-gray-800"
                                        icon={HandHeart}
                                    />
                                </div>

                                {/* 3. Financial Affairs (Blue) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="قسم الشؤون المالية"
                                        colorClass="bg-blue-50"
                                        borderColorClass="border-blue-400"
                                        textColorClass="text-blue-900"
                                        icon={Coins}
                                    />
                                </div>

                                {/* 4. PR & Media (Orange) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="قسم العلاقات العامة والإعلام"
                                        colorClass="bg-orange-50"
                                        borderColorClass="border-orange-400"
                                        textColorClass="text-orange-900"
                                        icon={Megaphone}
                                    />
                                </div>

                                {/* 5. Social Care (Purple) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="قسم الرعاية الاجتماعية"
                                        colorClass="bg-purple-50"
                                        borderColorClass="border-purple-400"
                                        textColorClass="text-purple-900"
                                        icon={Heart}
                                    />
                                </div>

                                {/* 6. Resource Dev (Lime/Green) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="قسم تنمية الموارد المالية"
                                        colorClass="bg-lime-50"
                                        borderColorClass="border-lime-500"
                                        textColorClass="text-lime-900"
                                        icon={Gem}
                                    />
                                </div>

                                {/* 7. HR (Cyan) */}
                                <div className="flex flex-col items-center flex-1 relative">
                                    <div className="absolute -top-6 h-6 w-0.5 bg-slate-400"></div>
                                    <OrgNode
                                        title="قسم الموارد البشرية"
                                        colorClass="bg-cyan-50"
                                        borderColorClass="border-cyan-500"
                                        textColorClass="text-cyan-900"
                                        icon={Monitor}
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgStructure;

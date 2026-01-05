import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import OrgStructure from './components/OrgStructure';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-right" dir="rtl">
            <Navbar />
            <div className="flex-grow">
                <Hero />
                <Stats />
                <About />
                <OrgStructure />
                <Projects />
                <ContactSection />
            </div>
            <Assistant />
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default App;

import '../styles/landing.css'

import images from '../utils/imports';

import Web from '../sections/Web';
import Hero from '../sections/Hero'
import Footer from '../components/Footer';
import Process from '../sections/Process';
import Marquee from '../components/Marquee';
import OnboardingOne from '../sections/OnboardingOne';
import PartnersClients from '../components/PartnersClients';
import Graphics from '../sections/Graphics';
import ContactSection from '../sections/ContactSection';
import SecuritySection from '@/sections/SecuritySection';

function Landing () {

    return (<>
        <Hero />
        <main>
            <OnboardingOne />
            <Process />
            <section id="promo30">
                <div className="promo30-container">
                    <div className="spot-backdrop"></div>
                    <h1 className="site-heading">
                        30% off all software &<br />
                        Web services <span>for a year</span>
                    </h1>
                    <div className="promo-actions">
                        <p className="site-p">
                            Book a call with an expert today
                            to find out how you can get 30% off any 
                            software or web development project
                        </p>
                        <button className="site-btn primary">Book a call</button>
                    </div>
                </div>
            </section>
            <Web />
            <Graphics />
            <div id="choose-us">
                <div className="choose-container">
                    <div className="choose-block">
                        <h3 className="site-heading">
                            Integrated Solutions
                        </h3>
                        <p className="site-p">
                            We connect software, business systems, and digital 
                            tools into a synchronized ecosystem that simplifies 
                            workflows and improves operational efficiency.
                        </p>
                    </div>
                    <div className="choose-block">
                        <h3 className="site-heading">
                            Cost-Effective Technology
                        </h3>
                        <p className="site-p">
                            Access professional web development, software engineering, 
                            and IT solutions designed to deliver value without 
                            unnecessary costs or expensive enterprise overheads.
                        </p>
                    </div>
                    <div className="choose-block">
                        <h3 className="site-heading">
                            Tailored to Your Business
                        </h3>
                        <p className="site-p">
                            From custom software development to corporate identity design, 
                            every solution is built around your business objectives, 
                            operational needs, and long-term growth.
                        </p>
                    </div>
                    <div className="choose-block">
                        <h3 className="site-heading">
                            End-to-End Support
                        </h3>
                        <p className="site-p">
                            From initial concept and development to implementation and 
                            ongoing maintenance, Ethernode provides technical 
                            support throughout your digital journey.
                        </p>
                    </div>
                </div>
            </div>
            <SecuritySection />
            <ContactSection />
        </main>
        <Footer />
    </>)
}

export default Landing;
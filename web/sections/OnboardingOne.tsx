import Image from 'next/image';
import images from '../utils/imports';

export default function OnboardingOne() {

    return (
        <section id="onboarding-one">
            <div className="onboarding-one-container">
                <div className="onboarding-image">
                    <Image src={images.onboardingOne} alt='' />
                </div>
                <div className="text-content">
                    <h2 className="site-heading">
                        Engineers, Developers, & Technicians, <br />
                        All for the price of <span className='secondary-fg'>one employee</span>
                    </h2>
                    <p className="site-p">
                        Get a dedicated team of engineers, software developers, and technicians
                        on a single flexible plan. Scale your projects, cut hiring costs, and
                        access expert technical support without the overhead of a full in-house team.
                    </p>
                    <div className="onboarding-one-actions">
                        <button className="site-btn primary">
                            Book a Call
                        </button>
                        <button className="site-btn secondary">
                            Our Solutions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
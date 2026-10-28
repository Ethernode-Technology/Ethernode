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
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sunt soluta commodi et! Impedit asperiores perferendis 
                        cumque veniam ullam odio voluptates.
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
import '../styles/web.css'
import Image from 'next/image'
import images from '../utils/imports'
import Link from 'next/link'

export default function Web () {

    return (
        <section id="web">
            <div className="web-container">
                <div className="text-content">
                    <h2 className="site-heading main">
                        <span className="subtext">Web Development</span>
                        90% of potential clients will look <br className='no-mobile'/> 
                        your business up online before <br className='no-mobile'/>
                        making any purchase from you...<br />
                        <span>Web Presence is Everything</span>
                    </h2>
                    <p className="site-p">
                        Ethernode's web development and web design 
                        services help your business build a professional 
                        online presence that is visible, accessible, 
                        and ready to reach your current and future customers.
                    </p>
                    <div className="actions">
                        <button className="site-btn primary">
                            Book a Call
                        </button>
                        <Link href="" className="site-link">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="web-cards">
                    <div className="web-card">
                        <div className="img">
                            <Image src={images.web1} alt="" fill/>
                        </div>
                        <div className="text">
                            <h4 className="site-p">
                                Web Visibility
                                <hr />
                            </h4>
                            <p className="site-p">
                                <span>Make your business easier to find. </span>
                                Ethernode helps your business improve 
                                its online visibility through SEO-focused 
                                web design, search-friendly content, 
                                and accessible websites built to be 
                                discovered by your current and future customers.
                            </p>
                        </div>
                    </div>
                    <div className="web-card">
                        <div className="img">
                            <Image src={images.web2} alt="" fill/>
                        </div>
                        <div className="text">
                            <h4 className="site-p">
                                Web Optimization
                                <hr />
                            </h4>
                            <p className="site-p">
                                <span>A well-built site ranks higher on Google. </span>
                                Ethernode optimizes your website for speed, 
                                performance, accessibility, and user experience, 
                                creating a responsive digital presence that 
                                works seamlessly across devices and keeps 
                                your customers engaged.
                            </p>
                        </div>
                    </div>
                    <div className="web-card">
                        <div className="img">
                            <Image src={images.web3} alt="" fill/>
                        </div>
                        <div className="text">
                            <h4 className="site-p">
                                Visualized Growth
                                <hr />
                            </h4>
                            <p className="site-p">
                                <span>No more guessing if your business is growing. </span>
                                Ethernode turns your digital presence into a measurable 
                                growth platform, combining strategic web design, analytics, 
                                and user-focused experiences to help your business attract, 
                                engage, and convert more customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
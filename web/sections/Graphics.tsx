import Image from 'next/image'
import images from '../utils/imports'
import '../styles/graphics.css'

export default function Graphics () {

    return (
        <section id="graphics">
            <div className="graphics-container">
                <div className="graphics-header">
                    <h2 className="site-heading">
                        <span className="subtext">Graphic Design</span>
                        Good Graphic Design & Corporate Identity<br />makes for a <span>memorable brand.</span>
                    </h2>
                    <p className="site-p">
                        Your brand is more than a logo. Ethernode's graphic design 
                        and corporate identity services create a consistent visual 
                        identity across your website, marketing materials, social 
                        media, and business communications, ensuring your brand looks 
                        professional, recognizable, and credible wherever your 
                        customers encounter it.
                    </p>
                </div>
                <div className="graphics-cards">
                    <div className="graphics-card">
                        <Image src={images.graphics1} alt="" fill />
                    </div>
                    <div className="graphics-card">
                        <Image src={images.graphics2} alt="" fill />
                    </div>
                    <div className="graphics-card">
                        <Image src={images.graphics3} alt="" fill />
                    </div>
                </div>
            </div>
        </section>
    )
}
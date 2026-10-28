import '../styles/hero.css'
import Image from 'next/image';
import images from '../utils/imports'

import Nav from "../components/Nav";

export default function Hero() {

    return (
        <header id="hero" data-bg="#141414">            
            <Nav />
            <div className="header-content">
                <h1 className="site-heading">
                    The IT Department<br />That
                    <span> Never Sleeps</span>
                </h1>
                <p className="site-p">
                    An entire floor of expertly trained technicians & developers<br />
                    <span> at your beck and call</span>
                </p>
                <div className="header-actions">
                    <button className="site-btn primary">Book a Call</button>
                </div>
            </div>
            <div className="header-img">
                <Image src={images.heroImage} alt="" loading='eager' />
            </div>
        </header>
    )
}
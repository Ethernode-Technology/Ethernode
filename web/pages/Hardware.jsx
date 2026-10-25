import Nav from "../components/Nav"
import Footer from '../components/Footer';
import '../styles/hardware.css'

export default function Hardware () {

    return (<>
        <section id="hardware">
            <div className="hero">
                <div className="hero-container">
                    <Nav />
                    <h1 className="site-heading">
                        Hardware
                        <span> solutions</span>
                    </h1>
                </div>
            </div>
            <Footer />
        </section>
    </>)
}
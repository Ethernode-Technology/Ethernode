import Nav from "../components/Nav"
import Footer from '../components/Footer';
import '../styles/design.css'

export default function Design () {

    return (<>
        <section id="design">
            <div className="hero">
                <div className="hero-container">
                    <Nav />
                    <h1 className="site-heading">
                        Design
                        <span> solutions</span>
                    </h1>
                </div>
            </div>
            <Footer />
        </section>
    </>)
}
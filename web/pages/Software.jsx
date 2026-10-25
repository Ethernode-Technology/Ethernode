import Nav from "../components/Nav"
import Footer from '../components/Footer';
import '../styles/software.css'

export default function Software () {

    return (<>
        <section id="software">
            <div className="hero">
                <div className="hero-container">
                    <Nav />
                    <h1 className="site-heading">
                        Software
                        <span> solutions</span>
                    </h1>
                </div>
            </div>
            <Footer />
        </section>
    </>)
}
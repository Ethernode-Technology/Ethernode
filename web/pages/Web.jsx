import Nav from "../components/Nav"
import Footer from '../components/Footer';
import '../styles/web-page.css'

export default function Web () {

    return (<>
        <section id="web">
            <div className="hero">
                <div className="hero-container">
                    <Nav />
                    <h1 className="site-heading">
                        Web Development
                    </h1>
                </div>
            </div>
            <Footer />
        </section>
    </>)
}
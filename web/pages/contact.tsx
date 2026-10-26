import Nav from "../components/Nav"
import Footer from '../components/Footer';
import ContactSection from "../sections/ContactSection"

export default function Contact () {

    return (<>
        <section id="contact">
            <div className="hero">
                <Nav />
                <h1 className="site-heading">Contact</h1>
            </div>
            <ContactSection />
            <Footer />
        </section>
    </>)
}

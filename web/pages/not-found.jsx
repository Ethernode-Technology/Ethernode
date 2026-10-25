import '../styles/global.css'
import Link from 'next/link'
import inlineLogo from '../assets/brand/logo-textless.svg'

function NotFound() {

    return (<section id='not-found'>
        <h1 className="site-heading">
            <img src={inlineLogo.src} alt="" />
            <span>404 </span>Not Found
        </h1>
        <p className='site-p'>The page you're looking for doesn't exist.</p>
        <Link type="submit" className='site-btn secondary' href={'/'}>Let's get you back into bed, grandpa</Link>
    </section>)
}

export default NotFound
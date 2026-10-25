import Image from 'next/image'
import logoTextless from '../assets/brand/logo-textless.svg'

function PartnersClients () {

    return (
        <section id="partners-clients">
            <div className="partners-clients-container">
                <h1 className="site-heading">
                    <Image src={logoTextless} alt="" fill/>
                    Our Clients & Partners
                </h1>
                <div className="partners-clients-logos">

                </div>
            </div>
        </section>
    )
}

export default PartnersClients
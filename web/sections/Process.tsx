import '../styles/process.css'
import Image from 'next/image'
import images from '../utils/imports'

export default function Process() {

    return (
        <section id="process">
            <div className="process-container">
                <div className="text-content">
                    <h1 className="site-heading main">
                        <span>Intelligent infrastructure monitoring</span>
                        We see problems before you do.
                    </h1>

                    <p className="site-p process-desc">
                        Your website, servers, and digital infrastructure should be
                        working around the clock. Ethernode provides 24/7 uptime,
                        performance, and infrastructure monitoring to detect
                        anomalies, identify downtime, and respond to technical
                        issues before they become costly disruptions.
                    </p>

                    <div className="process-steps">
                        <div className="step">
                            <h3 className="site-heading">
                                <span>1</span>
                                24/7 System Monitoring
                            </h3>

                            <p className="site-p">
                                We continuously monitor your websites, servers,
                                networks, and critical infrastructure for downtime,
                                performance degradation, connectivity issues, and
                                unusual system behaviour.
                            </p>
                        </div>

                        <div className="step">
                            <h3 className="site-heading">
                                <span>2</span>
                                Intelligent Downtime Detection
                            </h3>

                            <p className="site-p">
                                <span>Connected, no internet?</span> our monitoring systems detect
                                the disruption in seconds, identify the affected
                                service, and provide the information needed to
                                diagnose the root cause quickly.
                            </p>
                        </div>

                        <div className="step">
                            <h3 className="site-heading">
                                <span>3</span>
                                Rapid Incident Response
                            </h3>

                            <p className="site-p">
                                We respond to technical incidents quickly to restore
                                service and minimise downtime. When remote
                                intervention isn't enough, our technical team can
                                escalate the issue for hands-on support and
                                resolution.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="process-img">
                    <Image
                        src={images.processDashboard3}
                        alt="Ethernode infrastructure and website performance monitoring dashboard"
                    />
                </div>
            </div>
        </section>

    )
}
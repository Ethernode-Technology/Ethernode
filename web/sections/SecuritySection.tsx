"use client"

import '../styles/security.css'
import images from '@/utils/imports'
import { Badge } from "@/components/ui/badge"
import { useState } from 'react'

export default function SecuritySection () {

    const sidebarOptions = [
        {
            id: 1,
            title: 'Indoor Camera Systems',
            description: 'Not every loss has to come out of your pocket, with indoor security cameras designed to improve accountability and reduce losses.',
            image: images.security1
        },
        {
            id: 2,
            title: 'Wireless Camera Systems',
            description: 'Wireless & Portable Surveillance for events, festivals and pop-up shops, with remote monitoring and recorded footage for later review.',
            image: images.security2
        },
        {
            id: 3,
            title: 'Smart Inventory Tracking',
            description: 'Use RFID chips and readers to track stock movements, detect tagged products and strengthen inventory control.',
            image: images.security3
        },
    ]
    
    const [activePanel, setActivePanel] = useState(sidebarOptions[0])
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if(count < sidebarOptions.length) {
    //         console.log(count)
    //         setTimeout(() => {
    //             setCount(prev => count+1)
    //         }, 5000)
    //         setActivePanel(sidebarOptions[count])
    //     } else {
    //         setCount(0)
    //     }
    // }, [count])

    return (
        <section id="security-section">
            <div className="security-container">
                <aside className="security-sidebar">
                    <div className="header">
                        <Badge variant="outline" className='site-badge'>Surveillance & Loss Prevention</Badge>
                        <h1 className="site-heading">
                            Keep an Eye on What Matters.
                            Loss Prevention... <span>Covered.</span>
                        </h1>
                        <p className="site-p">
                            Flexible surveillance solutions for events, vendors and temporary retail spaces.
                            Monitor activity in real time and review recorded footage after the fact.
                        </p>
                    </div>
                    <ul className="sidebar-options">
                        {sidebarOptions.map((sidebarOption, idx) => (
                            <li key={idx} className={`sidebar-option ${activePanel.id === idx+1 ? 'active' : ''}`} onClick={() => setActivePanel(sidebarOptions[idx])}>
                                <span>{sidebarOption.id}</span>
                                {sidebarOption.title}
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className="security-carousel">
                    <img src={activePanel.image.src} alt="" />
                    <div className="carousel-backdrop"></div>
                    <div className="panel-content">
                        <p className="site-p">
                            {activePanel.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
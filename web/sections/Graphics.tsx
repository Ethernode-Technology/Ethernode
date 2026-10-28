"use client"

import Image from 'next/image'
import images from '../utils/imports'
import '../styles/graphics.css'
import { useEffect, useRef } from 'react'

export default function Graphics () {
    const runwayRef = useRef<HTMLDivElement>(null)
    const pinRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const runway = runwayRef.current
        const pin = pinRef.current
        const cards = cardsRef.current

        if (!runway || !pin || !cards) return

        const mobileQuery = window.matchMedia('(max-width: 480px)')
        const rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
        let horizontalDistance = 0
        let startScroll = 0
        let frame = 0

        const updateScroll = () => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => {
                if (!mobileQuery.matches || horizontalDistance <= 0) return

                const progress = Math.min(
                    Math.max((window.scrollY - startScroll) / horizontalDistance, 0),
                    1
                )

                cards.scrollLeft = horizontalDistance * progress
            })
        }

        const measureGallery = () => {
            if (!mobileQuery.matches) {
                horizontalDistance = 0
                runway.style.removeProperty('height')
                pin.style.removeProperty('top')
                cards.scrollLeft = 0
                return
            }

            const viewportHeight = document.documentElement.clientHeight
            const pinHeight = pin.getBoundingClientRect().height
            horizontalDistance = Math.max(cards.scrollWidth - cards.clientWidth, 0)

            const pinTop = viewportHeight - rem - pinHeight
            const runwayTop = runway.getBoundingClientRect().top + window.scrollY
            startScroll = runwayTop - pinTop

            runway.style.height = `${pinHeight + horizontalDistance}px`
            pin.style.top = `${pinTop}px`
            updateScroll()
        }

        const resizeObserver = new ResizeObserver(measureGallery)
        resizeObserver.observe(pin)
        resizeObserver.observe(cards)
        window.addEventListener('scroll', updateScroll, { passive: true })
        window.addEventListener('resize', measureGallery)
        mobileQuery.addEventListener('change', measureGallery)
        measureGallery()

        return () => {
            cancelAnimationFrame(frame)
            resizeObserver.disconnect()
            window.removeEventListener('scroll', updateScroll)
            window.removeEventListener('resize', measureGallery)
            mobileQuery.removeEventListener('change', measureGallery)
        }
    }, [])

    return (
        <section id="graphics">
            <div className="graphics-container">
                <div className="graphics-runway" ref={runwayRef}>
                    <div className="graphics-pin" ref={pinRef}>
                        <div className="graphics-header">
                            <h2 className="site-heading">
                                <span className="subtext">Graphic Design</span>
                                Good Graphic Design & Corporate Identity<br />makes for a <span>memorable brand.</span>
                            </h2>
                            <p className="site-p">
                                Your brand is more than a logo. Ethernode's graphic design
                                and corporate identity services create a consistent visual
                                identity across your website, marketing materials, social
                                media, and business communications, ensuring your brand looks
                                professional, recognizable, and credible wherever your
                                customers encounter it.
                            </p>
                        </div>
                        <div className="graphics-cards" ref={cardsRef}>
                            <div className="graphics-card">
                                <Image src={images.graphics1} alt="" fill />
                            </div>
                            <div className="graphics-card">
                                <Image src={images.graphics2} alt="" fill />
                            </div>
                            <div className="graphics-card">
                                <Image src={images.graphics3} alt="" fill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

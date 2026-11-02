"use client";

import { useState } from 'react';
import '../styles/hypermenu.css'

type HypermenuSlide = {
  title: string;
  description: string;
};

export type HypermenuPanel = {
    id: number;
    title: string;
    slides: HypermenuSlide[];
};

type HypermenuProps = {
    title: string;
    description: string;
    className?: string;
    switchOnHover?: boolean;
    panels: HypermenuPanel[];
};


export default function Hypermenu ({ title, description, panels, className = "", switchOnHover=true }: HypermenuProps) {

    const [activePanel, setActivePanel] = useState(1)
    const activeSlides = panels.find((panel) => panel.id === activePanel)?.slides;

    return (
        <section id="hypermenu" className={className}>
            <div className="container">
                <aside id="sidebar">
                    <div className="sidebar-header">
                        <h2 className="hm-heading">
                            {title}
                        </h2>
                        <p className="hm-body">
                            {description}
                        </p>
                    </div>
                    <ul className="sidebar-tabs">
                        {panels.map((panel, idx) => (
                            <li key={idx}
                                onClick={switchOnHover ? undefined : () => setActivePanel(panel.id)}
                                onMouseEnter={switchOnHover ? () => setActivePanel(panel.id) : undefined}
                                className={`${panel.id === activePanel ? "active" : ''}`}
                            >
                                {panel.title}
                            </li>
                        ))}
                    </ul>
                </aside>
                <div id="hypermenu-slides">
                    {activeSlides?.map((slide, idx) => (
                        <div className="slide" key={idx}>
                            <h3 className="hm-heading">
                                {slide.title}
                            </h3>
                            <p className="hm-body">
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
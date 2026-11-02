import Hypermenu from "@/components/Hypermenu";
import type { HypermenuPanel } from "@/components/Hypermenu";

export const panels: HypermenuPanel[] = [
    {
        id: 1,
        title: "Web & Digital",
        slides: [
        {
            title: "Web Development",
            description:
            "Build a professional online presence designed around your business and your customers.",
        },
        {
            title: "Web Design",
            description:
            "Create a clear, user-focused experience that helps visitors understand what you offer.",
        },
        {
            title: "Responsive Websites",
            description:
            "Give customers a consistent experience across phones, tablets, and desktop screens.",
        },
        {
            title: "Search Visibility",
            description:
            "Make your business easier to discover with SEO-focused design and search-friendly content.",
        },
        {
            title: "Performance & Accessibility",
            description:
            "Improve speed, accessibility, and usability so your website works smoothly for more people.",
        },
        {
            title: "Analytics & Growth",
            description:
            "Use analytics and user-focused experiences to understand and improve your digital presence.",
        },
        ],
    },
    {
        id: 2,
        title: "Software & Systems",
        slides: [
        {
            title: "Software Engineering",
            description:
            "Develop software solutions shaped around your business needs and project goals.",
        },
        {
            title: "Systems Integration",
            description:
            "Connect software, business systems, and digital infrastructure to work together.",
        },
        {
            title: "IT Solutions",
            description:
            "Get practical technology solutions to support your business and its operations.",
        },
        {
            title: "Infrastructure Monitoring",
            description:
            "Monitor websites, servers, and networks for downtime, performance issues, and unusual activity.",
        },
        {
            title: "Downtime Detection",
            description:
            "Identify service disruptions quickly and surface information that can help diagnose the cause.",
        },
        {
            title: "Incident Response",
            description:
            "Respond to technical issues and coordinate remote or hands-on support to restore service.",
        },
        ],
    },
    {
        id: 3,
        title: "Brand & Security",
        slides: [
        {
            title: "Graphic Design",
            description:
            "Create visual materials that help your business communicate clearly and professionally.",
        },
        {
            title: "Corporate Identity",
            description:
            "Build a consistent visual identity across your website, marketing, social media, and business communications.",
        },
        {
            title: "Indoor Camera Systems",
            description:
            "Improve visibility and accountability with indoor surveillance for business environments.",
        },
        {
            title: "Wireless Camera Systems",
            description:
            "Use portable surveillance with remote monitoring and recorded footage for events and temporary retail.",
        },
        {
            title: "Smart Inventory Tracking",
            description:
            "Use RFID chips and readers to track stock movements and strengthen inventory control.",
        },
        {
            title: "Security & Loss Prevention",
            description:
            "Explore surveillance and inventory solutions designed to help monitor activity and reduce losses.",
        },
        ],
    },
];

export default function Services () {

    return <Hypermenu title="Our Services...\nIn A Nutshell" description="These are all our services i guess" switchOnHover={true} panels={panels} />
}
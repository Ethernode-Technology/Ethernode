"use client"

import { useState } from 'react';
import { toast } from "@/components/ui/toast"

export default function ContactSection () {

    
    const [sending, setSending] = useState(false);

    const submitContact: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        if (sending) return;

        setSending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            company_name: formData.get("company_name"),
            project_need: formData.get("project_need"),
            timeline: formData.get("timeline") || null,
            budget: formData.get("budget") || null,
            email: formData.get("email"),
            extra_info: formData.get("extra_info"),
        };

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/website/contact/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                toast.add({
                    title: "Couldn't send form",
                    type: "error",
                    description:
                        result.detail ?? "Please check your details and try again.",
                });
                return;
            }

            toast.add({
                title: "Form Submitted",
                type: "success",
                id: "toast",
                description: result.detail,
            });

            form.reset();
        } catch (error) {
            console.error("Contact submission error:", error);

            toast.add({
                title: "Couldn't send form",
                type: "error",
                description: "A connection error occurred. Please try again later.",
            });
        } finally {
            setSending(false);
        }
    };



    return (
        <section id="contact-section">
            <div className="contact-container">
                <header>
                    <h1 className="site-heading">
                        <span className="subtext">Contact Us</span>
                        Let's build you <span className="heading-span">something better</span>
                    </h1>
                    <p className="site-p">
                        Send a few details about your project, and we'll get back 
                        to you with a clear direction, scope, timeline, and practical 
                        next steps for building something sharp, focused, and ready 
                        to deploy.
                    </p>
                </header>
                <div className="contact-form">
                    <form id="contact" onSubmit={submitContact}>
                        <div className="form-input">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="company_name">
                                Company Name
                                <span>optional</span>
                            </label>
                            <input type="text" name="company_name" id="company_name" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="project_need">What's your project need</label>
                            <select name="project_need" id="project_need">
                                <option value="website_dev">
                                    I need a Web Developer
                                </option>
                                <option value="graphic_design">
                                    I need a Graphic Designer
                                </option>
                                <option value="software_dev">
                                    I need a Software Engineer
                                </option>
                                <option value="system_dev">
                                    I need a company ecosystem
                                </option>
                                <option value="security_system">
                                    I need a security system
                                </option>
                            </select>
                        </div>
                        <div className="form-input">
                            <label htmlFor="timeline">This project is due:</label>
                            <input type="date" name="timeline" id="timeline" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="budget">What's your budget?</label>
                            <input type="number" name="budget" id="budget" />
                        </div>                        
                        <div className="form-input">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="form-input extra-info">
                            <label htmlFor="extra_info">Any extra information?</label>
                            <textarea name="extra_info" id="extra_info"></textarea>
                        </div>
                        <div className="form-input submit">
                            <button
                                type="submit"
                                className="site-btn primary"
                                disabled={sending}
                            >
                                {sending ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

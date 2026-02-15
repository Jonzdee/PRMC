"use client";
import React, { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Send,
    Clock,
    MessageCircle,
    ChevronDown,
    HelpCircle,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function Page() {
    const [openFaq, setOpenFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
        darkBg: "#051D2E",
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            content: "+234 706 801 7499",
            subtext: "Mon-Fri 9AM-6PM WAT",
        },
        {
            icon: Mail,
            title: "Email",
            content: "info@prmc.com",
            subtext: "We'll respond within 24hrs",
        },
        {
            icon: MapPin,
            title: "Office",
            content: "Lagos, Nigeria",
            subtext: "Visit by appointment",
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Mon - Fri: 9AM - 6PM",
            subtext: "Weekends: Closed",
        },
    ];

    const faqs = [
        {
            question: "What services does PRMC offer?",
            answer:
                "PRMC offers comprehensive risk management solutions including Risk Assessment, Compliance Management, Governance Frameworks, Cyber Security, and Business Continuity Planning. Our integrated platform helps organizations proactively identify, assess, and mitigate risks across all business operations.",
        },
        {
            question: "How quickly can we get started with PRMC?",
            answer:
                "Most clients can begin their risk management journey within 48-72 hours of initial contact. We start with a complimentary consultation to understand your needs, followed by a customized onboarding plan. Our platform is designed for rapid deployment with minimal disruption to your operations.",
        },
        {
            question: "Do you work with small businesses or only enterprises?",
            answer:
                "We serve organizations of all sizes, from startups and SMEs to large enterprises. Our solutions are scalable and can be tailored to match your organization's size, industry, and specific risk management requirements. We believe every business deserves world-class risk protection.",
        },
        {
            question: "What industries do you specialize in?",
            answer:
                "We have extensive experience across multiple sectors including Financial Services, Healthcare, Technology, Manufacturing, Retail, and Professional Services. Our platform is industry-agnostic, with customizable frameworks that address sector-specific compliance and risk requirements.",
        },
        {
            question: "How do you ensure data security and confidentiality?",
            answer:
                "Security is our top priority. We employ bank-level encryption, multi-factor authentication, regular security audits, and comply with international standards including ISO 27001. All client data is stored in secure, redundant data centers with strict access controls and comprehensive backup procedures.",
        },
        {
            question: "What kind of support do you provide?",
            answer:
                "We offer 24/7 technical support via phone, email, and live chat. Every client is assigned a dedicated account manager and has access to our expert team of risk management consultants. We also provide comprehensive training, documentation, and regular check-ins to ensure your success.",
        },
        {
            question: "Can PRMC integrate with our existing systems?",
            answer:
                "Yes! Our platform features robust API capabilities and pre-built integrations with major business systems including ERP, CRM, HRIS, and compliance tools. Our technical team works closely with your IT department to ensure seamless integration with your existing technology stack.",
        },
        {
            question: "What is your pricing model?",
            answer:
                "We offer flexible pricing based on your organization's size, required modules, and level of support. Options include monthly subscriptions, annual contracts, and custom enterprise agreements. Contact us for a personalized quote tailored to your specific needs and budget.",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;

        const whatsappUrl = `https://wa.me/2347068017499?text=${message}`;
        window.open(whatsappUrl, "_blank");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            <div className="w-full" style={{ backgroundColor: colors.lightBg }}>
                {/* Hero Section */}
                <section
                    className="relative py-20 md:py-32 overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.navyBlue} 100%)`,
                    }}
                >
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl"
                            style={{ backgroundColor: colors.gold }}
                        />
                        <div
                            className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
                            style={{ backgroundColor: colors.gold }}
                        />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center space-y-6">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                                style={{
                                    backgroundColor: `${colors.gold}20`,
                                    borderColor: `${colors.gold}60`,
                                }}
                            >
                                <MessageCircle className="w-4 h-4" style={{ color: colors.gold }} />
                                <span className="text-sm font-semibold" style={{ color: colors.gold }}>
                                    Get in Touch
                                </span>
                            </div>

                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                                style={{ color: colors.white }}
                            >
                                Let&apos;s Start a
                                <br />
                                <span style={{ color: colors.gold }}>Conversation</span>
                            </h1>

                            <p
                                className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                                style={{ color: `${colors.white}cc` }}
                            >
                                Have questions about our services? We&apos;re here to help you protect and grow
                                your business. Reach out today.
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0">
                        <svg
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="w-full h-16 md:h-24"
                        >
                            <path
                                d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z"
                                fill={colors.lightBg}
                            />
                        </svg>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-12 md:py-16 -mt-8 md:-mt-12 relative z-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative p-6 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                        style={{
                                            backgroundColor: colors.white,
                                            border: `2px solid ${colors.gold}30`,
                                            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${colors.gold}05 0%, ${colors.navyBlue}05 100%)`,
                                            }}
                                        />

                                        <div className="relative space-y-3">
                                            <div
                                                className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-500 group-hover:scale-110"
                                                style={{
                                                    backgroundColor: `${colors.gold}15`,
                                                    border: `2px solid ${colors.gold}40`,
                                                }}
                                            >
                                                <IconComponent className="w-6 h-6" style={{ color: colors.gold }} />
                                            </div>

                                            <div>
                                                <h3
                                                    className="text-sm font-semibold uppercase tracking-wider mb-1"
                                                    style={{ color: `${colors.navyBlue}99` }}
                                                >
                                                    {info.title}
                                                </h3>
                                                <p
                                                    className="text-lg font-bold mb-1"
                                                    style={{ color: colors.navyBlue }}
                                                >
                                                    {info.content}
                                                </p>
                                                <p
                                                    className="text-sm"
                                                    style={{ color: `${colors.navyBlue}cc` }}
                                                >
                                                    {info.subtext}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div>
                                <div className="mb-8">
                                    <div
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4"
                                        style={{
                                            backgroundColor: `${colors.gold}15`,
                                            borderColor: `${colors.gold}40`,
                                        }}
                                    >
                                        <Send className="w-4 h-4" style={{ color: colors.gold }} />
                                        <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                                            Send us a Message
                                        </span>
                                    </div>

                                    <h2
                                        className="text-3xl md:text-4xl font-bold mb-4"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        Ready to Get Started?
                                    </h2>
                                    <p
                                        className="text-lg"
                                        style={{ color: `${colors.navyBlue}99` }}
                                    >
                                        Fill out the form and we&apos;ll send your message directly to our WhatsApp
                                        for a quick response.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: colors.navyBlue }}
                                            >
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-300 focus:border-[#B8954A]"
                                                style={{
                                                    borderColor: `${colors.navyBlue}20`,
                                                    backgroundColor: colors.white,
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: colors.navyBlue }}
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-300 focus:border-[#B8954A]"
                                                style={{
                                                    borderColor: `${colors.navyBlue}20`,
                                                    backgroundColor: colors.white,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: colors.navyBlue }}
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+234 xxx xxx xxxx"
                                                className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-300 focus:border-[#B8954A]"
                                                style={{
                                                    borderColor: `${colors.navyBlue}20`,
                                                    backgroundColor: colors.white,
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label
                                                className="block text-sm font-semibold mb-2"
                                                style={{ color: colors.navyBlue }}
                                            >
                                                Subject *
                                            </label>
                                            <select
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-300 focus:border-[#B8954A]"
                                                style={{
                                                    borderColor: `${colors.navyBlue}20`,
                                                    backgroundColor: colors.white,
                                                    color: colors.navyBlue,
                                                }}
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Service Information">Service Information</option>
                                                <option value="Pricing & Plans">Pricing & Plans</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="Partnership">Partnership Opportunity</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            className="block text-sm font-semibold mb-2"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            Your Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="Tell us about your needs..."
                                            className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all duration-300 resize-none focus:border-[#B8954A]"
                                            style={{
                                                borderColor: `${colors.navyBlue}20`,
                                                backgroundColor: colors.white,
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                                        style={{
                                            backgroundColor: colors.navyBlue,
                                            color: colors.white,
                                        }}
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Send via WhatsApp
                                        <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>

                                    <p
                                        className="text-sm"
                                        style={{ color: `${colors.navyBlue}99` }}
                                    >
                                        By submitting this form, you agree to our privacy policy and terms of
                                        service.
                                    </p>
                                </form>
                            </div>

                            <div className="space-y-6">
                                <div
                                    className="p-8 rounded-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                                    }}
                                >
                                    <h3
                                        className="text-2xl font-bold mb-6"
                                        style={{ color: colors.white }}
                                    >
                                        Why Contact Us?
                                    </h3>

                                    <div className="space-y-4">
                                        {[
                                            "Get expert guidance tailored to your needs",
                                            "Quick response within 24 hours",
                                            "Free consultation and risk assessment",
                                            "Flexible solutions for any business size",
                                            "Dedicated support team at your service",
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle2
                                                    className="w-6 h-6 shrink-0 mt-0.5"
                                                    style={{ color: colors.gold }}
                                                />
                                                <p
                                                    className="text-base"
                                                    style={{ color: `${colors.white}dd` }}
                                                >
                                                    {benefit}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div
                                    className="p-8 rounded-2xl border-2"
                                    style={{
                                        backgroundColor: `${colors.gold}10`,
                                        borderColor: `${colors.gold}40`,
                                    }}
                                >
                                    <Sparkles className="w-8 h-8 mb-4" style={{ color: colors.gold }} />
                                    <h3
                                        className="text-xl font-bold mb-3"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        Prefer Instant Chat?
                                    </h3>
                                    <p
                                        className="mb-4"
                                        style={{ color: `${colors.navyBlue}dd` }}
                                    >
                                        Connect with us directly on WhatsApp for immediate assistance.
                                    </p>
                                    <a
                                        href="https://wa.me/2347068017499"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: colors.navyBlue,
                                            color: colors.white,
                                        }}
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section
                    className="py-20 md:py-32"
                    style={{
                        background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.lightBg} 100%)`,
                    }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4"
                                style={{
                                    backgroundColor: `${colors.gold}15`,
                                    borderColor: `${colors.gold}40`,
                                }}
                            >
                                <HelpCircle className="w-4 h-4" style={{ color: colors.gold }} />
                                <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                                    FAQ
                                </span>
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ color: colors.navyBlue }}
                            >
                                Frequently Asked Questions
                            </h2>
                            <p
                                className="text-lg"
                                style={{ color: `${colors.navyBlue}99` }}
                            >
                                Find answers to common questions about our services
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="group rounded-xl overflow-hidden transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.white,
                                        border: `2px solid ${openFaq === index ? colors.gold : `${colors.navyBlue}15`
                                            }`,
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left transition-all duration-300"
                                        style={{
                                            backgroundColor:
                                                openFaq === index ? `${colors.gold}10` : "transparent",
                                        }}
                                    >
                                        <h3
                                            className="text-lg md:text-xl font-bold flex-1"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            {faq.question}
                                        </h3>
                                        <ChevronDown
                                            className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""
                                                }`}
                                            style={{
                                                color: openFaq === index ? colors.gold : colors.navyBlue,
                                            }}
                                        />
                                    </button>

                                    <div
                                        className="overflow-hidden transition-all duration-500"
                                        style={{
                                            maxHeight: openFaq === index ? "500px" : "0px",
                                        }}
                                    >
                                        <div className="p-6 md:p-8 pt-0">
                                            <p
                                                className="text-base md:text-lg leading-relaxed"
                                                style={{ color: `${colors.navyBlue}dd` }}
                                            >
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <p
                                className="text-lg mb-4"
                                style={{ color: `${colors.navyBlue}99` }}
                            >
                                Still have questions?
                            </p>
                            <a
                                href="https://wa.me/2347068017499"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    backgroundColor: colors.navyBlue,
                                    color: colors.white,
                                }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Contact Us on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
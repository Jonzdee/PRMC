"use client";
import React from "react";
import Link from "next/link";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    ArrowRight,
    Shield,
    Award,
    CheckCircle2
} from "lucide-react";

export default function Footer() {
    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
    };

    const footerLinks = {
        services: [
            { name: "Business Health Check", href: "/services/health-check" },
            { name: "Risk & Compliance", href: "/services/risk-compliance" },
            { name: "Market Profitability", href: "/services/profitability" },
            { name: "Business Continuity", href: "/services/continuity" },
            { name: "Cyber Security", href: "/services/cyber-security" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Our Team", href: "/team" },
            { name: "Careers", href: "/careers" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Blog", href: "/blog" },
        ],
        resources: [
            { name: "Resource Center", href: "/resources" },
            { name: "Whitepapers", href: "/whitepapers" },
            { name: "Webinars", href: "/webinars" },
            { name: "FAQs", href: "/faq" },
            { name: "Contact Support", href: "/support" },
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Cookie Policy", href: "/cookies" },
            { name: "Compliance", href: "/compliance" },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    const certifications = [
        { icon: Shield, text: "SOC 2 Certified" },
        { icon: Award, text: "ISO 27001" },
        { icon: CheckCircle2, text: "GDPR Compliant" },
    ];

    return (
        <footer className="relative overflow-hidden" style={{ backgroundColor: colors.navyBlue }}>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: colors.gold }}
                />
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: colors.gold }}
                />
            </div>

            <div className="relative z-10">
                {/* Newsletter Section */}
                <div className="border-b" style={{ borderColor: `${colors.white}10` }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-2" style={{ color: colors.white }}>
                                    Stay Ahead of Risk
                                </h3>
                                <p className="text-blue-100">
                                    Subscribe to our newsletter for expert insights and industry updates
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                                    style={{
                                        backgroundColor: `${colors.white}10`,
                                        borderColor: `${colors.white}20`,
                                        color: colors.white,
                                    }}
                                />
                                <button
                                    className="px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.gold}, #d4a960)`,
                                        color: colors.white,
                                    }}
                                >
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                        {/* Company Info - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="mb-6">
                                {/* Logo placeholder - replace with your actual logo */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: colors.gold }}
                                    >
                                        <Shield className="w-6 h-6" style={{ color: colors.white }} />
                                    </div>
                                    <span className="text-2xl font-bold" style={{ color: colors.white }}>
                    PRMC
                  </span>
                                </div>
                                <p className="text-blue-100 mb-6 leading-relaxed">
                                    Empowering organizations with comprehensive risk management solutions
                                    for sustainable growth and compliance excellence.
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 mt-0.5" style={{ color: colors.gold }} />
                                    <span className="text-blue-100 text-sm">
                    123 Business District, Lagos, Nigeria
                  </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" style={{ color: colors.gold }} />
                                    <a
                                        href="tel:+2341234567890"
                                        className="text-blue-100 text-sm hover:text-white transition-colors"
                                    >
                                        +234 123 456 7890
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5" style={{ color: colors.gold }} />
                                    <a
                                        href="mailto:info@prmc.com"
                                        className="text-blue-100 text-sm hover:text-white transition-colors"
                                    >
                                        info@prmc.com
                                    </a>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 mt-6">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                            style={{
                                                backgroundColor: `${colors.white}10`,
                                                color: colors.gold,
                                            }}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="font-bold mb-4 text-white">Services</h4>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-blue-100 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h4 className="font-bold mb-4 text-white">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-blue-100 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <h4 className="font-bold mb-4 text-white">Resources</h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-blue-100 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4 className="font-bold mb-4 text-white">Legal</h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-blue-100 text-sm hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t" style={{ borderColor: `${colors.white}10` }}>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Copyright */}
                            <p className="text-blue-100 text-sm text-center md:text-left">
                                © {new Date().getFullYear()} PRMC. All rights reserved.
                            </p>

                            {/* Certifications */}
                            <div className="flex flex-wrap items-center justify-center gap-6">
                                {certifications.map((cert, index) => {
                                    const Icon = cert.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-2">
                                            <Icon className="w-4 h-4" style={{ color: colors.gold }} />
                                            <span className="text-blue-100 text-xs font-medium">
                        {cert.text}
                      </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
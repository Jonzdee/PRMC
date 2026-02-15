"use client";
import React from "react";
import {
    Stethoscope,
    Shield,
    TrendingUp,
    AlertTriangle,
    Lock,
    Settings,
    DollarSign,
    Users,
    Target,
    GraduationCap,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ServicesGrid() {
    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
    };

    const services = [
        {
            icon: Stethoscope,
            title: "Business Health Check & Performance Diagnosis",
            description: "Comprehensive assessment of your business operations, identifying strengths and areas for improvement.",
            color: colors.gold,
        },
        {
            icon: Shield,
            title: "Risk & Compliance Setup / Upgrade",
            description: "Establish robust risk management frameworks and ensure regulatory compliance across your organization.",
            color: colors.navyBlue,
        },
        {
            icon: TrendingUp,
            title: "Product & Market Profitability Analysis",
            description: "Deep dive into product performance and market dynamics to optimize profitability and growth.",
            color: colors.gold,
        },
        {
            icon: AlertTriangle,
            title: "Business Continuity & Crisis Preparedness",
            description: "Develop resilient strategies to ensure business continuity during disruptions and crises.",
            color: colors.navyBlue,
        },
        {
            icon: Lock,
            title: "Cyber, IT & Data Protection Setup/Review",
            description: "Secure your digital assets with comprehensive cybersecurity and data protection solutions.",
            color: colors.gold,
        },
        {
            icon: Settings,
            title: "Internal Controls & Process Improvement",
            description: "Streamline operations and strengthen internal controls for enhanced efficiency and compliance.",
            color: colors.navyBlue,
        },
        {
            icon: DollarSign,
            title: "Credit, Financial & Cashflow Assessment",
            description: "Optimize financial health through detailed credit analysis and cashflow management strategies.",
            color: colors.gold,
        },
        {
            icon: Users,
            title: "Governance, Leadership & Ethics Support",
            description: "Build strong governance frameworks and ethical leadership practices for sustainable success.",
            color: colors.navyBlue,
        },
        {
            icon: Target,
            title: "Strategy Execution & Business Growth Support",
            description: "Transform strategic plans into actionable results that drive measurable business growth.",
            color: colors.gold,
        },
        {
            icon: GraduationCap,
            title: "Staff Capability & Specialized Training",
            description: "Empower your team with targeted training programs and capability development initiatives.",
            color: colors.navyBlue,
        },
    ];

    return (
        <section className="py-20 lg:py-28" style={{ backgroundColor: colors.white }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6"
                        style={{
                            backgroundColor: `${colors.gold}15`,
                            borderColor: `${colors.gold}40`,
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: colors.gold }}
                        />
                        <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                            Our Solutions
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: colors.navyBlue }}
                    >
                        Comprehensive Risk Management{" "}
                        <span
                            className="bg-gradient-to-r bg-clip-text text-transparent"
                            style={{
                                backgroundImage: `linear-gradient(90deg, ${colors.gold}, #d4a960)`,
                            }}
                        >
                            Solutions
                        </span>
                    </h2>

                    <p
                        className="text-lg leading-relaxed"
                        style={{ color: `${colors.navyBlue}cc` }}
                    >
                        From compliance to crisis management, we provide end-to-end solutions
                        tailored to your organization &lsquo; s unique needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isGold = service.color === colors.gold;

                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col"
                                style={{
                                    borderColor: `${service.color}20`,
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {/* Hover gradient background */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${service.color}05, transparent)`,
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="mb-6">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            style={{
                                                backgroundColor: `${service.color}15`,
                                            }}
                                        >
                                            <Icon
                                                className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
                                                style={{ color: service.color }}
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl font-bold mb-3 leading-snug transition-colors duration-300"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed mb-4"
                                        style={{ color: `${colors.navyBlue}99` }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <span
                                            className="text-sm font-semibold"
                                            style={{ color: service.color }}
                                        >
                                            Learn more
                                        </span>
                                        <ArrowRight
                                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                            style={{ color: service.color }}
                                        />
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                                    style={{ backgroundColor: service.color }}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center animate-fade-in-up">
                    <p
                        className="text-lg mb-6"
                        style={{ color: `${colors.navyBlue}cc` }}
                    >
                        Need a customized solution for your organization?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        style={{
                            background: `linear-gradient(135deg, ${colors.gold}, #d4a960)`,
                            color: colors.white,
                            boxShadow: `0 10px 30px ${colors.gold}30`,
                        }}
                    >
                        Schedule a Consultation
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>


        </section>
    );
}
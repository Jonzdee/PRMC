"use client";
import React from "react";
import {
    Activity,
    CheckCircle2,
    ArrowRight,
    TrendingUp,
    Target,
    BarChart3,
    Users,
    Shield,
    MessageCircle,
    Download,
    Zap,
    Award,
} from "lucide-react";

export default function Page() {
    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
        darkBg: "#051D2E",
    };

    const keyFeatures = [
        {
            icon: Activity,
            title: "Comprehensive Analysis",
            description: "Deep-dive assessment of all critical business functions and operations",
        },
        {
            icon: BarChart3,
            title: "Performance Metrics",
            description: "Detailed evaluation of KPIs, efficiency ratios, and performance indicators",
        },
        {
            icon: Target,
            title: "Gap Identification",
            description: "Pinpoint weaknesses, bottlenecks, and opportunities for improvement",
        },
        {
            icon: TrendingUp,
            title: "Growth Roadmap",
            description: "Actionable recommendations to enhance performance and profitability",
        },
    ];

    const benefits = [
        "Gain complete visibility into your business health",
        "Identify hidden risks before they become critical issues",
        "Benchmark against industry best practices",
        "Receive prioritized action plans for improvement",
        "Make data-driven decisions with confidence",
        "Optimize resource allocation and operational efficiency",
        "Improve stakeholder confidence and investor readiness",
        "Strengthen competitive positioning in your market",
    ];

    const process = [
        {
            step: "01",
            title: "Initial Consultation",
            description: "We meet with key stakeholders to understand your business, goals, and concerns.",
        },
        {
            step: "02",
            title: "Data Collection",
            description: "Comprehensive gathering of financial records, operational data, and documentation.",
        },
        {
            step: "03",
            title: "In-Depth Analysis",
            description: "Our experts analyze every aspect of your business using proven frameworks.",
        },
        {
            step: "04",
            title: "Diagnosis Report",
            description: "Detailed findings presented with clear insights and risk assessments.",
        },
        {
            step: "05",
            title: "Action Planning",
            description: "Prioritized recommendations with implementation roadmaps and timelines.",
        },
        {
            step: "06",
            title: "Ongoing Support",
            description: "Continuous guidance as you execute improvements and track progress.",
        },
    ];

    const deliverables = [
        "Comprehensive Business Health Report (50-100 pages)",
        "Executive Summary Dashboard",
        "Risk Assessment Matrix",
        "Performance Benchmarking Analysis",
        "Prioritized Action Plan",
        "Implementation Roadmap & Timeline",
        "90-Day Follow-up Consultation",
    ];

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
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                                    style={{
                                        backgroundColor: `${colors.gold}20`,
                                        borderColor: `${colors.gold}60`,
                                    }}
                                >
                                    <Activity className="w-4 h-4" style={{ color: colors.gold }} />
                                    <span className="text-sm font-semibold" style={{ color: colors.gold }}>
                                        Our Services
                                    </span>
                                </div>

                                <h1
                                    className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                                    style={{ color: colors.white }}
                                >
                                    Business Health Check &{" "}
                                    <span style={{ color: colors.gold }}>Performance Diagnosis</span>
                                </h1>

                                <p
                                    className="text-lg md:text-xl leading-relaxed"
                                    style={{ color: `${colors.white}cc` }}
                                >
                                    Get a complete, objective assessment of your business&apos;s current state.
                                    Our comprehensive health check identifies strengths, weaknesses, and
                                    opportunities to drive sustainable growth.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <a
                                        href="/contact"
                                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                        style={{
                                            backgroundColor: colors.gold,
                                            color: colors.navyBlue,
                                        }}
                                    >
                                        Get Started
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                    <a
                                        href="https://wa.me/2347068017499"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                                        style={{
                                            backgroundColor: `${colors.white}20`,
                                            color: colors.white,
                                            border: `2px solid ${colors.white}40`,
                                        }}
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Talk to Expert
                                    </a>
                                </div>
                            </div>

                            <div className="relative">
                                <div
                                    className="aspect-square rounded-2xl flex items-center justify-center text-9xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.gold}20 0%, ${colors.white}10 100%)`,
                                        border: `2px solid ${colors.gold}40`,
                                    }}
                                >
                                    🏥
                                </div>
                            </div>
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

                {/* Key Features */}
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ color: colors.navyBlue }}
                            >
                                What&apos;s Included
                            </h2>
                            <p
                                className="text-lg max-w-2xl mx-auto"
                                style={{ color: `${colors.navyBlue}99` }}
                            >
                                Our comprehensive diagnostic approach covers every critical aspect of your
                                business
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {keyFeatures.map((feature, index) => {
                                const IconComponent = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                        style={{
                                            backgroundColor: colors.white,
                                            border: `2px solid ${colors.navyBlue}15`,
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${colors.gold}05 0%, ${colors.navyBlue}05 100%)`,
                                            }}
                                        />

                                        <div className="relative space-y-4">
                                            <div
                                                className="inline-flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-500 group-hover:scale-110"
                                                style={{
                                                    backgroundColor: `${colors.gold}15`,
                                                    border: `2px solid ${colors.gold}40`,
                                                }}
                                            >
                                                <IconComponent
                                                    className="w-7 h-7"
                                                    style={{ color: colors.gold }}
                                                />
                                            </div>

                                            <h3
                                                className="text-xl font-bold"
                                                style={{ color: colors.navyBlue }}
                                            >
                                                {feature.title}
                                            </h3>

                                            <p
                                                className="text-sm leading-relaxed"
                                                style={{ color: `${colors.navyBlue}cc` }}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section
                    className="py-20 md:py-32"
                    style={{
                        background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.lightBg} 100%)`,
                    }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                                    style={{
                                        backgroundColor: `${colors.gold}15`,
                                        borderColor: `${colors.gold}40`,
                                    }}
                                >
                                    <Award className="w-4 h-4" style={{ color: colors.gold }} />
                                    <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                                        Key Benefits
                                    </span>
                                </div>

                                <h2
                                    className="text-4xl md:text-5xl font-bold mb-6"
                                    style={{ color: colors.navyBlue }}
                                >
                                    Why Choose Our Business Health Check?
                                </h2>

                                <p
                                    className="text-lg leading-relaxed mb-8"
                                    style={{ color: `${colors.navyBlue}99` }}
                                >
                                    Our expert team delivers actionable insights that transform how you understand
                                    and manage your business performance.
                                </p>

                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle2
                                                className="w-6 h-6 flex-shrink-0 mt-0.5"
                                                style={{ color: colors.gold }}
                                            />
                                            <p
                                                className="text-base"
                                                style={{ color: `${colors.navyBlue}dd` }}
                                            >
                                                {benefit}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="relative p-8 md:p-12 rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                                }}
                            >
                                <div className="space-y-6">
                                    <Zap className="w-12 h-12" style={{ color: colors.gold }} />
                                    <h3
                                        className="text-2xl md:text-3xl font-bold"
                                        style={{ color: colors.white }}
                                    >
                                        Fast-Track Your Business Transformation
                                    </h3>
                                    <p
                                        className="text-lg leading-relaxed"
                                        style={{ color: `${colors.white}cc` }}
                                    >
                                        Most clients see measurable improvements within 90 days of implementing
                                        our recommendations. Get the clarity and confidence you need to make bold
                                        decisions.
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 pt-6">
                                        <div>
                                            <div
                                                className="text-4xl font-bold mb-2"
                                                style={{ color: colors.gold }}
                                            >
                                                72hrs
                                            </div>
                                            <p
                                                className="text-sm"
                                                style={{ color: `${colors.white}dd` }}
                                            >
                                                Initial Assessment
                                            </p>
                                        </div>
                                        <div>
                                            <div
                                                className="text-4xl font-bold mb-2"
                                                style={{ color: colors.gold }}
                                            >
                                                2 Weeks
                                            </div>
                                            <p
                                                className="text-sm"
                                                style={{ color: `${colors.white}dd` }}
                                            >
                                                Full Report Delivery
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ color: colors.navyBlue }}
                            >
                                Our Proven Process
                            </h2>
                            <p
                                className="text-lg max-w-2xl mx-auto"
                                style={{ color: `${colors.navyBlue}99` }}
                            >
                                A structured, six-step approach that ensures comprehensive coverage and
                                actionable results
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {process.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative p-8 rounded-xl"
                                    style={{
                                        backgroundColor: colors.white,
                                        border: `2px solid ${colors.navyBlue}15`,
                                    }}
                                >
                                    <div
                                        className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                                        style={{
                                            backgroundColor: colors.gold,
                                            color: colors.navyBlue,
                                        }}
                                    >
                                        {item.step}
                                    </div>

                                    <div className="space-y-3 pt-4">
                                        <h3
                                            className="text-xl font-bold"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed"
                                            style={{ color: `${colors.navyBlue}cc` }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Deliverables */}
                <section
                    className="py-20 md:py-32"
                    style={{
                        background: `linear-gradient(135deg, ${colors.gold}10 0%, ${colors.navyBlue}05 100%)`,
                    }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
                                style={{
                                    backgroundColor: `${colors.gold}15`,
                                    borderColor: `${colors.gold}40`,
                                }}
                            >
                                <Download className="w-4 h-4" style={{ color: colors.gold }} />
                                <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                                    What You&apos;ll Receive
                                </span>
                            </div>

                            <h2
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{ color: colors.navyBlue }}
                            >
                                Comprehensive Deliverables
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {deliverables.map((deliverable, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-xl transition-all duration-300 hover:translate-x-2"
                                    style={{
                                        backgroundColor: colors.white,
                                        border: `2px solid ${colors.navyBlue}15`,
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                                            style={{
                                                backgroundColor: `${colors.gold}15`,
                                                color: colors.navyBlue,
                                            }}
                                        >
                                            {index + 1}
                                        </div>
                                        <p
                                            className="text-lg font-semibold"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            {deliverable}
                                        </p>
                                        <ArrowRight
                                            className="ml-auto w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ color: colors.gold }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="py-20 md:py-32"
                    style={{
                        background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                    }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: colors.white }}
                        >
                            Ready to Diagnose Your Business Health?
                        </h2>
                        <p
                            className="text-lg md:text-xl mb-10"
                            style={{ color: `${colors.white}cc` }}
                        >
                            Schedule a free consultation to learn how our comprehensive health check can
                            transform your business performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
                                style={{
                                    backgroundColor: colors.gold,
                                    color: colors.navyBlue,
                                }}
                            >
                                Schedule Consultation
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a
                                href="https://wa.me/2347068017499"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                                style={{
                                    backgroundColor: `${colors.white}20`,
                                    color: colors.white,
                                    border: `2px solid ${colors.white}40`,
                                }}
                            >
                                <MessageCircle className="w-5 h-5" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
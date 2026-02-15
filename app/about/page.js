"use client";
import React from "react";
import {
    Target,
    Eye,
    Shield,
    Award,
    Users,
    TrendingUp,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

export default function Page() {
    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
        darkBg: "#051D2E",
    };

    const coreValues = [
        {
            icon: Shield,
            title: "Integrity",
            description: "We uphold the highest standards of ethical conduct in everything we do",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "We deliver exceptional quality and continuously improve our services",
        },
        {
            icon: Users,
            title: "Partnership",
            description: "We build lasting relationships based on trust and mutual success",
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            description: "We embrace change and pioneer solutions for tomorrow's challenges",
        },
    ];

    const achievements = [
        { number: "500+", label: "Clients Served" },
        { number: "15+", label: "Years Experience" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "50+", label: "Industry Awards" },
    ];

    return (
        <div className="w-full" style={{ backgroundColor: colors.lightBg }}>
            {/* Hero Section */}
            <section
                className="relative py-20 md:py-32 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.navyBlue} 100%)`,
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl"
                        style={{ backgroundColor: colors.gold }}
                    />
                    <div
                        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl"
                        style={{ backgroundColor: colors.gold }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center space-y-6 animate-fade-in">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                            style={{
                                backgroundColor: `${colors.gold}20`,
                                borderColor: `${colors.gold}60`,
                            }}
                        >
                            <Sparkles className="w-4 h-4" style={{ color: colors.gold }} />
                            <span className="text-sm font-semibold" style={{ color: colors.gold }}>
                                About PRMC
                            </span>
                        </div>

                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                            style={{ color: colors.white }}
                        >
                            Building a Safer,
                            <br />
                            <span style={{ color: colors.gold }}>More Resilient Future</span>
                        </h1>

                        <p
                            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: `${colors.white}cc` }}
                        >
                            We are dedicated to empowering organizations with comprehensive risk management
                            solutions that protect what matters most and enable sustainable growth.
                        </p>
                    </div>
                </div>

                {/* Wave Divider */}
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

            {/* Vision & Mission Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        {/* Vision Card */}
                        <div
                            className="group relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.white} 0%, ${colors.lightBg} 100%)`,
                                border: `2px solid ${colors.gold}30`,
                            }}
                        >
                            {/* Decorative corner */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                                style={{
                                    background: `radial-gradient(circle at top right, ${colors.gold} 0%, transparent 70%)`,
                                }}
                            />

                            <div className="relative space-y-6">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                    style={{
                                        backgroundColor: `${colors.gold}15`,
                                        border: `2px solid ${colors.gold}40`,
                                    }}
                                >
                                    <Eye className="w-8 h-8 md:w-10 md:h-10" style={{ color: colors.gold }} />
                                </div>

                                <div>
                                    <h2
                                        className="text-3xl md:text-4xl font-bold mb-4"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        Our Vision
                                    </h2>
                                    <div
                                        className="w-20 h-1 mb-6 rounded-full"
                                        style={{ backgroundColor: colors.gold }}
                                    />
                                    <p
                                        className="text-base md:text-lg leading-relaxed"
                                        style={{ color: `${colors.navyBlue}dd` }}
                                    >
                                        To be the global leader in integrated risk management solutions, transforming
                                        how organizations protect their people, assets, and reputation while enabling
                                        sustainable growth and innovation in an increasingly complex world.
                                    </p>
                                </div>

                                {/* Animated border effect */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-700 ease-out group-hover:w-full"
                                    style={{
                                        width: "0%",
                                        backgroundColor: colors.gold,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div
                            className="group relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                                border: `2px solid ${colors.gold}40`,
                            }}
                        >
                            {/* Decorative corner */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                                style={{
                                    background: `radial-gradient(circle at top right, ${colors.gold} 0%, transparent 70%)`,
                                }}
                            />

                            <div className="relative space-y-6">
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                    style={{
                                        backgroundColor: `${colors.gold}25`,
                                        border: `2px solid ${colors.gold}`,
                                    }}
                                >
                                    <Target className="w-8 h-8 md:w-10 md:h-10" style={{ color: colors.gold }} />
                                </div>

                                <div>
                                    <h2
                                        className="text-3xl md:text-4xl font-bold mb-4"
                                        style={{ color: colors.white }}
                                    >
                                        Our Mission
                                    </h2>
                                    <div
                                        className="w-20 h-1 mb-6 rounded-full"
                                        style={{ backgroundColor: colors.gold }}
                                    />
                                    <p
                                        className="text-base md:text-lg leading-relaxed"
                                        style={{ color: `${colors.white}dd` }}
                                    >
                                        We empower organizations to proactively identify, assess, and mitigate risks
                                        through innovative technology, expert guidance, and comprehensive compliance
                                        frameworks. We are committed to delivering exceptional value, fostering
                                        long-term partnerships, and setting new standards for excellence in risk
                                        management.
                                    </p>
                                </div>

                                {/* Animated border effect */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 transition-all duration-700 ease-out group-hover:w-full"
                                    style={{
                                        width: "0%",
                                        backgroundColor: colors.gold,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section
                className="py-20 md:py-32"
                style={{
                    background: `linear-gradient(180deg, ${colors.lightBg} 0%, ${colors.white} 100%)`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
                            style={{
                                backgroundColor: `${colors.gold}15`,
                                borderColor: `${colors.gold}40`,
                            }}
                        >
                            <Award className="w-4 h-4" style={{ color: colors.gold }} />
                            <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                                Core Values
                            </span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-bold"
                            style={{ color: colors.navyBlue }}
                        >
                            What Drives Us Forward
                        </h2>

                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: `${colors.navyBlue}99` }}
                        >
                            Our values are the foundation of everything we do, guiding our decisions and
                            shaping our culture.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="group relative p-6 md:p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
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
                                            backgroundColor: `${colors.navyBlue}10`,
                                            border: `2px solid ${colors.navyBlue}20`,
                                        }}
                                    >
                                        <value.icon className="w-7 h-7" style={{ color: colors.navyBlue }} />
                                    </div>

                                    <h3
                                        className="text-xl font-bold"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        {value.title}
                                    </h3>

                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: `${colors.navyBlue}cc` }}
                                    >
                                        {value.description}
                                    </p>
                                </div>

                                <div
                                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"
                                    style={{ backgroundColor: colors.gold }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="py-20 md:py-32 relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                }}
            >
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.gold} 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ color: colors.white }}
                        >
                            Trusted by Industry Leaders
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: `${colors.white}cc` }}
                        >
                            Our track record speaks for itself
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {achievements.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center group cursor-pointer"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                                }}
                            >
                                <div
                                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 transition-all duration-300 group-hover:scale-110"
                                    style={{ color: colors.gold }}
                                >
                                    {stat.number}
                                </div>
                                <div
                                    className="text-sm md:text-base font-medium uppercase tracking-wider"
                                    style={{ color: `${colors.white}dd` }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32" style={{ backgroundColor: colors.white }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: colors.navyBlue }}
                    >
                        Ready to Transform Your Risk Management?
                    </h2>
                    <p
                        className="text-lg md:text-xl mb-10"
                        style={{ color: `${colors.navyBlue}99` }}
                    >
                        Join hundreds of organizations that trust PRMC to protect their future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="group px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            style={{
                                backgroundColor: colors.navyBlue,
                                color: colors.white,
                            }}
                        >
                            <span className="flex items-center justify-center gap-2">
                                Get Started
                                <CheckCircle2 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </button>
                        <button
                            className="group px-8 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: `${colors.gold}15`,
                                color: colors.navyBlue,
                                border: `2px solid ${colors.gold}`,
                            }}
                        >
                            <span className="flex items-center justify-center gap-2">
                                Learn More
                                <Users className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <style jsx>{`
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

                .animate-fade-in {
                    animation: fadeInUp 0.8s ease-out;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
        </div>
    );
}
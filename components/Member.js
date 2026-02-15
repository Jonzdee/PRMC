"use client";
import React, { useState } from "react";
import {
    Sparkles,
    Users,
    Trophy,
    Zap,
    Shield,
    TrendingUp,
    CheckCircle,
    Star,
    Crown,
    MessageCircle,
    ArrowRight,
    Briefcase,
    Book,
    Award,
    Globe,
} from "lucide-react";

export default function BecomeMemberPage() {
    const [hoveredTier, setHoveredTier] = useState(null);
    const whatsappNumber = "+2347068017499";
    const whatsappMessage = encodeURIComponent("Hello! I'm interested in becoming a member of your organization. I'd like to learn more about membership benefits and the application process.");

    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
        darkBg: "#051D2E",
    };

    const membershipTiers = [
        {
            tier: "Associate",
            icon: Star,
            color: "#8B5CF6",
            price: "Contact Us",
            description: "Perfect for growing businesses ready to elevate their potential",
            features: [
                "Quarterly Business Reviews",
                "Access to Member Resources",
                "Networking Events",
                "Email Support",
                "Monthly Newsletter",
            ],
            highlight: false,
        },
        {
            tier: "Professional",
            icon: Crown,
            color: "#F59E0B",
            price: "Contact Us",
            description: "For established businesses seeking strategic advantage",
            features: [
                "All Associate Benefits",
                "Priority Consulting Access",
                "Exclusive Workshops",
                "Annual Strategy Session",
                "24/7 Support Hotline",
                "Member Directory Listing",
            ],
            highlight: true,
        },
        {
            tier: "Executive",
            icon: Trophy,
            color: "#EC4899",
            price: "Contact Us",
            description: "Premium tier for industry leaders and innovators",
            features: [
                "All Professional Benefits",
                "Dedicated Account Manager",
                "Custom Research Reports",
                "Board Advisory Services",
                "VIP Event Access",
                "Speaking Opportunities",
                "Unlimited Consultations",
            ],
            highlight: false,
        },
    ];

    const benefits = [
        {
            icon: Users,
            title: "Exclusive Network",
            description: "Connect with industry leaders and decision-makers",
        },
        {
            icon: Book,
            title: "Knowledge Resources",
            description: "Access premium content, research, and insights",
        },
        {
            icon: Briefcase,
            title: "Business Growth",
            description: "Tools and support to scale your business",
        },
        {
            icon: Globe,
            title: "Global Opportunities",
            description: "International partnerships and collaboration",
        },
        {
            icon: Award,
            title: "Recognition",
            description: "Industry awards and certification programs",
        },
        {
            icon: Shield,
            title: "Priority Support",
            description: "Fast-track access to expert consultation",
        },
    ];

    return (
        <div className="w-full" style={{ backgroundColor: colors.lightBg }}>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;700&display=swap');

                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .tier-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .tier-card:hover {
                    transform: translateY(-12px) scale(1.02);
                }

                .glass-effect {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
            `}</style>

            {/* Hero Section */}
            <section
                className="relative py-20 md:py-32 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.navyBlue} 100%)`,
                    fontFamily: "'DM Sans', sans-serif",
                }}
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
                        style={{ background: colors.gold, animationDelay: "0s" }}
                    />
                    <div
                        className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
                        style={{ background: "#EC4899", animationDelay: "2s" }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl animate-float"
                        style={{ background: "#8B5CF6", animationDelay: "4s" }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 space-y-6">
                        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect mb-4">
                            <Sparkles className="w-5 h-5" style={{ color: colors.gold }} />
                            <span
                                className="text-sm font-semibold tracking-wide uppercase"
                                style={{ color: colors.gold }}
                            >
                                Exclusive Membership
                            </span>
                        </div>

                        <h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: colors.white,
                                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                            }}
                        >
                            Join an Elite{" "}
                            <span
                                className="relative inline-block"
                                style={{ color: colors.gold }}
                            >
                                Community
                                <div
                                    className="absolute -bottom-2 left-0 right-0 h-3 opacity-50"
                                    style={{ background: colors.gold, filter: "blur(8px)" }}
                                />
                            </span>
                        </h1>

                        <p
                            className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: "rgba(255,255,255,0.9)" }}
                        >
                            Connect with visionary leaders, access exclusive resources, and unlock
                            opportunities that transform your business trajectory.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.gold} 0%, #D4A574 100%)`,
                                    color: colors.navyBlue,
                                }}
                            >
                                <MessageCircle className="w-6 h-6" />
                                Apply Now on WhatsApp
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* Animated Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                        {[
                            { value: "500+", label: "Active Members" },
                            { value: "50+", label: "Industry Partners" },
                            { value: "100+", label: "Annual Events" },
                            { value: "24/7", label: "Support Access" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
                            >
                                <div
                                    className="text-4xl font-black mb-2"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        color: colors.gold,
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm font-medium"
                                    style={{ color: "rgba(255,255,255,0.8)" }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
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

            {/* Membership Tiers */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl sm:text-5xl font-black mb-4"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: colors.navyBlue,
                            }}
                        >
                            Choose Your{" "}
                            <span style={{ color: colors.gold }}>Membership Tier</span>
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: `${colors.navyBlue}99` }}
                        >
                            Select the membership level that aligns with your business goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                        {membershipTiers.map((tier, index) => {
                            const IconComponent = tier.icon;
                            const isHighlight = tier.highlight;

                            return (
                                <div
                                    key={index}
                                    className={`tier-card relative rounded-3xl p-8 ${isHighlight ? "md:-mt-4 md:mb-4" : ""
                                        }`}
                                    style={{
                                        background: isHighlight
                                            ? `linear-gradient(135deg, ${tier.color}20 0%, ${tier.color}10 100%)`
                                            : "rgba(255,255,255,0.05)",
                                        border: `2px solid ${isHighlight ? tier.color : "rgba(255,255,255,0.1)"
                                            }`,
                                        backdropFilter: "blur(20px)",
                                        backgroundColor: colors.white,
                                    }}
                                    onMouseEnter={() => setHoveredTier(index)}
                                    onMouseLeave={() => setHoveredTier(null)}
                                >
                                    {isHighlight && (
                                        <div
                                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold"
                                            style={{
                                                background: `linear-gradient(135deg, ${tier.color} 0%, #D4A574 100%)`,
                                                color: colors.navyBlue,
                                            }}
                                        >
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <div className="text-center mb-8">
                                        <div
                                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4"
                                            style={{
                                                background: `${tier.color}30`,
                                                border: `2px solid ${tier.color}`,
                                            }}
                                        >
                                            <IconComponent
                                                className="w-10 h-10"
                                                style={{ color: tier.color }}
                                            />
                                        </div>

                                        <h3
                                            className="text-2xl font-black mb-2"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            {tier.tier}
                                        </h3>

                                        <p
                                            className="text-sm mb-4"
                                            style={{ color: `${colors.navyBlue}99` }}
                                        >
                                            {tier.description}
                                        </p>

                                        <div
                                            className="text-3xl font-black"
                                            style={{
                                                fontFamily: "'Playfair Display', serif",
                                                color: tier.color,
                                            }}
                                        >
                                            {tier.price}
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {tier.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircle
                                                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                                                    style={{ color: tier.color }}
                                                />
                                                <span
                                                    className="text-sm"
                                                    style={{ color: colors.navyBlue }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                            `Hello! I'm interested in the ${tier.tier} membership tier. I'd like to learn more about the benefits and application process.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                                        style={{
                                            background: isHighlight
                                                ? `linear-gradient(135deg, ${tier.color} 0%, #D4A574 100%)`
                                                : colors.navyBlue,
                                            color: colors.white,
                                        }}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Member Benefits */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.white }}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2
                            className="text-4xl sm:text-5xl font-black mb-4"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: colors.navyBlue,
                            }}
                        >
                            Membership{" "}
                            <span style={{ color: colors.gold }}>Benefits</span>
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: `${colors.navyBlue}99` }}
                        >
                            Unlock exclusive advantages designed to accelerate your success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{
                                        border: `2px solid ${colors.navyBlue}15`,
                                        backgroundColor: colors.lightBg,
                                    }}
                                >
                                    <div
                                        className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
                                        style={{
                                            background: `${colors.gold}20`,
                                            border: `2px solid ${colors.gold}50`,
                                        }}
                                    >
                                        <IconComponent
                                            className="w-7 h-7"
                                            style={{ color: colors.gold }}
                                        />
                                    </div>

                                    <h3
                                        className="text-xl font-bold mb-3"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        {benefit.title}
                                    </h3>

                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: `${colors.navyBlue}99` }}
                                    >
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How to Join */}
            <section
                className="relative py-20 px-4 sm:px-6 lg:px-8"
                style={{
                    background: `linear-gradient(135deg, ${colors.darkBg} 0%, ${colors.navyBlue} 100%)`,
                }}
            >
                <div className="max-w-5xl mx-auto">
                    <div
                        className="rounded-3xl p-12 md:p-16 text-center"
                        style={{
                            background: `linear-gradient(135deg, ${colors.gold}20 0%, rgba(255,255,255,0.1) 100%)`,
                            border: `2px solid ${colors.gold}40`,
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        <Zap className="w-16 h-16 mx-auto mb-6" style={{ color: colors.gold }} />

                        <h2
                            className="text-4xl sm:text-5xl font-black mb-6"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                color: colors.white,
                            }}
                        >
                            Ready to Join?
                        </h2>

                        <p
                            className="text-lg mb-8 max-w-2xl mx-auto"
                            style={{ color: "rgba(255,255,255,0.9)" }}
                        >
                            Start your membership journey today. Connect with us on WhatsApp, and
                            our team will guide you through the application process and answer all
                            your questions.
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                                    style={{ background: colors.gold, color: colors.navyBlue }}
                                >
                                    1
                                </div>
                                <span style={{ color: colors.white }}>
                                    Send us a message on WhatsApp
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                                    style={{ background: colors.gold, color: colors.navyBlue }}
                                >
                                    2
                                </div>
                                <span style={{ color: colors.white }}>
                                    Discuss your needs with our team
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                                    style={{ background: colors.gold, color: colors.navyBlue }}
                                >
                                    3
                                </div>
                                <span style={{ color: colors.white }}>
                                    Complete your application
                                </span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                                <div
                                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
                                    style={{ background: colors.gold, color: colors.navyBlue }}
                                >
                                    4
                                </div>
                                <span style={{ color: colors.white }}>
                                    Welcome to the community!
                                </span>
                            </div>
                        </div>

                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.gold} 0%, #D4A574 100%)`,
                                color: colors.navyBlue,
                            }}
                        >
                            <MessageCircle className="w-7 h-7" />
                            Start Your Application
                            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                        </a>

                        <p
                            className="text-sm mt-6"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                            WhatsApp: {whatsappNumber}
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Accent */}
            <div className="h-32" style={{ backgroundColor: colors.lightBg }} />
        </div>
    );
}
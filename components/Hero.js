"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Award } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: colors.lightBg }}>
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(circle at 30% 50%, ${colors.gold}15, transparent 50%), 
                                     radial-gradient(circle at 70% 50%, ${colors.navyBlue}10, transparent 50%)`,
                    }}
                />
            </div>

            {/* Animated floating shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-float"
                    style={{ backgroundColor: colors.gold }}
                />
                <div
                    className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 animate-float-delayed"
                    style={{ backgroundColor: colors.navyBlue }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm animate-slide-in"
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
                                Trusted by 100+ Organizations
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up-delayed">
                                <span className="block" style={{ color: colors.navyBlue }}>
                                    Protect Your Business with
                                </span>
                                <span
                                    className="block mt-2 bg-gradient-to-r bg-clip-text text-transparent animate-gradient"
                                    style={{
                                        backgroundImage: `linear-gradient(90deg, ${colors.gold}, #d4a960, ${colors.gold})`,
                                        backgroundSize: '200% auto',
                                    }}
                                >
                                    Expert Risk Management
                                </span>
                            </h1>

                            <p className="text-xl leading-relaxed max-w-xl" style={{ color: `${colors.navyBlue}cc` }}>
                                Comprehensive risk assessment and compliance solutions that safeguard
                                your organization and enable sustainable growth.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-more-delayed">
                            <Button
                                size="lg"
                                className="group font-semibold px-8 py-6 text-base rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.gold}, #d4a960)`,
                                    color: colors.white,
                                    boxShadow: `0 10px 30px ${colors.gold}30`,
                                }}
                                asChild
                            >
                                <Link href="/request-consultation" className="flex items-center gap-2">
                                    Get Free Consultation
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="font-semibold px-8 py-6 text-base rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    backgroundColor: colors.white,
                                    borderColor: colors.navyBlue,
                                    borderWidth: '2px',
                                    color: colors.navyBlue,
                                }}
                                asChild
                            >
                                <Link href="/services">
                                    Explore Services
                                </Link>
                            </Button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-8 pt-4 animate-fade-in-up-most-delayed">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5" style={{ color: colors.gold }} />
                                <span className="text-sm font-medium" style={{ color: colors.navyBlue }}>
                                    SOC 2 Certified
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5" style={{ color: colors.gold }} />
                                <span className="text-sm font-medium" style={{ color: colors.navyBlue }}>
                                    98% Client Retention
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
                        {/* Large Featured Card */}
                        <div
                            className="col-span-2 rounded-2xl p-8 text-white shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${colors.navyBlue}, #0d4a72)`,
                            }}
                        >
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <p className="text-blue-100 text-sm font-medium">
                                        Annual Risk Reduction
                                    </p>
                                    <p className="text-5xl font-bold">
                                        67%
                                    </p>
                                    <div className="flex items-center gap-1 text-sm text-blue-100">
                                        <TrendingUp className="w-4 h-4" />
                                        <span>Average for our clients</span>
                                    </div>
                                </div>
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur"
                                    style={{ backgroundColor: `${colors.gold}30` }}
                                >
                                    <Shield className="w-8 h-8" style={{ color: colors.gold }} />
                                </div>
                            </div>
                        </div>

                        {/* Small Stat Card 1 */}
                        <div
                            className="bg-white rounded-xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{ borderColor: `${colors.gold}20` }}
                        >
                            <div className="space-y-2">
                                <p className="text-sm font-medium" style={{ color: `${colors.navyBlue}99` }}>
                                    Years Experience
                                </p>
                                <p className="text-4xl font-bold" style={{ color: colors.navyBlue }}>
                                    15+
                                </p>
                            </div>
                        </div>

                        {/* Small Stat Card 2 */}
                        <div
                            className="bg-white rounded-xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{ borderColor: `${colors.gold}20` }}
                        >
                            <div className="space-y-2">
                                <p className="text-sm font-medium" style={{ color: `${colors.navyBlue}99` }}>
                                    Active Clients
                                </p>
                                <p className="text-4xl font-bold" style={{ color: colors.navyBlue }}>
                                    100+
                                </p>
                            </div>
                        </div>

                        {/* Feature Pills */}
                        <div className="col-span-2 flex flex-wrap gap-2">
                            {[
                                "Regulatory Compliance",
                                "Risk Assessment",
                                "Business Continuity",
                                "ISO Certified"
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                                    style={{
                                        backgroundColor: `${colors.gold}10`,
                                        borderColor: `${colors.gold}30`,
                                        color: colors.navyBlue,
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Client Logos */}
                <div className="mt-20 pt-12 border-t animate-fade-in" style={{ borderColor: `${colors.gold}20` }}>
                    <p className="text-center text-sm font-medium mb-8" style={{ color: `${colors.navyBlue}80` }}>
                        Trusted by leading organizations worldwide
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="h-8 w-32 rounded transition-opacity hover:opacity-60"
                                style={{ backgroundColor: colors.navyBlue }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-30px) rotate(-5deg);
                    }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slide-in {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes gradient {
                    0% {
                        background-position: 0% center;
                    }
                    50% {
                        background-position: 100% center;
                    }
                    100% {
                        background-position: 0% center;
                    }
                }

                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 10s ease-in-out infinite;
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                .animate-fade-in-up-delayed {
                    animation: fade-in-up 0.8s ease-out 0.2s backwards;
                }

                .animate-fade-in-up-more-delayed {
                    animation: fade-in-up 0.8s ease-out 0.4s backwards;
                }

                .animate-fade-in-up-most-delayed {
                    animation: fade-in-up 0.8s ease-out 0.6s backwards;
                }

                .animate-fade-in-right {
                    animation: fade-in-right 1s ease-out 0.3s backwards;
                }

                .animate-slide-in {
                    animation: slide-in 0.6s ease-out;
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out 0.8s backwards;
                }

                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
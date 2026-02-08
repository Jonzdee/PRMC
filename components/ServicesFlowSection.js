"use client";
import React from "react";
import {
    Shield,
    FileCheck,
    TrendingUp,
    Users,
    Lock,
    Target,
    AlertTriangle,
    Building,
} from "lucide-react";
import {
    AnimatedBeam,
    BeamContainer,
    BeamNode,
} from "@/components/ui/AnimatedBeam";

export function ServicesFlowSection() {
    const containerRef = React.useRef(null);
    const businessRef = React.useRef(null);
    const coreRef = React.useRef(null);
    const riskRef = React.useRef(null);
    const complianceRef = React.useRef(null);
    const governanceRef = React.useRef(null);
    const cyberRef = React.useRef(null);
    const continuityRef = React.useRef(null);
    const growthRef = React.useRef(null);

    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
    };

    return (
        <section className="py-12 md:py-20" style={{ backgroundColor: colors.white }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border backdrop-blur-sm"
                        style={{
                            backgroundColor: `${colors.gold}15`,
                            borderColor: `${colors.gold}40`,
                        }}
                    >
                        <Shield className="w-3.5 h-3.5 md:w-4 md:h-4" style={{ color: colors.gold }} />
                        <span className="text-xs md:text-sm font-semibold" style={{ color: colors.navyBlue }}>
                            Our Approach
                        </span>
                    </div>

                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold px-4"
                        style={{ color: colors.navyBlue }}
                    >
                        How We Protect Your Business
                    </h2>

                    <p
                        className="text-base md:text-lg max-w-2xl mx-auto px-4"
                        style={{ color: `${colors.navyBlue}99` }}
                    >
                        Our integrated platform connects your business to comprehensive risk management
                        solutions, delivering measurable protection and sustainable growth.
                    </p>
                </div>

                {/* Animated Beam Visualization */}
                <div className="mb-12 md:mb-16">
                    <BeamContainer
                        innerRef={containerRef}
                        className="mx-auto flex flex-col md:flex-row w-full items-center md:justify-between rounded-xl md:rounded-2xl border p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 shadow-lg md:shadow-xl transition-all duration-300 gap-8 md:gap-12 lg:gap-16 xl:gap-20 min-h-[600px] md:min-h-[500px]"
                        style={{
                            backgroundColor: `${colors.navyBlue}05`,
                            borderColor: `${colors.gold}30`,
                        }}
                    >
                        {/* Your Business */}
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                            <BeamNode
                                innerRef={businessRef}
                                className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 border-2 transition-transform hover:scale-110 duration-300"
                                style={{
                                    borderColor: `${colors.navyBlue}40`,
                                    backgroundColor: `${colors.navyBlue}10`,
                                }}
                            >
                                <Building className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" style={{ color: colors.navyBlue }} />
                            </BeamNode>
                            <span
                                className="font-semibold text-xs md:text-sm uppercase tracking-wider text-center whitespace-nowrap mt-2"
                                style={{ color: colors.navyBlue }}
                            >
                                Your Business
                            </span>
                        </div>

                        {/* Center - Core Platform & Services */}
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-24 flex-1 md:justify-center w-full md:w-auto">
                            {/* Core Platform */}
                            <div className="flex flex-col items-center gap-2">
                                <BeamNode
                                    innerRef={coreRef}
                                    className="h-20 w-20 md:h-22 md:w-22 lg:h-24 lg:w-24 border-2 transition-transform hover:scale-110 duration-300"
                                    style={{
                                        borderColor: `${colors.gold}40`,
                                        backgroundColor: `${colors.gold}15`,
                                    }}
                                >
                                    <Shield className="h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12" style={{ color: colors.gold }} />
                                </BeamNode>
                                <span
                                    className="font-bold text-xs md:text-sm uppercase tracking-wider text-center whitespace-nowrap mt-2"
                                    style={{ color: colors.gold }}
                                >
                                    PRMC Platform
                                </span>
                            </div>

                            {/* Services Layer */}
                            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full md:w-auto">
                                {[
                                    { ref: riskRef, icon: AlertTriangle, label: "Risk Assessment" },
                                    { ref: complianceRef, icon: FileCheck, label: "Compliance" },
                                    { ref: governanceRef, icon: Users, label: "Governance" },
                                    { ref: cyberRef, icon: Lock, label: "Cyber Security" },
                                    { ref: continuityRef, icon: Target, label: "Continuity" },
                                ].map((service, index) => (
                                    <div key={index} className="flex items-center gap-3 md:gap-4">
                                        <BeamNode
                                            innerRef={service.ref}
                                            className="h-11 w-11 md:h-12 md:w-12 border-2 transition-transform hover:scale-110 duration-300"
                                            style={{
                                                borderColor: `${colors.navyBlue}30`,
                                                backgroundColor: `${colors.navyBlue}08`,
                                            }}
                                        >
                                            <service.icon className="h-5.5 w-5.5 md:h-6 md:w-6" style={{ color: colors.navyBlue }} />
                                        </BeamNode>
                                        <span
                                            className="font-medium text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap"
                                            style={{ color: `${colors.navyBlue}cc` }}
                                        >
                                            {service.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Business Growth */}
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                            <BeamNode
                                innerRef={growthRef}
                                className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 border-2 transition-transform hover:scale-110 duration-300"
                                style={{
                                    borderColor: `${colors.gold}40`,
                                    backgroundColor: `${colors.gold}10`,
                                }}
                            >
                                <TrendingUp className="h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10" style={{ color: colors.gold }} />
                            </BeamNode>
                            <span
                                className="font-semibold text-xs md:text-sm uppercase tracking-wider text-center whitespace-nowrap mt-2"
                                style={{ color: colors.gold }}
                            >
                                Growth
                            </span>
                        </div>

                        {/* Connections: Business to Core */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={businessRef}
                            toRef={coreRef}
                            duration={4}
                            curvature={0}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />

                        {/* Core to Services */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={riskRef}
                            duration={4}
                            delay={0.3}
                            curvature={-0.3}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={complianceRef}
                            duration={4}
                            delay={0.5}
                            curvature={-0.15}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={governanceRef}
                            duration={4}
                            delay={0.7}
                            curvature={0}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={cyberRef}
                            duration={4}
                            delay={0.9}
                            curvature={0.15}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={continuityRef}
                            duration={4}
                            delay={1.1}
                            curvature={0.3}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />

                        {/* Services to Growth */}
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={riskRef}
                            toRef={growthRef}
                            duration={4}
                            delay={1.3}
                            curvature={0.3}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={complianceRef}
                            toRef={growthRef}
                            duration={4}
                            delay={1.5}
                            curvature={0.15}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={governanceRef}
                            toRef={growthRef}
                            duration={4}
                            delay={1.7}
                            curvature={0}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={cyberRef}
                            toRef={growthRef}
                            duration={4}
                            delay={1.9}
                            curvature={-0.15}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={continuityRef}
                            toRef={growthRef}
                            duration={4}
                            delay={2.1}
                            curvature={-0.3}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                    </BeamContainer>
                </div>
            </div>
        </section>
    );
}
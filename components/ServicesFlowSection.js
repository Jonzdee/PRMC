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
                <div className="mb-12 md:mb-16 overflow-x-auto">
                    <BeamContainer
                        innerRef={containerRef}
                        className="mx-auto flex w-full min-w-[640px] sm:min-w-0 items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 rounded-xl md:rounded-2xl border p-6 sm:p-8 md:p-10 shadow-lg md:shadow-xl transition-all duration-300"
                        style={{
                            backgroundColor: `${colors.navyBlue}05`,
                            borderColor: `${colors.gold}30`,
                        }}
                    >
                        {/* Your Business */}
                        <div className="flex flex-col items-center gap-1.5 md:gap-2 flex-shrink-0">
                            <BeamNode
                                innerRef={businessRef}
                                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-2 transition-transform hover:scale-110 duration-300"
                                style={{
                                    borderColor: `${colors.navyBlue}40`,
                                    backgroundColor: `${colors.navyBlue}10`,
                                }}
                            >
                                <Building className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" style={{ color: colors.navyBlue }} />
                            </BeamNode>
                            <span
                                className="font-semibold text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-center whitespace-nowrap"
                                style={{ color: colors.navyBlue }}
                            >
                                Your Business
                            </span>
                        </div>

                        {/* Core Platform */}
                        <div className="flex flex-col items-center gap-1.5 md:gap-2 flex-shrink-0">
                            <BeamNode
                                innerRef={coreRef}
                                className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 border-2 transition-transform hover:scale-110 duration-300"
                                style={{
                                    borderColor: `${colors.gold}40`,
                                    backgroundColor: `${colors.gold}15`,
                                }}
                            >
                                <Shield className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" style={{ color: colors.gold }} />
                            </BeamNode>
                            <span
                                className="font-bold text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-center whitespace-nowrap"
                                style={{ color: colors.gold }}
                            >
                                PRMC Platform
                            </span>
                        </div>

                        {/* Services Layer */}
                        <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 flex-shrink-0">
                            {[
                                { ref: riskRef, icon: AlertTriangle, label: "Risk Assessment" },
                                { ref: complianceRef, icon: FileCheck, label: "Compliance" },
                                { ref: governanceRef, icon: Users, label: "Governance" },
                                { ref: cyberRef, icon: Lock, label: "Cyber Security" },
                                { ref: continuityRef, icon: Target, label: "Continuity" },
                            ].map((service, index) => (
                                <div key={index} className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                                    <BeamNode
                                        innerRef={service.ref}
                                        className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 border-2 transition-transform hover:scale-110 duration-300"
                                        style={{
                                            borderColor: `${colors.navyBlue}30`,
                                            backgroundColor: `${colors.navyBlue}08`,
                                        }}
                                    >
                                        <service.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6" style={{ color: colors.navyBlue }} />
                                    </BeamNode>
                                    <span
                                        className="font-medium text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider whitespace-nowrap"
                                        style={{ color: `${colors.navyBlue}cc` }}
                                    >
                                        {service.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Business Growth */}
                        <div className="flex flex-col items-center gap-1.5 md:gap-2 flex-shrink-0">
                            <BeamNode
                                innerRef={growthRef}
                                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 border-2 transition-transform hover:scale-110 duration-300"
                                style={{
                                    borderColor: `${colors.gold}40`,
                                    backgroundColor: `${colors.gold}10`,
                                }}
                            >
                                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" style={{ color: colors.gold }} />
                            </BeamNode>
                            <span
                                className="font-semibold text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider text-center whitespace-nowrap"
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
                            curvature={-0.4}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={complianceRef}
                            duration={4}
                            delay={0.5}
                            curvature={-0.2}
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
                            curvature={0.2}
                            gradientStartColor={colors.gold}
                            gradientStopColor={colors.navyBlue}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={coreRef}
                            toRef={continuityRef}
                            duration={4}
                            delay={1.1}
                            curvature={0.4}
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
                            curvature={0.4}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={complianceRef}
                            toRef={growthRef}
                            duration={4}
                            delay={1.5}
                            curvature={0.2}
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
                            curvature={-0.2}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                        <AnimatedBeam
                            containerRef={containerRef}
                            fromRef={continuityRef}
                            toRef={growthRef}
                            duration={4}
                            delay={2.1}
                            curvature={-0.4}
                            gradientStartColor={colors.navyBlue}
                            gradientStopColor={colors.gold}
                        />
                    </BeamContainer>
                </div>
            </div>
        </section>
    );
}
"use client";
import React from "react";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Lock,
  Scale,
  BookOpen,
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
      icon: Shield,
      title: "Regulatory Mapping",
      description: "Identify all applicable regulations and compliance requirements for your industry",
    },
    {
      icon: FileCheck,
      title: "Gap Analysis",
      description: "Comprehensive assessment of current vs. required compliance posture",
    },
    {
      icon: Scale,
      title: "Framework Design",
      description: "Custom risk management frameworks aligned with international standards",
    },
    {
      icon: Lock,
      title: "Control Implementation",
      description: "Deploy robust controls and monitoring systems to manage identified risks",
    },
  ];

  const benefits = [
    "Avoid costly regulatory penalties and legal exposure",
    "Build stakeholder confidence with robust compliance",
    "Streamline audit processes and reduce compliance burden",
    "Protect reputation through proactive risk management",
    "Enable strategic decision-making with risk intelligence",
    "Meet regulatory requirements across multiple jurisdictions",
    "Create sustainable compliance culture throughout organization",
    "Gain competitive advantage through superior risk management",
  ];

  const process = [
    {
      step: "01",
      title: "Compliance Scoping",
      description: "Map your regulatory landscape and identify all applicable requirements and standards.",
    },
    {
      step: "02",
      title: "Current State Assessment",
      description: "Evaluate existing policies, procedures, and controls against requirements.",
    },
    {
      step: "03",
      title: "Risk Identification",
      description: "Identify, categorize, and prioritize operational, financial, and strategic risks.",
    },
    {
      step: "04",
      title: "Framework Development",
      description: "Design comprehensive risk and compliance management framework.",
    },
    {
      step: "05",
      title: "Implementation Support",
      description: "Deploy controls, policies, procedures, and training programs.",
    },
    {
      step: "06",
      title: "Monitoring & Optimization",
      description: "Establish ongoing monitoring, reporting, and continuous improvement processes.",
    },
  ];

  const deliverables = [
    "Regulatory Compliance Gap Analysis Report",
    "Risk Register & Heat Map",
    "Compliance Framework Documentation",
    "Policies & Procedures Manual",
    "Risk Mitigation Action Plan",
    "Compliance Calendar & Monitoring Tools",
    "Staff Training Materials & Workshops",
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
                  <Shield className="w-4 h-4" style={{ color: colors.gold }} />
                  <span className="text-sm font-semibold" style={{ color: colors.gold }}>
                    Our Services
                  </span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                  style={{ color: colors.white }}
                >
                  Risk & Compliance{" "}
                  <span style={{ color: colors.gold }}>Setup / Upgrade</span>
                </h1>

                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ color: `${colors.white}cc` }}
                >
                  Build a comprehensive risk management and compliance framework that protects
                  your business, satisfies regulators, and creates sustainable competitive
                  advantage.
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
                  🛡️
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
                Comprehensive risk and compliance solutions tailored to your industry and
                regulatory environment
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
                  Why Invest in Risk & Compliance?
                </h2>

                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: `${colors.navyBlue}99` }}
                >
                  Our expert team delivers frameworks that go beyond checkbox compliance to
                  create real business value and competitive advantage.
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
                  <AlertTriangle className="w-12 h-12" style={{ color: colors.gold }} />
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: colors.white }}
                  >
                    The Cost of Non-Compliance
                  </h3>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: `${colors.white}cc` }}
                  >
                    Regulatory penalties can reach millions of naira. Beyond fines, the
                    reputational damage and operational disruption from compliance failures can
                    be devastating. Invest in prevention, not remediation.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div>
                      <div
                        className="text-4xl font-bold mb-2"
                        style={{ color: colors.gold }}
                      >
                        100%
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: `${colors.white}dd` }}
                      >
                        Regulatory Coverage
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-4xl font-bold mb-2"
                        style={{ color: colors.gold }}
                      >
                        24/7
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: `${colors.white}dd` }}
                      >
                        Risk Monitoring
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
                Our Implementation Process
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: `${colors.navyBlue}99` }}
              >
                A systematic approach to building sustainable risk and compliance capabilities
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
              Ready to Build Your Risk & Compliance Framework?
            </h2>
            <p
              className="text-lg md:text-xl mb-10"
              style={{ color: `${colors.white}cc` }}
            >
              Schedule a consultation to discuss your regulatory requirements and risk
              management needs.
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
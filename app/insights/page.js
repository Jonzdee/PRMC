"use client";
import React, { useState } from "react";
import {
    BookOpen,
    TrendingUp,
    Award,
    Download,
    Clock,
    ArrowRight,
    Filter,
    Search,
    Calendar,
    FileText,
    BarChart3,
    Lightbulb,
    Shield,
    Globe,
    Users,
    ChevronRight,
} from "lucide-react";

export default function Page() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
        darkBg: "#051D2E",
    };

    const categories = [
        "All",
        "Risk Management",
        "Compliance",
        "Cyber Security",
        "Industry Trends",
        "Case Studies",
    ];

    const featuredInsight = {
        title: "The Future of Risk Management in 2026",
        excerpt:
            "Explore emerging trends reshaping how organizations approach risk, from AI-driven analytics to predictive modeling and real-time monitoring systems.",
        category: "Industry Trends",
        date: "February 10, 2026",
        readTime: "8 min read",
        image: "🌐",
        author: "PRMC Research Team",
    };

    const insights = [
        {
            title: "Building a Resilient Cybersecurity Framework",
            excerpt:
                "A comprehensive guide to implementing robust cybersecurity measures that protect your organization from evolving digital threats.",
            category: "Cyber Security",
            date: "February 5, 2026",
            readTime: "6 min read",
            image: "🔒",
        },
        {
            title: "Compliance Best Practices for Financial Services",
            excerpt:
                "Navigate complex regulatory requirements with proven strategies that ensure compliance while maintaining operational efficiency.",
            category: "Compliance",
            date: "January 28, 2026",
            readTime: "10 min read",
            image: "📊",
        },
        {
            title: "Case Study: How ABC Corp Reduced Risk by 60%",
            excerpt:
                "Learn how a leading manufacturing company transformed their risk management approach and achieved measurable results in just 6 months.",
            category: "Case Studies",
            date: "January 20, 2026",
            readTime: "12 min read",
            image: "🎯",
        },
        {
            title: "AI-Powered Risk Assessment: A Game Changer",
            excerpt:
                "Discover how artificial intelligence is revolutionizing risk assessment, enabling faster, more accurate threat identification.",
            category: "Risk Management",
            date: "January 15, 2026",
            readTime: "7 min read",
            image: "🤖",
        },
        {
            title: "The Role of Governance in Modern Organizations",
            excerpt:
                "Explore effective governance frameworks that align risk management with strategic objectives and stakeholder expectations.",
            category: "Risk Management",
            date: "January 8, 2026",
            readTime: "9 min read",
            image: "⚖️",
        },
        {
            title: "Data Privacy Regulations: What You Need to Know",
            excerpt:
                "Stay ahead of evolving data privacy laws across different jurisdictions with our comprehensive compliance roadmap.",
            category: "Compliance",
            date: "December 30, 2025",
            readTime: "11 min read",
            image: "🛡️",
        },
    ];

    const resources = [
        {
            title: "2026 Risk Management Industry Report",
            description: "Annual insights into global risk trends and predictions",
            type: "PDF Report",
            size: "2.5 MB",
            downloads: "1,200+",
        },
        {
            title: "Compliance Checklist Template",
            description: "Comprehensive framework for regulatory compliance",
            type: "Excel Template",
            size: "850 KB",
            downloads: "3,400+",
        },
        {
            title: "Cyber Security Assessment Tool",
            description: "Evaluate your organization's security posture",
            type: "Interactive Tool",
            size: "Web-based",
            downloads: "2,100+",
        },
    ];

    const stats = [
        { number: "500+", label: "Published Insights" },
        { number: "50K+", label: "Monthly Readers" },
        { number: "120+", label: "Industry Reports" },
        { number: "95%", label: "Reader Satisfaction" },
    ];

    const filteredInsights = insights.filter((insight) => {
        const matchesCategory =
            selectedCategory === "All" || insight.category === selectedCategory;
        const matchesSearch =
            insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
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
                            <Lightbulb className="w-4 h-4" style={{ color: colors.gold }} />
                            <span className="text-sm font-semibold" style={{ color: colors.gold }}>
                                Insights & Resources
                            </span>
                        </div>

                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                            style={{ color: colors.white }}
                        >
                            Knowledge That
                            <br />
                            <span style={{ color: colors.gold }}>Empowers Action</span>
                        </h1>

                        <p
                            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: `${colors.white}cc` }}
                        >
                            Stay ahead with expert insights, industry trends, and actionable strategies to
                            strengthen your risk management approach.
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

            {/* Stats Section */}
            <section className="py-12 md:py-16 -mt-8 md:-mt-12 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative p-6 md:p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl text-center"
                                style={{
                                    backgroundColor: colors.white,
                                    border: `2px solid ${colors.gold}30`,
                                }}
                            >
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.gold}05 0%, ${colors.navyBlue}05 100%)`,
                                    }}
                                />

                                <div className="relative">
                                    <div
                                        className="text-3xl md:text-4xl font-bold mb-2"
                                        style={{ color: colors.navyBlue }}
                                    >
                                        {stat.number}
                                    </div>
                                    <p
                                        className="text-sm md:text-base font-medium"
                                        style={{ color: `${colors.navyBlue}99` }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Insight */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl"
                        style={{
                            background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                        }}
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 lg:p-16">
                            <div className="space-y-6">
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                                    style={{
                                        backgroundColor: `${colors.gold}20`,
                                        border: `1px solid ${colors.gold}60`,
                                    }}
                                >
                                    <TrendingUp className="w-4 h-4" style={{ color: colors.gold }} />
                                    <span className="text-xs font-semibold" style={{ color: colors.gold }}>
                                        Featured Insight
                                    </span>
                                </div>

                                <h2
                                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                                    style={{ color: colors.white }}
                                >
                                    {featuredInsight.title}
                                </h2>

                                <p
                                    className="text-lg leading-relaxed"
                                    style={{ color: `${colors.white}cc` }}
                                >
                                    {featuredInsight.excerpt}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" style={{ color: colors.gold }} />
                                        <span style={{ color: `${colors.white}dd` }}>
                                            {featuredInsight.date}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" style={{ color: colors.gold }} />
                                        <span style={{ color: `${colors.white}dd` }}>
                                            {featuredInsight.readTime}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-4 h-4" style={{ color: colors.gold }} />
                                        <span style={{ color: `${colors.white}dd` }}>
                                            {featuredInsight.author}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: colors.gold,
                                        color: colors.navyBlue,
                                    }}
                                >
                                    Read Full Article
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </button>
                            </div>

                            <div
                                className="flex items-center justify-center text-8xl md:text-9xl"
                                style={{ color: `${colors.gold}40` }}
                            >
                                {featuredInsight.image}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 md:py-12" style={{ backgroundColor: colors.white }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                        <div className="relative flex-1 w-full md:max-w-md">
                            <Search
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                                style={{ color: `${colors.navyBlue}99` }}
                            />
                            <input
                                type="text"
                                placeholder="Search insights..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 outline-none transition-all duration-300"
                                style={{
                                    borderColor: `${colors.navyBlue}20`,
                                    backgroundColor: colors.lightBg,
                                }}
                            />
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor:
                                            selectedCategory === category
                                                ? colors.navyBlue
                                                : `${colors.navyBlue}10`,
                                        color:
                                            selectedCategory === category
                                                ? colors.white
                                                : colors.navyBlue,
                                        border: `2px solid ${selectedCategory === category
                                                ? colors.navyBlue
                                                : `${colors.navyBlue}20`
                                            }`,
                                    }}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredInsights.map((insight, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                style={{
                                    border: `2px solid ${colors.navyBlue}15`,
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.gold}05 0%, ${colors.navyBlue}05 100%)`,
                                    }}
                                />

                                <div className="relative p-6 space-y-4">
                                    <div
                                        className="flex items-center justify-center w-16 h-16 rounded-xl text-4xl"
                                        style={{
                                            backgroundColor: `${colors.gold}15`,
                                            border: `2px solid ${colors.gold}40`,
                                        }}
                                    >
                                        {insight.image}
                                    </div>

                                    <div>
                                        <div
                                            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                                            style={{
                                                backgroundColor: `${colors.navyBlue}10`,
                                                color: colors.navyBlue,
                                            }}
                                        >
                                            {insight.category}
                                        </div>

                                        <h3
                                            className="text-xl font-bold mb-3 leading-tight"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            {insight.title}
                                        </h3>

                                        <p
                                            className="text-sm leading-relaxed mb-4"
                                            style={{ color: `${colors.navyBlue}cc` }}
                                        >
                                            {insight.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t-2" style={{ borderColor: `${colors.navyBlue}10` }}>
                                        <div className="flex items-center gap-4 text-xs">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3.5 h-3.5" style={{ color: colors.gold }} />
                                                <span style={{ color: `${colors.navyBlue}99` }}>
                                                    {insight.date}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3.5 h-3.5" style={{ color: colors.gold }} />
                                                <span style={{ color: `${colors.navyBlue}99` }}>
                                                    {insight.readTime}
                                                </span>
                                            </div>
                                        </div>

                                        <ChevronRight
                                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                            style={{ color: colors.gold }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredInsights.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-lg" style={{ color: `${colors.navyBlue}99` }}>
                                No insights found matching your criteria.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Resources Section */}
            <section
                className="py-20 md:py-32"
                style={{
                    background: `linear-gradient(180deg, ${colors.white} 0%, ${colors.lightBg} 100%)`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-4"
                            style={{
                                backgroundColor: `${colors.gold}15`,
                                borderColor: `${colors.gold}40`,
                            }}
                        >
                            <Download className="w-4 h-4" style={{ color: colors.gold }} />
                            <span className="text-sm font-semibold" style={{ color: colors.navyBlue }}>
                                Free Resources
                            </span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-bold mb-4"
                            style={{ color: colors.navyBlue }}
                        >
                            Download Our Resources
                        </h2>
                        <p
                            className="text-lg max-w-2xl mx-auto"
                            style={{ color: `${colors.navyBlue}99` }}
                        >
                            Access valuable tools, templates, and reports to enhance your risk management
                            capabilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                style={{
                                    backgroundColor: colors.white,
                                    border: `2px solid ${colors.gold}30`,
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
                                        <FileText className="w-7 h-7" style={{ color: colors.navyBlue }} />
                                    </div>

                                    <div>
                                        <h3
                                            className="text-xl font-bold mb-2"
                                            style={{ color: colors.navyBlue }}
                                        >
                                            {resource.title}
                                        </h3>
                                        <p
                                            className="text-sm mb-4"
                                            style={{ color: `${colors.navyBlue}cc` }}
                                        >
                                            {resource.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between text-xs">
                                        <span
                                            className="px-3 py-1 rounded-full"
                                            style={{
                                                backgroundColor: `${colors.gold}15`,
                                                color: colors.navyBlue,
                                            }}
                                        >
                                            {resource.type}
                                        </span>
                                        <span style={{ color: `${colors.navyBlue}99` }}>
                                            {resource.size}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <span
                                            className="text-sm font-medium"
                                            style={{ color: `${colors.navyBlue}99` }}
                                        >
                                            {resource.downloads} downloads
                                        </span>
                                        <button
                                            className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105"
                                            style={{
                                                backgroundColor: colors.navyBlue,
                                                color: colors.white,
                                            }}
                                        >
                                            <Download className="w-4 h-4" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section
                className="py-20 md:py-32"
                style={{
                    background: `linear-gradient(135deg, ${colors.navyBlue} 0%, ${colors.darkBg} 100%)`,
                }}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6"
                        style={{
                            backgroundColor: `${colors.gold}20`,
                            borderColor: `${colors.gold}60`,
                        }}
                    >
                        <BookOpen className="w-4 h-4" style={{ color: colors.gold }} />
                        <span className="text-sm font-semibold" style={{ color: colors.gold }}>
                            Stay Updated
                        </span>
                    </div>

                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: colors.white }}
                    >
                        Get the Latest Insights Delivered
                    </h2>
                    <p
                        className="text-lg md:text-xl mb-10"
                        style={{ color: `${colors.white}cc` }}
                    >
                        Subscribe to our newsletter and receive expert risk management insights, industry
                        trends, and exclusive resources directly in your inbox.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 rounded-lg outline-none"
                            style={{
                                backgroundColor: colors.white,
                                color: colors.navyBlue,
                            }}
                        />
                        <button
                            className="group px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                            style={{
                                backgroundColor: colors.gold,
                                color: colors.navyBlue,
                            }}
                        >
                            Subscribe
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                    <p
                        className="text-sm mt-4"
                        style={{ color: `${colors.white}99` }}
                    >
                        Join 10,000+ professionals staying ahead of risk management trends.
                    </p>
                </div>
            </section>

            <style jsx>{`
                input:focus {
                    border-color: ${colors.gold} !important;
                }
            `}</style>
        </div>
    );
}
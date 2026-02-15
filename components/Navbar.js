"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Shield, ChevronDown } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //  Brand Colors
    const colors = {
        navyBlue: "#0A3A5C",
        gold: "#B8954A",
        white: "#FFFFFF",
        lightBg: "#F8FAFC",
    };

    const mainLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
       
    ];

    const servicesLinks = [
        { name: "Business Health Check & Performance Diagnosis", href: "/services/business-health-check" },
        { name: "Risk & Compliance Setup / Upgrade", href: "/services/risk-compliance" },
        { name: "Product & Market Profitability Analysis", href: "/services/profitability-analysis" },
        { name: "Business Continuity & Crisis Preparedness", href: "/services/business-continuity" },
        { name: "Cyber, IT & Data Protection Setup/Review", href: "/services/cyber-protection" },
        { name: "Internal Controls & Process Improvement", href: "/services/internal-controls" },
        { name: "Credit, Financial & Cashflow Assessment", href: "/services/financial-assessment" },
        { name: "Governance, Leadership & Ethics Support", href: "/services/governance-support" },
        { name: "Strategy Execution & Business Growth Support", href: "/services/strategy-execution" },
        { name: "Staff Capability & Specialized Training", href: "/services/staff-training" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled ? "shadow-xl" : "shadow-md"
            }`}
            style={{
                backgroundColor: colors.white,
            }}
        >
            {/* Top accent bar with brand gold */}
            <div
                className="h-1"
                style={{
                    background: `linear-gradient(90deg, ${colors.gold} 0%, #d4a960 50%, ${colors.gold} 100%)`,
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex items-center group">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="relative">
                                <div
                                    className="absolute inset-0 blur-xl rounded-full transition-all duration-300 opacity-40 group-hover:opacity-60"
                                    style={{
                                        backgroundColor: colors.gold,
                                    }}
                                ></div>

                            </div>

                            <Image
                                src="/prmc-logo.jpeg"
                                alt="Pro Risk Management and Compliance Company Limited"
                                width={80}
                                height={50}
                                className="cursor-pointer rounded-full transition-all duration-300 group-hover:opacity-90"
                                priority
                            
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {mainLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                                    pathname === link.href
                                        ? ""
                                        : ""
                                }`}
                                style={{
                                    color: pathname === link.href ? colors.navyBlue : colors.navyBlue,
                                }}
                                onMouseEnter={(e) => {
                                    if (pathname !== link.href) {
                                        e.currentTarget.style.backgroundColor = colors.lightBg;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (pathname !== link.href) {
                                        e.currentTarget.style.backgroundColor = "transparent";
                                    }
                                }}
                            >
                                {pathname === link.href && (
                                    <>
                                        <span
                                            className="absolute inset-0 rounded-lg"
                                            style={{
                                                backgroundColor: `${colors.gold}10`,
                                                border: `1px solid ${colors.gold}40`,
                                            }}
                                        ></span>
                                        <span
                                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                                            style={{ backgroundColor: colors.gold }}
                                        ></span>
                                    </>
                                )}
                                <span className="relative">{link.name}</span>
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                            <DropdownMenuTrigger asChild>
                                <button
                                    className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1`}
                                    style={{
                                        color: pathname.startsWith("/services") ? colors.navyBlue : colors.navyBlue,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!pathname.startsWith("/services")) {
                                            e.currentTarget.style.backgroundColor = colors.lightBg;
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!pathname.startsWith("/services")) {
                                            e.currentTarget.style.backgroundColor = "transparent";
                                        }
                                    }}
                                >
                                    {pathname.startsWith("/services") && (
                                        <>
                                            <span
                                                className="absolute inset-0 rounded-lg"
                                                style={{
                                                    backgroundColor: `${colors.gold}10`,
                                                    border: `1px solid ${colors.gold}40`,
                                                }}
                                            ></span>
                                            <span
                                                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                                                style={{ backgroundColor: colors.gold }}
                                            ></span>
                                        </>
                                    )}
                                    <span className="relative">Services</span>
                                    <ChevronDown
                                        className={`w-4 h-4 relative transition-transform duration-300 ${
                                            servicesOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="center"
                                className="w-80 shadow-2xl mt-2 border"
                                style={{
                                    backgroundColor: colors.white,
                                    borderColor: `${colors.gold}30`,
                                }}
                            >
                                <div className="py-2 max-h-96 overflow-y-auto">
                                    {servicesLinks.map((link) => (
                                        <DropdownMenuItem
                                            key={link.href}
                                            className="cursor-pointer transition-colors duration-200"
                                            style={{
                                                color: pathname === link.href ? colors.gold : colors.navyBlue,
                                            }}
                                            onMouseEnter={(e) => {
                                                if (pathname !== link.href) {
                                                    e.currentTarget.style.backgroundColor = colors.lightBg;
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = "transparent";
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block w-full px-2 py-2.5 text-sm ${
                                                    pathname === link.href ? "font-bold" : "font-medium"
                                                }`}
                                            >
                                                {link.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link
                            href="/insights"
                            className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300`}
                            style={{
                                color: pathname === "/insights" ? colors.navyBlue : colors.navyBlue,
                            }}
                            onMouseEnter={(e) => {
                                if (pathname !== "/insights") {
                                    e.currentTarget.style.backgroundColor = colors.lightBg;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pathname !== "/insights") {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }
                            }}
                        >
                            {pathname === "/insights" && (
                                <>
                                    <span
                                        className="absolute inset-0 rounded-lg"
                                        style={{
                                            backgroundColor: `${colors.gold}10`,
                                            border: `1px solid ${colors.gold}40`,
                                        }}
                                    ></span>
                                    <span
                                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                                        style={{ backgroundColor: colors.gold }}
                                    ></span>
                                </>
                            )}
                            <span className="relative">Insights</span>
                        </Link>

                        <Link
                            href="/contact"
                            className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300`}
                            style={{
                                color: pathname === "/contact" ? colors.navyBlue : colors.navyBlue,
                            }}
                            onMouseEnter={(e) => {
                                if (pathname !== "/contact") {
                                    e.currentTarget.style.backgroundColor = colors.lightBg;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (pathname !== "/contact") {
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }
                            }}
                        >
                            {pathname === "/contact" && (
                                <>
                                    <span
                                        className="absolute inset-0 rounded-lg"
                                        style={{
                                            backgroundColor: `${colors.gold}10`,
                                            border: `1px solid ${colors.gold}40`,
                                        }}
                                    ></span>
                                    <span
                                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                                        style={{ backgroundColor: colors.gold }}
                                    ></span>
                                </>
                            )}
                            <span className="relative">Contact</span>
                        </Link>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-3">

                        <Button
                            size="sm"
                            className="text-white font-bold shadow-lg transition-all duration-300 border-0 hover:shadow-xl hover:scale-105"
                            style={{
                                background: `linear-gradient(135deg, ${colors.gold}, #d4a960)`,
                                boxShadow: `0 4px 15px ${colors.gold}50`,
                            }}
                            asChild
                        >
                            <Link href="/member">Become A Member</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <DropdownMenu open={mobileOpen} onOpenChange={setMobileOpen}>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    style={{ color: colors.navyBlue }}
                                >
                                    <div className="space-y-1.5 w-6">
                                        <span
                                            className={`block w-full h-0.5 transition-all duration-300`}
                                            style={{
                                                backgroundColor: colors.navyBlue,
                                                transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none",
                                            }}
                                        ></span>
                                        <span
                                            className={`block w-full h-0.5 transition-all duration-300`}
                                            style={{
                                                backgroundColor: colors.navyBlue,
                                                opacity: mobileOpen ? 0 : 1,
                                            }}
                                        ></span>
                                        <span
                                            className={`block w-full h-0.5 transition-all duration-300`}
                                            style={{
                                                backgroundColor: colors.navyBlue,
                                                transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                                            }}
                                        ></span>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="w-80 shadow-2xl mt-2 border"
                                style={{
                                    backgroundColor: colors.white,
                                    borderColor: `${colors.gold}30`,
                                }}
                            >
                                <div className="py-2">
                                    {mainLinks.map((link) => (
                                        <DropdownMenuItem
                                            key={link.href}
                                            className="focus:bg-slate-50"
                                        >
                                            <Link
                                                href={link.href}
                                                className={`block w-full px-2 py-2 ${
                                                    pathname === link.href ? "font-bold" : "font-semibold"
                                                }`}
                                                style={{
                                                    color: pathname === link.href ? colors.gold : colors.navyBlue,
                                                }}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}

                                    <div
                                        className="px-4 py-2 text-xs font-bold uppercase tracking-wider mt-2"
                                        style={{ color: colors.gold }}
                                    >
                                        Our Services
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {servicesLinks.map((link) => (
                                            <DropdownMenuItem
                                                key={link.href}
                                                className="focus:bg-slate-50"
                                            >
                                                <Link
                                                    href={link.href}
                                                    className={`block w-full px-2 py-2 text-sm ${
                                                        pathname === link.href ? "font-bold" : "font-medium"
                                                    }`}
                                                    style={{
                                                        color: pathname === link.href ? colors.gold : colors.navyBlue,
                                                    }}
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>

                                    <DropdownMenuItem className="focus:bg-slate-50 mt-2">
                                        <Link
                                            href="/insights"
                                            className={`block w-full px-2 py-2 ${
                                                pathname === "/insights" ? "font-bold" : "font-semibold"
                                            }`}
                                            style={{
                                                color: pathname === "/insights" ? colors.gold : colors.navyBlue,
                                            }}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Insights
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem className="focus:bg-slate-50">
                                        <Link
                                            href="/contact"
                                            className={`block w-full px-2 py-2 ${
                                                pathname === "/contact" ? "font-bold" : "font-semibold"
                                            }`}
                                            style={{
                                                color: pathname === "/contact" ? colors.gold : colors.navyBlue,
                                            }}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Contact
                                        </Link>
                                    </DropdownMenuItem>

                                    <div className="border-t my-2" style={{ borderColor: `${colors.gold}30` }}></div>


                                    <DropdownMenuItem className="focus:bg-slate-50">
                                        <Link
                                            href="/member"
                                            className="w-full px-2 py-2 font-bold"
                                            style={{ color: colors.gold }}
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Become a member →
                                        </Link>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Bottom subtle divider with gold accent */}
            <div
                className="h-px"
                style={{
                    background: `linear-gradient(90deg, transparent, ${colors.gold}20, transparent)`,
                }}
            ></div>
        </nav>
    );
}
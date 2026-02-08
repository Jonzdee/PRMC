"use client";

import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

export const AnimatedBeam = ({
                                 containerRef,
                                 fromRef,
                                 toRef,
                                 curvature = 0,
                                 reverse = false,
                                 duration = 3,
                                 delay = 0,
                                 pathColor = "gray",
                                 pathWidth = 2,
                                 pathOpacity = 0.2,
                                 gradientStartColor = "#ffaa40",
                                 gradientStopColor = "#9c40ff",
                                 className,
                             }) => {
    const id = useId();
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updatePath = () => {
            if (containerRef.current && fromRef.current && toRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const fromRect = fromRef.current.getBoundingClientRect();
                const toRect = toRef.current.getBoundingClientRect();

                const startX = fromRect.left - containerRect.left + fromRect.width / 2;
                const startY = fromRect.top - containerRect.top + fromRect.height / 2;
                const endX = toRect.left - containerRect.left + toRect.width / 2;
                const endY = toRect.top - containerRect.top + toRect.height / 2;

                const controlPointX = startX + (endX - startX) / 2;
                const controlPointY = startY + (endY - startY) / 2 + curvature * 100;

                const d = `M ${startX},${startY} Q ${controlPointX},${controlPointY} ${endX},${endY}`;
                setPathD(d);
                setSvgDimensions({
                    width: containerRect.width,
                    height: containerRect.height,
                });
            }
        };

        updatePath();

        window.addEventListener("resize", updatePath);
        return () => window.removeEventListener("resize", updatePath);
    }, [containerRef, fromRef, toRef, curvature]);

    return (
        <svg
            fill="none"
            width={svgDimensions.width}
            height={svgDimensions.height}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
                className
            )}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
        >
            <defs>
                <linearGradient
                    id={`gradient-${id}`}
                    gradientUnits="userSpaceOnUse"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                >
                    <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
                    <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1" />
                    <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path
                d={pathD}
                stroke={pathColor}
                strokeWidth={pathWidth}
                strokeOpacity={pathOpacity}
                strokeLinecap="round"
            />
            <path
                d={pathD}
                stroke={`url(#gradient-${id})`}
                strokeWidth={pathWidth}
                strokeOpacity="1"
                strokeLinecap="round"
                style={{
                    strokeDasharray: "1000",
                    strokeDashoffset: reverse ? "0" : "1000",
                    animation: `beam-animation ${duration}s ease-in-out ${delay}s infinite`,
                }}
            />
            <style>{`
        @keyframes beam-animation {
          0% {
            stroke-dashoffset: ${reverse ? "0" : "1000"};
          }
          50% {
            stroke-dashoffset: ${reverse ? "1000" : "0"};
          }
          100% {
            stroke-dashoffset: ${reverse ? "0" : "1000"};
          }
        }
      `}</style>
        </svg>
    );
};

export const BeamContainer = ({ children, className, innerRef }) => {
    return (
        <div ref={innerRef} className={cn("relative", className)}>
            {children}
        </div>
    );
};

export const BeamNode = ({ children, className, innerRef }) => {
    return (
        <div
            ref={innerRef}
            className={cn(
                "relative flex items-center justify-center rounded-full",
                className
            )}
        >
            {children}
        </div>
    );
};
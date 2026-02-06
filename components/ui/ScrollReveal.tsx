"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    animation?: "slideUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft";
    className?: string;
    viewportOnce?: boolean;
    threshold?: number;
}

const animations: Record<string, { hidden: Variant; visible: Variant }> = {
    slideUp: {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
};

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    duration = 0.5,
    animation = "slideUp",
    className = "",
    viewportOnce = true,
    threshold = 0.2,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: viewportOnce, amount: threshold });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const selectedAnimation = animations[animation] || animations.slideUp;

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={{
                    hidden: selectedAnimation.hidden,
                    visible: selectedAnimation.visible,
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay, type: "spring", stiffness: 50 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

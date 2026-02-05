"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Button = ({
    children,
    onClick,
    variant = "primary",
    className,
    ...props
}) => {
    const baseStyles =
        "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95";

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-opacity-90 hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]",
        outline:
            "border border-primary text-primary hover:bg-primary/10",
        ghost:
            "text-foreground hover:text-primary hover:bg-white/5",
        glow:
            "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]",
        glass: "glass-button"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

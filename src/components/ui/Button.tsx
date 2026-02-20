import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/30 focus:ring-primary",
        secondary: "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-md hover:shadow-secondary/20 focus:ring-secondary",
        outline: "border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary",
        ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

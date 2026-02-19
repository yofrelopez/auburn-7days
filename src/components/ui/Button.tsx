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
        primary: "bg-sda-blue-600 hover:bg-sda-blue-700 text-white shadow-lg hover:shadow-sda-blue-500/30 focus:ring-sda-blue-500",
        secondary: "bg-sda-gold hover:bg-sda-gold-600 text-white shadow-md hover:shadow-sda-gold-500/20 focus:ring-sda-gold-500",
        outline: "border-2 border-sda-blue-600 text-sda-blue-600 hover:bg-sda-blue-50 focus:ring-sda-blue-500",
        ghost: "text-sda-blue-600 hover:bg-sda-blue-50 focus:ring-sda-blue-500",
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

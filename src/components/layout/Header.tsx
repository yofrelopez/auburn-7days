"use client";

import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Link from 'next/link';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change state if scrolled down more than 20 pixels
            setIsScrolled(window.scrollY > 20);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Call handler right away so state gets updated with initial window size
        handleScroll();

        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md border-b border-border/50 py-0 shadow-sm'
                    : 'bg-transparent py-2'
                }`}
        >
            <Container>
                <div className="flex justify-between items-center h-20 transition-all duration-300">
                    {/* Logo Area */}
                    <div className="flex items-center">
                        {/* We don't have an SVG logo here in code, so we adapt the text logo colors */}
                        <Link href="/" className="flex flex-col group">
                            <span className={`text-2xl font-serif font-bold leading-none transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                                Auburn
                            </span>
                            <span className={`text-xs font-sans tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-secondary' : 'text-yellow-400'}`}>
                                SDA Church
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#campaign" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-yellow-400 drop-shadow-sm'}`}>
                            The Campaign
                        </Link>
                        <Link href="#about" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-yellow-400 drop-shadow-sm'}`}>
                            About Us
                        </Link>
                        <Link href="#contact" className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-yellow-400 drop-shadow-sm'}`}>
                            Contact
                        </Link>
                        {/* Donate button can stay primary as it usually stands out, but perhaps a gold/white variant if not scrolled? Using standard variant for now, or customizing slightly. */}
                        <Button variant="primary" size="sm" className={!isScrolled ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 border-none shadow-lg' : ''}>
                            Donate Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="md:hidden">
                        <button className={`p-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
}

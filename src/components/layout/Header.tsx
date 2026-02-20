import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
            <Container>
                <div className="flex justify-between items-center h-20">
                    {/* Logo Area */}
                    <div className="flex items-center">
                        <Link href="/" className="flex flex-col">
                            <span className="text-2xl font-serif font-bold text-primary leading-none">Auburn</span>
                            <span className="text-xs font-sans tracking-widest text-secondary uppercase">SDA Church</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#campaign" className="text-foreground hover:text-primary font-medium transition-colors">
                            The Campaign
                        </Link>
                        <Link href="#about" className="text-foreground hover:text-primary font-medium transition-colors">
                            About Us
                        </Link>
                        <Link href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">
                            Contact
                        </Link>
                        <Button variant="primary" size="sm">
                            Donate Now
                        </Button>
                    </nav>

                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="md:hidden">
                        <button className="text-primary p-2">
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

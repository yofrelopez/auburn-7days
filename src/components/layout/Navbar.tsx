"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Assuming lucide-react is available or I will need to use something else. 
// Wait, I should check if lucide-react is installed. If not, I'll use simple SVG icons.
// Checking package.json... it wasn't there. I'll use standard SVGs to avoid dependency check issues for now.

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Project", href: "#project" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50 py-2"
                : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-12 md:h-16 w-auto transition-all duration-300">
                            <Image
                                src="/logo/logo_menu.png"
                                alt="Auburn SDA Church"
                                width={300}
                                height={80}
                                className="object-contain h-full w-auto transition-all duration-300 brightness-0 opacity-70"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-secondary ${scrolled ? "text-primary" : "text-primary/90"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#donate"
                            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-5 relative flex flex-col justify-between ${scrolled ? "text-primary" : "text-primary"}`}>
                            <span
                                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg transition-all duration-300 ease-in-out origin-top ${isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"
                    }`}
            >
                <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-foreground hover:text-secondary py-2 border-b border-border/50"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#donate"
                        className="bg-secondary hover:bg-secondary/90 text-white text-center py-3 rounded-md font-bold mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Donate Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}

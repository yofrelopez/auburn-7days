import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground pt-12 md:pt-16 pb-8 border-t border-primary-foreground/20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 text-center md:text-left">
                    {/* Brand Column */}
                    <div className="space-y-4 flex flex-col items-center md:items-start sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <div className="relative h-16 md:h-20 w-auto transition-all duration-300">
                                <Image
                                    src="/logo/SDA-Logo-2.png"
                                    alt="Auburn SDA Church"
                                    width={240}
                                    height={80}
                                    className="object-contain h-full w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </Link>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            A community of believers dedicated to sharing the love of Jesus through service, worship, and fellowship.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 md:mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Our Mission", href: "#vision" },
                                { name: "The Project", href: "#legacy-circles" },
                                { name: "Upcoming Events", href: "#event-details" },
                                { name: "Register", href: "#rsvp" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-foreground/80 hover:text-white hover:translate-x-1 transition-all inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Times */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 md:mb-6 text-secondary">Service Times</h3>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <span className="font-semibold text-white">Adult Sabbath School</span>
                                <span className="text-primary-foreground/80">Saturday @ 10:00 AM</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-semibold text-white">Divine Worship</span>
                                <span className="text-primary-foreground/80">Saturday @ 11:30 AM</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="font-semibold text-white">Prayer Meeting</span>
                                <span className="text-primary-foreground/80">Wednesday @ 7:00 PM (Zoom)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4 md:mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-4 w-full max-w-xs mx-auto md:max-w-none md:mx-0">
                            <li className="flex items-start justify-center md:justify-start space-x-3 text-primary-foreground/80">
                                <svg className="w-5 h-5 mt-0.5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <a 
                                    href="https://www.google.com/maps/place/Auburn+Seventh-day+Adventist+Church/@34.0130461,-83.8250417,656m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88f5e9c72b491f4b:0x7eedc4e85c33e47c!8m2!3d34.0130461!4d-83.8250417!16s%2Fg%2F1tcxkm4b!18m1!1e1" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-left hover:text-white transition-colors"
                                >
                                    14 County Line-Auburn Rd<br />
                                    Auburn, GA 30011
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-primary-foreground/80">
                                <svg className="w-5 h-5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <div className="flex flex-col items-center md:items-start">
                                    <span>(770) 995-0811</span>
                                    <span>+1 (786) 286-7540</span>
                                </div>
                            </li>
                            <li className="flex items-center justify-center md:justify-start space-x-3 text-primary-foreground/80">
                                <svg className="w-5 h-5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>www.AuburnSDA.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-primary-foreground/60 text-sm">
                    <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Auburn Seventh-day Adventist Church. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

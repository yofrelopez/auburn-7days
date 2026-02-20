export default function RSVP() {
    return (
        <section id="rsvp" className="py-24 bg-white border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">

                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block">Join Us</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Confirm Your Attendance
                        </h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            Please RSVP by <span className="font-bold text-primary">April 15th, 2026</span>
                        </p>
                        <p className="text-sm text-primary/60 italic">
                            * This event is reserved for adults only.
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-border shadow-lg">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-semibold text-primary">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter first name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-semibold text-primary">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="Enter last name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-primary">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="attendance" className="text-sm font-semibold text-primary">Will you be attending?</label>
                                <div className="flex space-x-6 pt-2">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="radio" name="attendance" value="yes" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                        <span className="text-primary">Yes, I will attend</span>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="radio" name="attendance" value="no" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                        <span className="text-primary">No, I cannot attend</span>
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="guests" className="text-sm font-semibold text-primary">Number of Guests (including yourself)</label>
                                <select id="guests" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                                    <option value="1">1 Person</option>
                                    <option value="2">2 People</option>
                                    <option value="3">3 People</option>
                                    <option value="4">4 People</option>
                                </select>
                            </div>

                            <button type="button" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-xl shadow-md transform active:scale-[0.98] transition-all duration-200 mt-4">
                                Confirm Attendance
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

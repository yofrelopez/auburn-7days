export default function Pledge() {
    return (
        <section id="pledge" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">

                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase mb-4 inline-block">My Faith Promise</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Plant the Seed Today
                        </h2>
                        <p className="text-lg text-muted-foreground font-serif italic max-w-3xl mx-auto">
                            "Reap a lasting legacy tomorrow."
                        </p>
                        <p className="mt-4 text-primary/80 max-w-3xl mx-auto">
                            We understand that a project of this magnitude is a journey of faith. If you would like to join this vision but prefer to fulfill your contribution at a future date, you may register your pledge here.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-xl">
                        <form className="space-y-8">

                            {/* 1. Your Information */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-6 border-b border-border pb-2">1. Your Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-semibold text-primary">Pledge Type</label>
                                        <div className="flex space-x-6 pt-1">
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input type="radio" name="pledgeType" value="personal" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" defaultChecked />
                                                <span className="text-primary">Personal</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input type="radio" name="pledgeType" value="business" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                                <span className="text-primary">Business</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="pledgeName" className="text-sm font-semibold text-primary">Full Name / Business Name</label>
                                        <input type="text" id="pledgeName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="pledgePhone" className="text-sm font-semibold text-primary">Phone Number</label>
                                        <input type="tel" id="pledgePhone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="pledgeEmail" className="text-sm font-semibold text-primary">Email Address</label>
                                        <input type="email" id="pledgeEmail" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="pledgeAddress" className="text-sm font-semibold text-primary">Mailing Address</label>
                                        <input type="text" id="pledgeAddress" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" />
                                    </div>
                                </div>
                            </div>

                            {/* 2. Your Commitment */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-6 border-b border-border pb-2">2. Your Commitment</h3>
                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-primary block mb-3">Total Pledge Amount</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { label: "Cornerstone Legacy Partner", amount: "$50,000" },
                                            { label: "Visionary Pillar", amount: "$25,000" },
                                            { label: "Heritage Builder", amount: "$10,000" },
                                            { label: "Faith Supporter", amount: "$5,000" },
                                            { label: "Community Partner", amount: "$1,000" },
                                            { label: "Entry Contribution", amount: "$500" },
                                        ].map((tier) => (
                                            <label key={tier.amount} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all">
                                                <input type="radio" name="amount" value={tier.amount} className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                                <div className="ml-3">
                                                    <span className="block font-bold text-primary">{tier.amount}</span>
                                                    <span className="block text-xs text-muted-foreground">{tier.label}</span>
                                                </div>
                                            </label>
                                        ))}
                                        <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all md:col-span-2">
                                            <input type="radio" name="amount" value="other" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                            <div className="ml-3 flex-grow flex items-center">
                                                <span className="font-bold text-primary mr-3">Other Amount: $</span>
                                                <input type="text" className="border-b border-gray-300 focus:border-secondary outline-none bg-transparent w-full py-1" placeholder="Enter amount" />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Payment Schedule */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-6 border-b border-border pb-2">3. Payment Schedule</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="giveToday" className="text-sm font-semibold text-primary">Amount to Give Today</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                            <input type="text" id="giveToday" className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="0.00" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-primary">Remaining Balance Timeframe</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none">
                                            <option value="30">30 Days</option>
                                            <option value="90">90 Days</option>
                                            <option value="date">By Specific Date</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-semibold text-primary block mb-2">Giving Frequency</label>
                                        <div className="flex space-x-6">
                                            {["One-time", "Monthly", "Quarterly"].map((freq) => (
                                                <label key={freq} className="flex items-center space-x-3 cursor-pointer">
                                                    <input type="radio" name="frequency" value={freq.toLowerCase()} className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                                    <span className="text-primary">{freq}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Payment Method */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-6 border-b border-border pb-2">4. Payment Method</h3>
                                <div className="space-y-4">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="radio" name="paymentMethod" value="card" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                        <span className="text-primary">Credit Card / ACH (Secure Transaction)</span>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="radio" name="paymentMethod" value="adventist" className="w-5 h-5 text-secondary focus:ring-secondary border-gray-300" />
                                        <span className="text-primary">I will give via Adventist Giving</span>
                                    </label>
                                </div>
                            </div>

                            <button type="button" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-xl shadow-lg transform active:scale-[0.98] transition-all duration-200 text-lg">
                                Submit Pledge
                            </button>

                            <p className="text-xs text-center text-muted-foreground mt-4">
                                * IMPORTANT: All donations are tax-deductible. Donors will receive a contribution receipt for tax purposes in accordance with applicable laws.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

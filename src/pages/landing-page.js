import { useState } from "react";
import { Button } from "@headlessui/react";
import { Input } from "@headlessui/react";
import { Bell, Ticket, Zap, Shield, Phone } from "lucide-react";

import { PricingCards } from "../components/pricing";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    whatsappNumber: "",
    instagramID: "",
    email: "",
    name: "",
    preferredPlan: "$0",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedWhatsAppNumber = formData.whatsappNumber.replace(/\s+/g, "");

    const updatedFormData = {
      ...formData,
      whatsappNumber: `+971${cleanedWhatsAppNumber}`,
    };

    if (!updatedFormData.whatsappNumber.match(/^\+971\d{8,9}$/)) {
      alert("Please enter a valid 8 or 9 digit WhatsApp number.");
      return;
    }

    e.target.submit();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <a className="flex items-center" href="/">
            <Ticket className="h-6 w-6 text-primary animate-pulse" />
            <span className="ml-2 text-xl sm:text-2xl font-bold text-primary">
              TicketWhisper
            </span>
          </a>
        </div>
        <nav className="hidden sm:flex flex-1 justify-center gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#disclaimer"
          >
            Disclaimer
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      <nav className="block sm:hidden w-full mt-1 mb-4 text-center">
        <a
          className="inline-block mx-2 text-sm font-medium hover:underline underline-offset-4"
          href="#features"
        >
          Features
        </a>
        <a
          className="inline-block mx-2 text-sm font-medium hover:underline underline-offset-4"
          href="#how-it-works"
        >
          How It Works
        </a>
        <a
          className="inline-block mx-2 text-sm font-medium hover:underline underline-offset-4"
          href="#pricing"
        >
          Pricing
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#disclaimer"
        >
          Disclaimer
        </a>
      </nav>

      <main className="flex-1 lg:container max-w-[1200px] mx-auto text-center">
        {/* Hero Section */}
        <section
          className="w-full py-20 sm:py-32 md:py-36 bg-gradient-to-r from-purple-500 to-indigo-600"
          id="waitlist"
        >
          <div className="px-4 md:px-6 max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
              <div className="space-y-6 lg:space-y-8">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Secure Your Spot at Coldplay UAE 2025
                </h1>
                <p className="max-w-[700px] mx-auto text-gray-200 md:text-xl">
                  TicketWhisper scans listing sites 24/7 and sends notifications
                  faster than you can say "Viva La Vida". Be the first to know,
                  be the first to buy!
                </p>
              </div>

              <div className="w-full max-w-sm space-y-4 mx-auto">
                <form
                  action="https://getlaunchlist.com/s/IacnFu"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 bg-white/20 p-2 rounded w-full">
                    <span className="text-white">+971</span>
                    <input
                      className="bg-transparent text-white placeholder:text-gray-300 p-2 flex-1  focus:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      placeholder="Enter your WhatsApp number"
                      type="tel"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      maxLength={9} // Limit to UAE mobile number max length
                      required
                    />
                  </div>
                  <Input
                    className="bg-white/20 text-white placeholder:text-gray-300 p-2 rounded w-full  focus:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Instagram ID (Optional)"
                    type="text"
                    name="instagramID"
                    value={formData.instagramID}
                    onChange={handleChange}
                  />
                  <Input
                    className="bg-white/20 text-white placeholder:text-gray-300 p-2 rounded w-full  focus:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Enter your Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    className="bg-white/20 text-white placeholder:text-gray-300 p-2 rounded w-full  focus:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <div>
                    <label
                      className="block text-white mb-2"
                      htmlFor="preferredPlan"
                    >
                      Preferred Plan (You pay nothing now)
                    </label>
                    <select
                      id="preferredPlan"
                      name="preferredPlan"
                      value={formData.preferredPlan}
                      onChange={handleChange}
                      className="bg-white/20 text-white placeholder:text-gray-300 p-2 rounded w-full  focus:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      required
                    >
                      <option value="$0">$0 - Free Plan</option>
                      <option value="$10">$10 - Paid Plan</option>
                      <option value="$100">$100 - Concierge Service</option>
                    </select>
                  </div>
                  <Button
                    className="bg-white text-purple-600 hover:bg-gray-100 p-2 rounded w-full"
                    type="submit"
                  >
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-gray-300">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Add SVG animation */}
            <div className="flex justify-center mt-10">
              <Ticket className="h-16 w-16 text-white animate-bounce" />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-20 sm:py-32 md:py-36 bg-gray-100"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">
              Why Choose TicketWhisper?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                <Bell className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Instant Notifications
                </h3>
                <p className="text-gray-600">
                  Get alerts where you actually check - WhatsApp and Instagram.
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Our bot scans listings quicker than you can refresh your feed.
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is safe with us. No spam, we promise.
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                <Phone className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile First</h3>
                <p className="text-gray-600">
                  Designed for your phone, because who uses computers anymore?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-20 sm:py-32 md:py-36">
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">
              How TicketWhisper Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Sign Up</h3>
                <p className="text-gray-600">
                  Enter your WhatsApp number or Instagram handle. It's that
                  simple.
                </p>
                <h3 className="text-xl font-bold">2. We Scan Listing Sites</h3>
                <p className="text-gray-600">
                  Our bot tirelessly searches for Coldplay UAE 2025 tickets so
                  you don't have to.
                </p>
                <h3 className="text-xl font-bold">3. Get Notified</h3>
                <p className="text-gray-600">
                  Receive instant alerts so you can secure your tickets before
                  anyone else.
                </p>
              </div>
              <div>
                <img
                  src="/images/Coldplay-in-VR-3-scaled.webp"
                  alt="How it works"
                  className="rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-20 sm:py-32 md:py-36 bg-gray-100"
        >
          <div className="container px-4 md:px-6 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16">
              Simple Pricing
            </h2>
            <div className="mx-auto">
              <PricingCards />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-4 bg-purple-500">
        <div
          className="container px-4 md:px-6 max-w-[1200px] mx-auto text-center text-white"
          id="disclaimer"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8 mt-8 text-left">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-500" // Adjust classes as needed
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-yellow-800">
                  Disclaimer: We're Just the Messenger
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Hey there, ticket hunter! Before you get too excited, we
                    need to lay down some truth bombs:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      TicketWhisper is just a friendly neighborhood bot that
                      scans the internet for ticket listings. We're like that
                      cool friend who tells you when the pizza's ready – we
                      don't make the pizza, we just let you know it's there.
                    </li>
                    <li>
                      We have absolutely zero affiliation with ticket sellers,
                      venues, or even the artists themselves (though we'd love
                      to hang out with Coldplay, just saying).
                    </li>
                    <li>
                      Our bot is here to simplify your life, not complicate it.
                      We're just trying to help you score those sweet, sweet
                      concert tickets without refreshing a million tabs.
                    </li>
                    <li>
                      If something goes sideways with a ticket purchase,
                      remember: we're just the messenger. Don't shoot the
                      messenger, or in this case, don't @ the bot.
                    </li>
                    <li>
                      Use TicketWhisper at your own risk. We're not responsible
                      for any missed concerts, empty wallets, or sudden urges to
                      become a rockstar after securing front-row seats.
                    </li>
                  </ul>
                  <p className="mt-2">
                    By using TicketWhisper, you're agreeing to these terms and
                    acknowledging that we're just here to help, not to be your
                    ticket fairy godmother. Stay cool, and happy ticket hunting!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <p className="text-s">© 2024 TicketWhisper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

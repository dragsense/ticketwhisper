import { useState } from "react";
import { Button } from "@headlessui/react";
import { Input } from "@headlessui/react"; // Using a simple input as Headless UI does not provide a dedicated Input component
import { Bell, Ticket, Zap, Shield, Phone } from "lucide-react";

export default function LandingPage() {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [notifications, setNotifications] = useState([]);

  const handleAddNotification = (e) => {
    e.preventDefault();
    if (whatsappNumber) {
      setNotifications([...notifications, whatsappNumber]);
      setWhatsappNumber(""); // Clear input after adding
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="/">
          <Ticket className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-primary">TicketWhisper</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Your Spot at Coldplay UAE 2025
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  TicketWhisper scans listing sites 24/7 and sends notifications faster than you can say "Viva La Vida". 
                  Be the first to know, be the first to buy!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2" onSubmit={handleAddNotification}>
                  <Input
                    className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-gray-300 p-2 rounded"
                    placeholder="Enter your WhatsApp number"
                    type="tel"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 p-2 rounded" type="submit">
                    Get Notified
                  </Button>
                </form>
                <p className="text-xs text-gray-300">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Why Choose TicketWhisper?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Bell className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Instant Notifications</h3>
                <p className="text-gray-600">Get alerts where you actually check - WhatsApp and Instagram.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Our bot scans listings quicker than you can refresh your feed.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
                <p className="text-gray-600">Your data is safe with us. No spam, we promise.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile First</h3>
                <p className="text-gray-600">Designed for your phone, because who uses computers anymore?</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">How TicketWhisper Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Sign Up</h3>
                <p className="text-gray-600">Enter your WhatsApp number or Instagram handle. It's that simple.</p>
                <h3 className="text-xl font-bold">2. We Scan Listing Sites</h3>
                <p className="text-gray-600">Our bot tirelessly searches for Coldplay UAE 2025 tickets so you don't have to.</p>
                <h3 className="text-xl font-bold">3. Get Notified</h3>
                <p className="text-gray-600">Receive instant notifications on WhatsApp or Instagram. Not in your already overflowing inbox.</p>
                <h3 className="text-xl font-bold">4. Grab Your Tickets</h3>
                <p className="text-gray-600">Act fast and secure your spot at the UAE's biggest concert of 2025!</p>
              </div>
              <div className="relative h-[400px] w-full">
                <img
                  alt="Coldplay concert"
                  className="object-cover rounded-lg"
                  src="/placeholder.svg" // Adjust the src to your actual image path
                />
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Simple Pricing</h2>
            <div className="max-w-sm mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Free Forever</h3>
                <p className="text-4xl font-bold mb-4">$0</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Instant WhatsApp/Instagram notifications
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    No hidden fees
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Cancel anytime
                  </li>
                </ul>
                <Button className="bg-purple-600 text-white py-2 px-4 rounded" onClick={() => alert('Coming Soon!')}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container px-4 md:px-6 text-center">
          <p>&copy; {new Date().getFullYear()} TicketWhisper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

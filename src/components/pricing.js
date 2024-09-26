import { Disclosure } from "@headlessui/react"
import { Button } from "@headlessui/react";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    description: "Basic access to ticket alerts",
    features: [
      "Scans only Dubizzle for tickets",
      "Delayed alerts (up to 24 hours)",
      "WhatsApp alerts with basic listing details",
      "Daily scans",
      "Set up alerts for up to 2 keywords",
      "Basic email support (48-hour response time)",
    ],
    cta: "Get Started for Free",
  },
  {
    name: "Paid Plan",
    price: "$10",
    description: "Enhanced access and features",
    features: [
      "Multi-platform scanning (Dubizzle, Twitter, Reddit, and more)",
      "Instant alerts",
      "Custom alert settings",
      "Priority alerts (before Free Plan users)",
      "Real-time scanning (every hour)",
      "Price filtering",
      "Priority email support (24-hour response time)",
    ],
    cta: "Upgrade Now for $10",
  },
  {
    name: "Concierge Service",
    price: "$1,000",
    description: "VIP treatment and personalized service",
    features: [
      "Comprehensive scanning (including exclusive sources)",
      "Personalized alerts",
      "Dedicated ticket hunter",
      "End-to-end service (search, negotiate, purchase, delivery)",
      "Expert advice on ticket options",
      "Event planning assistance",
      "24/7 VIP support",
    ],
    cta: "Experience the VIP Treatment - Contact Us",
  },
]

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan) => (
        <Disclosure key={plan.name}>
          {({ open }) => (
            <div className="bg-white shadow-lg rounded-lg flex flex-col">
              <Disclosure className="w-full text-left p-4 rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <span className="text-2xl font-bold">{plan.price}</span>
                </div>
              </Disclosure>

              <Disclosure>
                <div className="p-4 flex-grow">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-left">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Disclosure>

              <div className="p-4 bg-gray-100 rounded-b-lg">
                <a href="#waitlist">
                <Button
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md"
                  >
                      {plan.cta}
                  </Button>
                  </a>
              </div>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
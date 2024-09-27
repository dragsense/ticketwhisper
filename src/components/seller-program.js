import React from "react";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export function SellerProgram() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-center">
          Seller Program
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Coming Soon: A Fair and Secure Way to Sell Your Tickets
        </p>
      </div>

      <div className="mt-20">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Verified Source
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Sell your tickets through a trusted, verified platform, ensuring
              buyers can purchase with confidence.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Fair Pricing
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Maintain a fair community by preventing ticket markup. Sell at
              face value to fellow Coldplay fans.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Scam Protection
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Our robust system protects both buyers and sellers from scams,
              ensuring a safe transaction process.
            </dd>
          </div>

          <div className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                Community-Driven
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Created by Coldplay fans for Coldplay fans. We understand the
              life-changing experience of a concert and want to share it fairly.
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-20 bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Coming Soon: Escrow Function
          </h3>
          <div className="mt-2 text-sm text-gray-500">
            <p>
              We're working on implementing an escrow function to provide
              additional protection for your money throughout the entire
              transaction process.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="#waitlist"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Join the Waitlist
        </a>
      </div>
    </>
  );
}

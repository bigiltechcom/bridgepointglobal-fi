import React from "react"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-blue-900 md:text-4xl">Let's Connect</h2>
          <p className="mt-4 text-lg text-blue-700">Contact Us</p>
          <div className="mt-8 rounded-xl bg-white p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
                  <img
                    src="/images/suldaan.jpg"
                    alt="Suldaan Said Ahmed - Founder and CEO"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-left">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Suldaan Said Ahmed</h3>
                <p className="text-blue-600 mb-4">Founder and CEO</p>
                <p className="text-gray-600 mb-6">
                  Are you a political leader, government official, or business executive seeking strategic guidance on
                  diplomacy, peace mediation, or high-level partnerships? With our extensive global network and direct
                  access to decision-makers, we can help you forge the right connections and achieve your vision.
                </p>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Email:</span>
                    <a href="mailto:info@bridgepointglobal.com" className="text-blue-600 hover:underline">
                      info@bridgepointglobal.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Phone:</span>
                    <a href="tel:+358458939080" className="text-blue-600 hover:underline">
                      +358 (0) 458939080
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <form className="mt-8 grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full rounded-md border border-blue-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 block w-full rounded-md border border-blue-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Your email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-blue-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Your message"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
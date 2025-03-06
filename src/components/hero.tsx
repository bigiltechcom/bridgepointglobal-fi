import React from "react"
import { Globe, Users, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter text-blue-900 md:text-5xl lg:text-6xl">
                BridgePoint Global
              </h1>
              <p className="max-w-[600px] text-lg text-blue-800 md:text-xl">
                A premier management consulting firm specializing in strategic advisory, political risk analysis, and
                high-level networking.
              </p>
              <p className="max-w-[600px] text-gray-600">
                We help organizations navigate complex political, economic, and regulatory landscapes, leveraging our
                extensive global network and direct access to key decision-makers in government and business.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-blue-800 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Let's Talk
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-md">
                <Globe className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900">Global Network</h3>
                <p className="mt-2 text-sm text-gray-600">Extensive connections with key decision-makers worldwide</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900">Expert Team</h3>
                <p className="mt-2 text-sm text-gray-600">Decades of experience in international diplomacy</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <Shield className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900">Strategic Insights</h3>
                <p className="mt-2 text-sm text-gray-600">Navigate complex geopolitical challenges</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-md">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900">High-Level Access</h3>
                <p className="mt-2 text-sm text-gray-600">Direct connections to political and business leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
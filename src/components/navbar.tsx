"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-800">BridgePoint Global</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-sm font-medium text-blue-900 hover:text-blue-600">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-blue-900 hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-blue-900 hover:text-blue-600">
            Contact
          </a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 px-6 text-sm font-medium text-white shadow-md transition-colors hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Let's Talk
          </a>
        </div>
        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-sm font-medium text-blue-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-blue-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-blue-900 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 px-4 text-sm font-medium text-white shadow-md transition-colors hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
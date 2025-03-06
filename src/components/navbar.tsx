"use client"

import React, { useState } from "react"
import { Menu, X, Sun, Moon, Monitor } from "lucide-react"
import { Logo } from "./logo"
import { useTheme } from "./theme-provider"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const ThemeIcon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div href="#home" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-xl font-bold text-blue-800">BridgePoint Global</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-sm font-medium text-foreground hover:text-primary">
            Home
          </a>
          <a href="#services" className="text-sm font-medium text-foreground hover:text-primary">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary">
            Contact
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent"
            title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
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
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-accent"
                title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} theme`}
              >
                <ThemeIcon className="h-5 w-5" />
              </button>
              <a
                href="#contact"
                className="flex-1 inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-blue-700 px-4 text-sm font-medium text-white shadow-md transition-colors hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
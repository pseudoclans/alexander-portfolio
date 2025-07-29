"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, Code, Briefcase, Mail } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all duration-300"
              aria-label="Go to home section"
            >
              Alexander A.E
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    }`}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md border-gray-800 w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Navigation
                    </h2>
                  </div>
                  {navItems.map((item) => {
                    const IconComponent = item.icon
                    const isActive = activeSection === item.href.substring(1)
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        }`}
                        aria-label={`Navigate to ${item.name} section`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

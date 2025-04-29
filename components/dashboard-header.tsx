"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Menu, X, User } from "lucide-react"

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">MarketMetrics</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Dashboard
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Campanhas
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Relatórios
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <Bell className="h-5 w-5" />
            </button>
            <div className="relative">
              <Link href="/login" className="flex items-center text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
                <span className="ml-2 text-sm font-medium">Admin</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1 border-t border-gray-200">
            <Link href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              Dashboard
            </Link>
            <Link href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              Campanhas
            </Link>
            <Link href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              Relatórios
            </Link>
            <div className="flex items-center justify-between px-3 py-2">
              <button className="text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
              </button>
              <Link href="/login" className="flex items-center text-gray-600 hover:text-gray-900">
                <User className="h-5 w-5" />
                <span className="ml-2 text-sm font-medium">Admin</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

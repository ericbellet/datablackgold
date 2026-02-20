'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Estrategia', href: '#estrategia' },
    { name: 'Formación', href: '#formacion' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-black-950/80 backdrop-blur-md border-b border-gold-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-black-950 font-bold text-xl">DB</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Data</span>
                <span className="text-gold-500">BlackGold</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-gold-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contacto"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 px-6 py-2 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/50"
              >
                Empezar
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gold-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black-900/95 backdrop-blur-lg border-t border-gold-900/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-gold-400 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 block px-3 py-2 text-base font-semibold rounded-lg mt-4"
              onClick={() => setIsOpen(false)}
            >
              Empezar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

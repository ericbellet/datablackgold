'use client'

import { Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { name: 'Estrategia Data & AI', href: '#servicios' },
      { name: 'Implementación', href: '#servicios' },
      { name: 'Formación', href: '#formacion' },
      { name: 'Consultoría', href: '#contacto' },
    ],
    company: [
      { name: 'Sobre Nosotros', href: '#equipo' },
      { name: 'Casos de Éxito', href: '#estrategia' },
      { name: 'Blog', href: '#' },
      { name: 'Contacto', href: '#contacto' },
    ],
  }

  return (
    <footer className="bg-black-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
                <span className="text-black-950 font-bold text-xl">DB</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Data</span>
                <span className="text-gold-500">BlackGold</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transformamos empresas con estrategia, implementación y formación en Data & AI.
              Los datos son el nuevo oro negro que impulsa tu negocio.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/belleteric/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black-900 border border-gold-500/20 rounded-lg flex items-center justify-center hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
              </a>
              <a
                href="mailto:contact@datablackgold.com"
                className="w-10 h-10 bg-black-900 border border-gold-500/20 rounded-lg flex items-center justify-center hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-gold-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} DataBlackGold. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold-400 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Términos
            </a>
            <a href="#" className="hover:text-gold-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

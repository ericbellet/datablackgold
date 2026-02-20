'use client'

import { Mail, Calendar, MessageSquare, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-black-950 to-black-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-gold-400 font-semibold text-sm">CONTACTO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforma tu Empresa con{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                IA y Data
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Primera consultoría gratuita. Analizamos tu caso y te mostramos el potencial real de la IA en tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:contact@datablackgold.com"
              className="group bg-black-950/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-black-950" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                Email
              </h3>
              <p className="text-gray-400 text-sm">
                contact@datablackgold.com
              </p>
            </a>

            <a
              href="#calendar"
              className="group bg-black-950/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-black-950" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                Agenda una Llamada
              </h3>
              <p className="text-gray-400 text-sm">
                30 min consultoría gratis
              </p>
            </a>

            <a
              href="https://www.linkedin.com/company/datablackgold"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black-950/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7 text-black-950" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                LinkedIn
              </h3>
              <p className="text-gray-400 text-sm">
                Síguenos en LinkedIn
              </p>
            </a>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  ¿Listo para Empezar?
                </h3>
                <p className="text-gray-400 text-lg">
                  Descubre cómo podemos ayudarte a extraer el máximo valor de tus datos con IA.
                </p>
              </div>
              <a
                href="mailto:contact@datablackgold.com"
                className="group flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 px-8 py-4 rounded-lg font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50 whitespace-nowrap"
              >
                <span>Contáctanos Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

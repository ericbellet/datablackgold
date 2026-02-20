'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse delay-700" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span className="text-sm text-gold-300 font-medium">
            AI-First & Data-Driven Transformation
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-white">Los Datos Son El Nuevo</span>
          <br />
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-glow">
            Oro Negro
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transformamos tu empresa en una organización{' '}
          <span className="text-gold-400 font-semibold">data-driven</span> y{' '}
          <span className="text-gold-400 font-semibold">AI-first</span>.
          Estrategia, implementación y formación para impulsar cada departamento de tu negocio.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#servicios"
            className="group bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 px-8 py-4 rounded-lg font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50 flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Descubre Cómo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#estrategia"
            className="border-2 border-gold-500/50 text-gold-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-500/10 transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
          >
            Ver Estrategia
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '10x', label: 'ROI Promedio' },
            { value: '500+', label: 'Proyectos AI' },
            { value: '98%', label: 'Satisfacción' },
            { value: '24/7', label: 'Soporte' },
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-black-900/50 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 hover:border-gold-500/40 transition-colors">
                <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

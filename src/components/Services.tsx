'use client'

import { Brain, Database, TrendingUp, Users, Rocket, GraduationCap, Target, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Target,
      title: 'Estrategia Data & AI',
      description: 'Diseñamos la hoja de ruta completa para transformar tu empresa en una organización data-driven y AI-first.',
      features: ['Auditoría tecnológica', 'Roadmap personalizado', 'KPIs y métricas', 'Arquitectura de datos'],
      color: 'from-gold-400 to-gold-600',
    },
    {
      icon: Rocket,
      title: 'Implementación Completa',
      description: 'De la estrategia a la ejecución. Implementamos soluciones de IA y analítica en todos tus departamentos.',
      features: ['MLOps y pipelines', 'BI y dashboards', 'Modelos predictivos', 'Automatización IA'],
      color: 'from-gold-500 to-amber-600',
    },
    {
      icon: Brain,
      title: 'IA para Sales & Marketing',
      description: 'Potencia tus equipos comerciales con IA generativa, predicción de ventas y personalización automática.',
      features: ['Lead scoring IA', 'Chatbots inteligentes', 'Personalización', 'Forecasting'],
      color: 'from-amber-400 to-orange-600',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Construimos la infraestructura de datos robusta que necesita tu empresa para escalar con IA.',
      features: ['Data lakes', 'ETL/ELT pipelines', 'Data warehouse', 'Real-time streaming'],
      color: 'from-gold-600 to-yellow-700',
    },
    {
      icon: TrendingUp,
      title: 'Analytics Avanzado',
      description: 'Convertimos tus datos en insights accionables con analítica avanzada y visualización impactante.',
      features: ['Business Intelligence', 'Análisis predictivo', 'Data storytelling', 'Custom dashboards'],
      color: 'from-yellow-500 to-gold-600',
    },
    {
      icon: Users,
      title: 'Tech Team Transformation',
      description: 'Elevamos las capacidades de tus equipos técnicos con las últimas tecnologías y mejores prácticas.',
      features: ['Code reviews', 'Arquitectura cloud', 'DevOps/MLOps', 'Best practices'],
      color: 'from-gold-500 to-amber-700',
    },
    {
      icon: GraduationCap,
      title: 'Formación Ejecutiva',
      description: 'Programas de formación customizados para que tu equipo domine IA, datos y tecnologías emergentes.',
      features: ['Workshops prácticos', 'Certificaciones', 'Training continuo', 'Mentoring 1:1'],
      color: 'from-amber-500 to-gold-600',
    },
    {
      icon: Zap,
      title: 'Quick Wins IA',
      description: 'Proyectos de alto impacto en 4-8 semanas. ROI rápido para demostrar el valor de la IA en tu empresa.',
      features: ['MVP en semanas', 'ROI medible', 'Proof of concept', 'Escalable'],
      color: 'from-gold-400 to-yellow-600',
    },
  ]

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-black-950 to-black-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-gold-400 font-semibold text-sm">NUESTROS SERVICIOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluciones End-to-End de{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Data & AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desde la estrategia hasta la implementación y formación.
            Todo lo que necesitas para convertirte en una empresa líder en IA y datos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-black-900/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-black-950" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contacto"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 px-8 py-4 rounded-lg font-bold text-lg hover:from-gold-400 hover:to-gold-500 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/50"
          >
            <span>Agenda una Consultoría Gratuita</span>
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Primera sesión sin compromiso. Analizamos tu caso y te mostramos el potencial.
          </p>
        </div>
      </div>
    </section>
  )
}

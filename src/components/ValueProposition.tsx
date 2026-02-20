'use client'

import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function ValueProposition() {
  const benefits = [
    'Estrategia personalizada alineada con tus objetivos de negocio',
    'Implementación ágil con resultados medibles en semanas',
    'Equipo multidisciplinar de expertos en AI, Data y Cloud',
    'Formación continua para autonomía de tus equipos',
    'ROI demostrable y KPIs en cada fase del proyecto',
    'Tecnología cloud-native y escalable desde día uno',
  ]

  const useCases = [
    {
      dept: 'Sales',
      title: 'Predice y Cierra Más',
      description: 'Lead scoring con IA, predicción de churn, automatización de seguimiento.',
      impact: '+45% conversión',
    },
    {
      dept: 'Marketing',
      title: 'Personalización 1:1',
      description: 'Segmentación inteligente, contenido generado con IA, optimización multicanal.',
      impact: '+60% engagement',
    },
    {
      dept: 'Operations',
      title: 'Eficiencia Máxima',
      description: 'Optimización de procesos, forecasting de demanda, automatización RPA + IA.',
      impact: '-35% costes',
    },
    {
      dept: 'Tech',
      title: 'Aceleración Dev',
      description: 'MLOps, CI/CD avanzado, code review con IA, testing automatizado.',
      impact: '3x velocidad',
    },
  ]

  return (
    <section id="estrategia" className="py-24 bg-black-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left side */}
          <div>
            <div className="inline-block bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-gold-400 font-semibold text-sm">POR QUÉ DATABLACKGOLD</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transformamos Datos en{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Ventaja Competitiva
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              No vendemos software. Construimos la capacidad interna de tu empresa para competir en la era de la IA.
              Estrategia, ejecución y transferencia de conocimiento.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center space-x-2 border-2 border-gold-500 text-gold-400 px-6 py-3 rounded-lg font-semibold hover:bg-gold-500 hover:text-black-950 transition-all duration-300 group"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right side - Stats card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-2xl blur-xl" />
            <div className="relative bg-black-950/80 backdrop-blur-sm border border-gold-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Impacto Real</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gold-500 pl-4">
                  <div className="text-4xl font-bold text-gold-400 mb-1">10x</div>
                  <div className="text-gray-400">ROI Medio en 12 meses</div>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <div className="text-4xl font-bold text-gold-400 mb-1">4-8</div>
                  <div className="text-gray-400">Semanas para primeros resultados</div>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <div className="text-4xl font-bold text-gold-400 mb-1">98%</div>
                  <div className="text-gray-400">Tasa de satisfacción clientes</div>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <div className="text-4xl font-bold text-gold-400 mb-1">24/7</div>
                  <div className="text-gray-400">Soporte y monitorización</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use cases by department */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IA & Data en Cada Departamento
            </h3>
            <p className="text-gray-400 text-lg">
              Transformación transversal con impacto medible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-black-950/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-gold-500 font-bold text-sm mb-3 uppercase tracking-wider">
                  {useCase.dept}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {useCase.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="pt-4 border-t border-gold-500/20">
                  <div className="text-2xl font-bold text-gold-400">{useCase.impact}</div>
                  <div className="text-xs text-gray-500">Impacto promedio</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

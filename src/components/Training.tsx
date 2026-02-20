'use client'

import { BookOpen, Users, Award, Rocket } from 'lucide-react'

export default function Training() {
  const programs = [
    {
      icon: Users,
      title: 'Executive AI Program',
      duration: '2 días',
      audience: 'C-Level & Directors',
      topics: ['Estrategia IA', 'ROI y casos de uso', 'Transformación digital', 'Governance'],
    },
    {
      icon: Rocket,
      title: 'AI for Business Teams',
      duration: '4 semanas',
      audience: 'Sales, Marketing, Ops',
      topics: ['IA aplicada', 'Prompt engineering', 'Automatización', 'Analytics'],
    },
    {
      icon: BookOpen,
      title: 'Data Science Bootcamp',
      duration: '12 semanas',
      audience: 'Tech Teams',
      topics: ['ML/DL', 'MLOps', 'Cloud AI', 'Production deployment'],
    },
    {
      icon: Award,
      title: 'Custom Workshops',
      duration: 'Flexible',
      audience: 'All levels',
      topics: ['ChatGPT/LLMs', 'Computer Vision', 'NLP', 'Custom AI'],
    },
  ]

  return (
    <section id="formacion" className="py-24 bg-gradient-to-b from-black-900 to-black-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-gold-400 font-semibold text-sm">FORMACIÓN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Empodera a Tu Equipo con{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              IA y Data
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Programas de formación práctica y certificaciones para que tu equipo domine
            las tecnologías que están transformando el mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className="bg-black-950/50 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-gold-500 to-gold-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black-950" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gold-400 font-semibold">{program.duration}</span>
                  <span className="text-gray-500">{program.audience}</span>
                </div>
                <ul className="space-y-2">
                  {program.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Formación In-Company Personalizada
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Adaptamos el contenido a tus necesidades específicas, tecnologías y casos de uso reales de tu empresa.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 px-8 py-4 rounded-lg font-bold hover:from-gold-400 hover:to-gold-500 transition-all duration-300"
          >
            Solicitar Programa Personalizado
          </a>
        </div>
      </div>
    </section>
  )
}

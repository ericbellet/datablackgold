'use client'

import { Linkedin, Award, Briefcase } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: 'Eric Bellet',
      role: 'Co-Founder & AI Lead',
      linkedin: 'https://www.linkedin.com/in/belleteric/',
      experience: '10+ años en Data & AI',
      highlights: [
        'Co-Founder de midoble.com',
        'AI Lead en Coches.net',
        'AI Lead en Milanuncios',
        'Experto en MLOps y IA aplicada',
      ],
      image: '/team/eric.jpg', // Placeholder
    },
    {
      name: 'Pedro Paiva',
      role: 'Co-Founder & Salesforce Architect',
      linkedin: 'https://www.linkedin.com/in/pedropa1va/',
      experience: '10+ años en Tech & Business',
      highlights: [
        'MBA en IESE Business School',
        'Salesforce Architect certificado',
        'Experto en CRM e integración',
        'Transformación digital empresarial',
      ],
      image: '/team/pedro.jpg', // Placeholder
    },
  ]

  return (
    <section className="py-24 bg-black-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-gold-400 font-semibold text-sm">NUESTRO EQUIPO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Liderados por Expertos en{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Data & AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Más de 20 años de experiencia combinada transformando empresas con datos e inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-black-900/50 backdrop-blur-sm border border-gold-500/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10"
            >
              {/* Avatar placeholder */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-black-950 text-4xl font-bold group-hover:scale-105 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-2 bg-black-900 border border-gold-500/30 rounded-full p-2">
                  <Award className="w-5 h-5 text-gold-500" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gold-500 font-semibold mb-2">{member.role}</p>
                <div className="flex items-center justify-center text-gray-400 text-sm mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {member.experience}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">Ver perfil en LinkedIn</span>
                </a>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-6 border-t border-gold-500/10">
                {member.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0 mt-2" />
                    <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional team info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Nuestro equipo combina <span className="text-gold-400 font-semibold">experiencia técnica de élite</span> con{' '}
              <span className="text-gold-400 font-semibold">visión de negocio</span>. Hemos liderado transformaciones
              digitales en empresas líderes y sabemos cómo llevar proyectos de IA de la teoría a la producción.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { Stethoscope, FileText, Video, ArrowRight } from "lucide-react";

export default function AppointmentSection() {
  const services = [
    {
      title: "Consulta Presencial",
      description: "Agende consultas e exames em hospitais e clínicas",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-600",
      link: "/agendar-consulta"
    },
    {
      title: "Prontuário Online",
      description: "Acesse seu histórico médico e resultados de exames",
      icon: FileText,
      color: "from-purple-500 to-purple-600",
      link: "/prontuario"
    },
    {
      title: "Consulta Online",
      description: "Atendimento médico por videochamada no conforto da sua casa",
      icon: Video,
      color: "from-green-500 to-green-600",
      link: "/telemedicina"
    }
  ];

  return (
    <section id="appointments" className="py-16 sm:py-20" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Agende seus atendimentos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Acesse nossos serviços de forma rápida e fácil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => window.location.href = service.link}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-cyan-200 transform hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
                    Acessar
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
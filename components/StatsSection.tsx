"use client";

import { Users, Building2, Stethoscope, Heart } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "98.000+",
      label: "Cidadãos Atendidos",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Building2,
      number: "25+",
      label: "Unidades de Saúde",
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Stethoscope,
      number: "15+",
      label: "Especialidades Médicas",
      color: "from-yellow-600 to-yellow-700",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-700"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Sistema Único de Saúde",
      color: "from-green-700 to-green-800",
      bgColor: "bg-green-50",
      iconColor: "text-green-700"
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Nossa <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">Estrutura</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Números que representam nosso compromisso com a saúde de Itabaiana
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${stat.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${stat.iconColor}`} />
                  </div>
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 rounded-full border border-green-200">
              <Heart className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                Saúde pública de qualidade para todos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
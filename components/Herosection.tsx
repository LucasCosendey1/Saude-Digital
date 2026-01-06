"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-50/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-sm">
              <MapPin className="h-4 w-4 text-green-700" />
              <span className="text-sm font-medium text-green-800">Prefeitura de Itabaiana - PB</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Saúde </span>
                <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">
                  Itabaiana
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                Cuidando da sua saúde com <strong className="text-green-700">qualidade</strong> e <strong className="text-green-700">compromisso</strong>
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Acesse serviços de saúde pública de Itabaiana de forma rápida e fácil. 
              Agende consultas, acesse seu prontuário e cuide da sua família.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/agendar-consulta">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all text-base px-8 py-6"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="/telemedicina">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-50 text-base px-8 py-6"
                >
                  Telemedicina
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-200/50">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-700">24h</div>
                <div className="text-sm text-gray-600">Atendimento</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-700">100%</div>
                <div className="text-sm text-gray-600">SUS</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-green-700">15+</div>
                <div className="text-sm text-gray-600">Especialidades</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Portal da Saúde</h3>
                    <p className="text-gray-600">Serviços disponíveis</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Agendamento Online</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Prontuário Digital</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Telemedicina</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Informações de Saúde</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
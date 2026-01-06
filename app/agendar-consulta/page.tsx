"use client";

import { Stethoscope, Video, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AgendarConsultaIndex() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Escolha o Tipo de Consulta
            </h1>
            <p className="text-xl text-gray-700">
              Selecione como você deseja ser atendido
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Consulta Presencial */}
            <Link href="/agendar-consulta/Presencial">
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer border-2 border-transparent hover:border-blue-300 hover:-translate-y-2">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-12 w-12 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900">
                    Consulta Presencial
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    Agende sua consulta ou exame em uma Unidade Básica de Saúde (UBS) de Itabaiana
                  </p>

                  {/* Features */}
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Atendimento em UBS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Exames e procedimentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span>Escolha de médico e unidade</span>
                    </li>
                  </ul>

                  {/* Button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Agendar Presencial
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Telemedicina */}
            <Link href="agendar-consulta/telemedicina">
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 cursor-pointer border-2 border-transparent hover:border-green-300 hover:-translate-y-2">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <Video className="h-12 w-12 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900">
                    Telemedicina
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    Consulta médica por videochamada no conforto da sua casa
                  </p>

                  {/* Features */}
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Atendimento por vídeo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Sem sair de casa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Consulta rápida e prática</span>
                    </li>
                  </ul>

                  {/* Button */}
                  <div className="pt-4">
                    <div className="inline-flex items-center text-green-600 font-semibold group-hover:gap-2 transition-all">
                      Agendar Online
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-green-50 border-l-4 border-green-600 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-green-900 mb-2 text-lg">
              💡 Precisa de Ajuda?
            </h3>
            <p className="text-green-800 text-base leading-relaxed">
              Em caso de dúvidas sobre qual tipo de consulta escolher, entre em contato com a central pelo telefone <strong>136</strong> (Disque Saúde).
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
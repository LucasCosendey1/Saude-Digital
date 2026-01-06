"use client";

import { useState } from "react";
import { Bug, Thermometer, Syringe, Wind, Search, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Prevencao() {
  const [searchTerm, setSearchTerm] = useState("");

  const diseases = [
    {
      id: 1,
      name: "Dengue",
      icon: Bug,
      description: "Previna-se eliminando água parada e usando repelente. A dengue é transmitida pelo mosquito Aedes aegypti.",
      tip: "Verifique vasos, pneus e calhas regularmente.",
      link: "/prevencao/dengue",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      id: 2,
      name: "Chikungunya",
      icon: Thermometer,
      description: "Combata o mosquito transmissor mantendo ambientes limpos. Causa febres altas e dores nas articulações.",
      tip: "Use telas em janelas e portas para proteção.",
      link: "/prevencao/chikungunya",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      id: 3,
      name: "Zika",
      icon: Syringe,
      description: "Proteja-se com roupas adequadas e evite áreas de risco. Especialmente importante para gestantes.",
      tip: "Gestantes devem ter cuidado especial.",
      link: "/prevencao/zika",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      name: "Gripe",
      icon: Wind,
      description: "Vacine-se anualmente e mantenha a higiene das mãos. A gripe é altamente contagiosa.",
      tip: "Evite aglomerações em períodos de surto.",
      link: "/prevencao/gripe",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 5,
      name: "COVID-19",
      icon: Shield,
      description: "Mantenha distanciamento, use máscara quando necessário e vacine-se. Higienize as mãos frequentemente.",
      tip: "A vacinação é a melhor forma de proteção.",
      link: "/prevencao/covid-19",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      iconColor: "text-green-700"
    },
  ];

  const filteredDiseases = diseases.filter((disease) =>
    disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    disease.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg mb-4">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Central de <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent">Prevenção</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Informações sobre doenças comuns e como preveni-las
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar doença... (ex: dengue, gripe, covid)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none text-gray-900 text-base shadow-sm"
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
            <h3 className="font-bold text-green-900 mb-2 text-lg">
              💡 Prevenção é o melhor remédio
            </h3>
            <p className="text-green-800 text-base leading-relaxed">
              A maioria das doenças pode ser evitada com medidas simples de prevenção. 
              Mantenha ambientes limpos, vacine-se regularmente e procure atendimento médico ao primeiro sinal de sintomas.
            </p>
          </div>

          {/* Disease Cards Grid - Estilo Compacto */}
          {filteredDiseases.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {filteredDiseases.map((disease) => {
                const Icon = disease.icon;
                return (
                  <Link key={disease.id} href={disease.link}>
                    <div className="bg-white rounded-lg border-2 border-green-200 p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer group">
                      <div className="flex flex-col items-center text-center gap-3">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-green-700" />
                        </div>
                        
                        {/* Name */}
                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                          {disease.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhuma doença encontrada com "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-green-600 hover:text-green-700 font-medium"
              >
                Limpar busca
              </button>
            </div>
          )}

          {/* Emergency Contacts - TODOS os números */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              📞 Números de Emergência
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-red-600">190</p>
                <p className="text-xs text-gray-600">Polícia Militar</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">192</p>
                <p className="text-xs text-gray-600">SAMU</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">193</p>
                <p className="text-xs text-gray-600">Bombeiros</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">180</p>
                <p className="text-xs text-gray-600">Mulher (Violência)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">100</p>
                <p className="text-xs text-gray-600">Direitos Humanos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">136</p>
                <p className="text-xs text-gray-600">Disque Saúde</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">188</p>
                <p className="text-xs text-gray-600">CVV (Suicídio)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-600">181</p>
                <p className="text-xs text-gray-600">Disque Denúncia</p>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              {filteredDiseases.length} {filteredDiseases.length === 1 ? "doença disponível" : "doenças disponíveis"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
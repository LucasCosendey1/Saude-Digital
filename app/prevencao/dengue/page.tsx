"use client";

import { Bug, CheckCircle2, AlertTriangle, Droplets, Home, Trash2 } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DenguePrevencao() {
  const prevencaoTips = [
    {
      icon: Droplets,
      title: "Elimine Água Parada",
      description: "Não deixe água acumulada em vasos, pneus, garrafas e outros recipientes.",
    },
    {
      icon: Home,
      title: "Limpe Calhas e Ralos",
      description: "Mantenha calhas limpas e ralos fechados para evitar acúmulo de água.",
    },
    {
      icon: Trash2,
      title: "Descarte Correto do Lixo",
      description: "Mantenha lixeiras tampadas e descarte o lixo adequadamente.",
    },
  ];

  const sintomas = [
    "Febre alta (39°C a 40°C)",
    "Dor de cabeça intensa",
    "Dor atrás dos olhos",
    "Dores musculares e nas articulações",
    "Manchas vermelhas no corpo",
    "Náuseas e vômitos",
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-2xl shadow-lg mb-4">
              <Bug className="h-10 w-10 text-red-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Prevenção da Dengue
            </h1>
            <p className="text-xl text-gray-700">
              Aprenda como se proteger e proteger sua família
            </p>
          </div>

          {/* O que é Dengue */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é Dengue?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              A dengue é uma doença viral transmitida pelo mosquito <strong>Aedes aegypti</strong>. 
              O mosquito se prolifera em água parada e limpa, sendo mais ativo durante o dia, 
              principalmente no início da manhã e no final da tarde.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              A prevenção é fundamental, pois não existe tratamento específico para a dengue. 
              O combate ao mosquito e a eliminação dos criadouros são as melhores formas de evitar a doença.
            </p>
          </div>

          {/* Dicas de Prevenção */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Como se Prevenir
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {prevencaoTips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-4">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Checklist de Prevenção */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Checklist Semanal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Verificar vasos de plantas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Limpar calhas e ralos</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Tampar caixas d'água</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Remover água de pneus</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Limpar bebedouros de animais</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Descartar lixo adequadamente</span>
              </div>
            </div>
          </div>

          {/* Sintomas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Principais Sintomas
              </h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Os sintomas da dengue aparecem entre 4 e 10 dias após a picada do mosquito infectado. 
              Fique atento aos seguintes sinais:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sintomas.map((sintoma, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">{sintoma}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerta */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">Importante!</h3>
                <p className="text-red-800 text-base leading-relaxed">
                  Se você apresentar os sintomas da dengue, <strong>não tome medicamentos por conta própria</strong>. 
                  Evite especialmente anti-inflamatórios e AAS (ácido acetilsalicílico), pois podem causar hemorragias. 
                  Procure imediatamente uma unidade de saúde.
                </p>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base">
              Dúvidas sobre dengue? Ligue para <strong className="text-red-600">136</strong> (Disque Saúde)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
"use client";

import { Syringe, CheckCircle2, AlertTriangle, Baby, Shield, Home, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ZikaPrevencao() {
  const prevencaoTips = [
    {
      icon: Shield,
      title: "Use Roupas Adequadas",
      description: "Vista roupas compridas e de cores claras para dificultar a picada do mosquito.",
    },
    {
      icon: Droplets,
      title: "Elimine Água Parada",
      description: "O mosquito Aedes aegypti se reproduz em água limpa e parada. Elimine os criadouros.",
    },
    {
      icon: Home,
      title: "Proteja sua Casa",
      description: "Use repelentes, telas em janelas e ar-condicionado quando possível.",
    },
  ];

  const sintomas = [
    "Febre baixa ou ausente",
    "Manchas vermelhas na pele (exantema)",
    "Coceira intensa",
    "Dor de cabeça leve",
    "Dor nas articulações",
    "Conjuntivite (olhos vermelhos)",
  ];

  const cuidadosGestantes = [
    "Consultas de pré-natal regulares",
    "Uso constante de repelente aprovado",
    "Roupas compridas e claras",
    "Evitar áreas com surto de Zika",
    "Realizar ultrassom regularmente",
    "Comunicar qualquer sintoma ao médico imediatamente",
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-2xl shadow-lg mb-4">
              <Syringe className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Prevenção do Zika Vírus
            </h1>
            <p className="text-xl text-gray-700">
              Cuidados especiais para gestantes e toda a família
            </p>
          </div>

          {/* O que é Zika */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é o Zika Vírus?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              O Zika é uma doença viral transmitida principalmente pelo mosquito <strong>Aedes aegypti</strong>, 
              o mesmo transmissor da Dengue e Chikungunya. Na maioria dos casos, a infecção é leve ou até 
              assintomática.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              No entanto, o vírus Zika ganhou atenção mundial devido à sua relação com casos de 
              <strong> microcefalia em bebês</strong> quando a mãe é infectada durante a gravidez. 
              Por isso, gestantes devem redobrar os cuidados de prevenção.
            </p>
          </div>

          {/* Alerta Especial para Gestantes */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Baby className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold">
                Atenção Especial: Gestantes
              </h2>
            </div>
            <p className="text-base leading-relaxed mb-6 opacity-95">
              O Zika vírus pode causar sérios problemas no desenvolvimento do bebê, incluindo microcefalia 
              (redução do tamanho da cabeça e do cérebro). Gestantes devem ter cuidados redobrados!
            </p>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold mb-4 text-lg">Cuidados Essenciais para Gestantes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cuidadosGestantes.map((cuidado, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{cuidado}</span>
                  </div>
                ))}
              </div>
            </div>
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
                    <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-xl mb-4">
                      <Icon className="h-8 w-8 text-purple-600" />
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
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Checklist de Proteção
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Use repelente diariamente</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Vista roupas compridas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Elimine água parada</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Use telas em janelas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Mantenha ar-condicionado ligado</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Evite horários de pico do mosquito</span>
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
              Muitas pessoas infectadas pelo Zika não apresentam sintomas. Quando aparecem, 
              os sintomas são geralmente leves e duram de 2 a 7 dias:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sintomas.map((sintoma, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">{sintoma}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerta para Gestantes */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <Baby className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-purple-900 mb-2">Importante para Gestantes!</h3>
                <p className="text-purple-800 text-base leading-relaxed mb-3">
                  Se você está grávida ou planeja engravidar, <strong>consulte seu médico imediatamente</strong> 
                  ao apresentar qualquer sintoma. O acompanhamento médico é essencial para a saúde do bebê.
                </p>
                <p className="text-purple-800 text-base leading-relaxed">
                  Realize todos os exames de ultrassom recomendados pelo seu médico para acompanhar 
                  o desenvolvimento do bebê.
                </p>
              </div>
            </div>
          </div>

          {/* Informação sobre Transmissão */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Outras Formas de Transmissão
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Além da picada do mosquito, o Zika pode ser transmitido:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">
                  <strong>De mãe para filho</strong> durante a gravidez
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">
                  <strong>Por relação sexual</strong> (use preservativo se você ou seu parceiro estiverem em área de risco)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-base">
                  <strong>Por transfusão de sangue</strong> (raro, mas possível)
                </span>
              </li>
            </ul>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base">
              Dúvidas sobre o Zika? Ligue para <strong className="text-purple-600">136</strong> (Disque Saúde)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
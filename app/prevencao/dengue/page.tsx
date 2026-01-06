"use client";

import { Bug, CheckCircle2, AlertTriangle, Shield, Home, Droplets } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function DenguePrevencao() {
  const prevencaoTips = [
    {
      icon: Droplets,
      title: "Elimine Água Parada",
      description: "O mosquito Aedes aegypti se reproduz em água limpa e parada. Elimine todos os criadouros.",
    },
    {
      icon: Home,
      title: "Cuide da sua Casa",
      description: "Mantenha caixas d'água bem tampadas, limpe calhas e retire objetos que acumulem água.",
    },
    {
      icon: Shield,
      title: "Use Repelente",
      description: "Aplique repelente nas áreas expostas da pele, especialmente durante o dia.",
    },
  ];

  const sintomas = [
    "Febre alta (acima de 38.5°C)",
    "Dor de cabeça intensa",
    "Dor atrás dos olhos",
    "Dores no corpo e articulações",
    "Manchas vermelhas na pele",
    "Cansaço extremo",
    "Náuseas e vômitos",
  ];

  const sinaisAlarme = [
    "Dor abdominal intensa e contínua",
    "Vômitos persistentes",
    "Sangramento de mucosas",
    "Acúmulo de líquidos (ascite, derrame pleural)",
    "Sonolência ou irritabilidade",
    "Hipotensão postural (tontura ao levantar)",
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
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
              Informações essenciais para combater o mosquito Aedes aegypti
            </p>
          </div>

          {/* O que é Dengue */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é a Dengue?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              A dengue é uma doença viral transmitida pela picada da fêmea do mosquito <strong>Aedes aegypti</strong>. 
              Existem quatro tipos diferentes do vírus da dengue (sorotipos 1, 2, 3 e 4).
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              A infecção por um tipo fornece imunidade permanente para aquele sorotipo específico, 
              mas apenas temporária para os outros três. Uma segunda infecção por sorotipo diferente 
              aumenta o risco de desenvolver <strong>dengue grave</strong> (anteriormente chamada de dengue hemorrágica).
            </p>
          </div>

          {/* Dicas de Prevenção */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Como Prevenir
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
              Checklist Semanal de Combate à Dengue
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Tampar caixas d'água e cisternas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Limpar calhas e ralos</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Virar garrafas e baldes de boca para baixo</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Trocar água de vasos de plantas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Descartar lixo corretamente</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Cobrir piscinas quando não usar</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Limpar pratinhos de vasos</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Guardar pneus em local coberto</span>
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
              Os sintomas geralmente aparecem de 4 a 10 dias após a picada do mosquito infectado 
              e duram de 2 a 7 dias:
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

          {/* Sinais de Alarme */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2 text-lg">⚠️ SINAIS DE ALARME - PROCURE ATENDIMENTO IMEDIATO!</h3>
                <p className="text-red-800 text-base leading-relaxed mb-3">
                  Se você apresentar dengue e desenvolver algum dos sinais abaixo, <strong>procure atendimento médico urgente</strong>:
                </p>
                <div className="space-y-2">
                  {sinaisAlarme.map((sinal, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span className="text-red-900 font-medium">{sinal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tratamento */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tratamento
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              <strong>Não existe tratamento específico para dengue.</strong> O tratamento é de suporte e inclui:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-base">
                  <strong>Repouso absoluto</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-base">
                  <strong>Hidratação intensa</strong> (beba muita água, soro caseiro, água de coco)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-base">
                  <strong>Paracetamol ou Dipirona</strong> para dor e febre (conforme prescrição médica)
                </span>
              </li>
            </ul>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-900 font-bold text-base">
                ⚠️ NUNCA tome ácido acetilsalicílico (AAS, Aspirina) ou anti-inflamatórios (Ibuprofeno, Diclofenaco). 
                Esses medicamentos podem causar hemorragias!
              </p>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base">
              Em caso de dúvidas, ligue para <strong className="text-red-600">136</strong> (Disque Saúde) ou procure a UBS mais próxima.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
"use client";

import { Thermometer, CheckCircle2, AlertTriangle, Droplets, Home, Trash2, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ChikungunyaPrevencao() {
  const prevencaoTips = [
    {
      icon: Shield,
      title: "Use Repelente",
      description: "Aplique repelente nas áreas expostas do corpo, especialmente braços e pernas.",
    },
    {
      icon: Home,
      title: "Proteja sua Casa",
      description: "Use telas em janelas e portas. Mosquiteiros também ajudam na proteção.",
    },
    {
      icon: Trash2,
      title: "Elimine Criadouros",
      description: "Remova água parada de vasos, pneus e qualquer recipiente que possa acumular água.",
    },
  ];

  const sintomas = [
    "Febre alta e repentina (acima de 39°C)",
    "Dores intensas nas articulações (dedos, tornozelos, pulsos)",
    "Dor de cabeça e dor muscular",
    "Manchas vermelhas na pele",
    "Inchaço nas articulações",
    "Fadiga extrema",
  ];

  const diferencas = [
    {
      title: "Dor nas Articulações",
      desc: "Na Chikungunya, a dor nas articulações é muito mais intensa e pode durar meses.",
    },
    {
      title: "Duração dos Sintomas",
      desc: "Os sintomas podem persistir por semanas ou até meses após a fase aguda.",
    },
    {
      title: "Transmissão",
      desc: "Assim como a Dengue, é transmitida pelo mosquito Aedes aegypti.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-2xl shadow-lg mb-4">
              <Thermometer className="h-10 w-10 text-orange-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Prevenção da Chikungunya
            </h1>
            <p className="text-xl text-gray-700">
              Proteja-se contra a doença que causa fortes dores nas articulações
            </p>
          </div>

          {/* O que é Chikungunya */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é Chikungunya?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              A Chikungunya é uma doença viral transmitida pelo mosquito <strong>Aedes aegypti</strong> 
              (o mesmo da Dengue e Zika). O nome "Chikungunya" significa "aquele que se curva" em um 
              dialeto africano, referindo-se à postura que os pacientes adotam devido às intensas dores nas articulações.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Embora raramente seja fatal, a Chikungunya pode causar dores articulares debilitantes que 
              persistem por semanas, meses ou até anos em alguns casos. A prevenção é essencial para evitar 
              o sofrimento prolongado causado pela doença.
            </p>
          </div>

          {/* Diferenças entre Chikungunya e Dengue */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Diferenças em relação à Dengue
            </h2>
            <div className="space-y-4">
              {diferencas.map((diff, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{diff.title}</h3>
                    <p className="text-gray-700 text-base">{diff.desc}</p>
                  </div>
                </div>
              ))}
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
                    <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl mb-4">
                      <Icon className="h-8 w-8 text-orange-600" />
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
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Medidas de Proteção Diária
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Use roupas compridas e claras</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Aplique repelente regularmente</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Instale telas em janelas e portas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Mantenha ambientes limpos</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Elimine água parada</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Use mosquiteiro ao dormir</span>
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
              Os sintomas da Chikungunya aparecem entre 2 e 10 dias após a picada do mosquito infectado. 
              A característica mais marcante são as <strong>fortes dores nas articulações</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sintomas.map((sintoma, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">{sintoma}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alerta */}
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-orange-900 mb-2">Atenção!</h3>
                <p className="text-orange-800 text-base leading-relaxed mb-3">
                  Se você apresentar os sintomas da Chikungunya, procure imediatamente uma unidade de saúde. 
                  <strong> Não se automedique!</strong> O tratamento adequado ajuda a controlar os sintomas e 
                  pode reduzir o risco de dores crônicas.
                </p>
                <p className="text-orange-800 text-base leading-relaxed">
                  <strong>Importante:</strong> As dores nas articulações podem durar meses. Siga corretamente 
                  as orientações médicas e faça acompanhamento regular.
                </p>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base">
              Dúvidas sobre Chikungunya? Ligue para <strong className="text-orange-600">136</strong> (Disque Saúde)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
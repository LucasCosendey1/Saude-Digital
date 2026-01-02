"use client";

import { Wind, CheckCircle2, AlertTriangle, Droplets, Users, Sparkles, Syringe } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function GripePrevencao() {
  const prevencaoTips = [
    {
      icon: Syringe,
      title: "Vacine-se Anualmente",
      description: "A vacina da gripe é a forma mais eficaz de proteção. Tome todos os anos!",
    },
    {
      icon: Sparkles,
      title: "Higienize as Mãos",
      description: "Lave as mãos frequentemente com água e sabão ou use álcool em gel.",
    },
    {
      icon: Users,
      title: "Evite Aglomerações",
      description: "Em períodos de surto, evite ambientes fechados e com muitas pessoas.",
    },
  ];

  const sintomas = [
    "Febre alta e repentina (acima de 38°C)",
    "Dor de cabeça intensa",
    "Dores musculares e no corpo",
    "Cansaço extremo",
    "Tosse seca",
    "Dor de garganta",
    "Coriza e congestão nasal",
    "Calafrios",
  ];

  const gruposRisco = [
    {
      grupo: "Crianças",
      desc: "Menores de 5 anos, especialmente menores de 2 anos",
    },
    {
      grupo: "Idosos",
      desc: "Pessoas com 60 anos ou mais",
    },
    {
      grupo: "Gestantes",
      desc: "Mulheres grávidas em qualquer período da gestação",
    },
    {
      grupo: "Doenças Crônicas",
      desc: "Pessoas com diabetes, asma, doenças cardíacas ou imunossuprimidos",
    },
  ];

  const diferencas = [
    {
      aspecto: "Início dos Sintomas",
      gripe: "Súbito e intenso",
      resfriado: "Gradual e leve",
    },
    {
      aspecto: "Febre",
      gripe: "Alta (38°C ou mais)",
      resfriado: "Rara ou baixa",
    },
    {
      aspecto: "Dores no Corpo",
      gripe: "Intensas e comuns",
      resfriado: "Leves ou ausentes",
    },
    {
      aspecto: "Cansaço",
      gripe: "Extremo, pode durar semanas",
      resfriado: "Leve",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl shadow-lg mb-4">
              <Wind className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Prevenção da Gripe
            </h1>
            <p className="text-xl text-gray-700">
              Proteja-se e proteja quem você ama
            </p>
          </div>

          {/* O que é Gripe */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é a Gripe?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              A gripe (influenza) é uma infecção viral aguda que afeta o sistema respiratório. 
              É causada pelo <strong>vírus Influenza</strong> e é altamente contagiosa, transmitida 
              principalmente por gotículas de saliva ao tossir, espirrar ou falar.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Diferente do resfriado comum, a gripe costuma ser mais intensa e pode levar a 
              complicações graves, especialmente em grupos de risco. A boa notícia é que existe 
              vacina disponível todos os anos no SUS!
            </p>
          </div>

          {/* Diferenças entre Gripe e Resfriado */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Gripe x Resfriado: Qual a Diferença?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left py-3 px-4 font-bold text-gray-900">Aspecto</th>
                    <th className="text-left py-3 px-4 font-bold text-blue-600">Gripe</th>
                    <th className="text-left py-3 px-4 font-bold text-gray-600">Resfriado</th>
                  </tr>
                </thead>
                <tbody>
                  {diferencas.map((diff, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 px-4 font-semibold text-gray-900">{diff.aspecto}</td>
                      <td className="py-3 px-4 text-gray-700">{diff.gripe}</td>
                      <td className="py-3 px-4 text-gray-600">{diff.resfriado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
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
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Medidas de Proteção Diária
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Lave as mãos com frequência</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Use álcool em gel 70%</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Cubra boca e nariz ao tossir/espirrar</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Evite tocar olhos, nariz e boca</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Mantenha ambientes ventilados</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Não compartilhe objetos pessoais</span>
              </div>
            </div>
          </div>

          {/* Grupos de Risco */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Grupos de Risco (Prioridade na Vacinação)
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Algumas pessoas têm maior risco de desenvolver complicações graves da gripe. 
              Estes grupos são prioritários para a vacinação gratuita no SUS:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gruposRisco.map((grupo, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-900 mb-1">{grupo.grupo}</h3>
                  <p className="text-sm text-blue-800">{grupo.desc}</p>
                </div>
              ))}
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
              Os sintomas da gripe aparecem de forma <strong>súbita e intensa</strong>, 
              geralmente 1 a 4 dias após o contato com o vírus:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sintomas.map((sintoma, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">{sintoma}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vacinação */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Syringe className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold">
                Vacina da Gripe - Sua Melhor Proteção
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-relaxed opacity-95">
                A vacina contra a gripe é <strong>gratuita no SUS</strong> e está disponível 
                todos os anos durante a campanha de vacinação (geralmente entre abril e junho).
              </p>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold mb-3 text-lg">Por que vacinar todo ano?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">O vírus da gripe sofre mutações constantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">A vacina é atualizada anualmente com as cepas mais recentes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">A proteção da vacina diminui ao longo do ano</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alerta */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">Quando Procurar Ajuda Médica?</h3>
                <p className="text-yellow-800 text-base leading-relaxed mb-3">
                  Procure atendimento médico imediatamente se apresentar:
                </p>
                <ul className="space-y-1 text-yellow-800 text-sm">
                  <li>• Falta de ar ou dificuldade para respirar</li>
                  <li>• Dor ou pressão no peito</li>
                  <li>• Febre alta que não baixa com medicamento</li>
                  <li>• Confusão mental ou tontura persistente</li>
                  <li>• Vômitos intensos e persistentes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base">
              Dúvidas sobre a gripe? Ligue para <strong className="text-blue-600">136</strong> (Disque Saúde)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
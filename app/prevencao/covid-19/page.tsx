"use client";

import { Shield, CheckCircle2, AlertTriangle, Users, Home, Droplets, Wind, Syringe } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function CovidPrevencao() {
  const prevencaoTips = [
    {
      icon: Syringe,
      title: "Vacine-se",
      description: "Tome todas as doses da vacina contra COVID-19. A vacinação é a melhor proteção.",
    },
    {
      icon: Droplets,
      title: "Higienize as Mãos",
      description: "Lave as mãos frequentemente com água e sabão ou use álcool em gel 70%.",
    },
    {
      icon: Shield,
      title: "Use Máscara",
      description: "Em locais fechados ou com aglomeração, use máscara para se proteger.",
    },
  ];

  const sintomas = [
    "Febre ou calafrios",
    "Tosse persistente",
    "Falta de ar ou dificuldade para respirar",
    "Cansaço e fadiga",
    "Dor muscular ou no corpo",
    "Dor de cabeça",
    "Perda de paladar ou olfato",
    "Dor de garganta",
    "Congestão nasal ou coriza",
    "Náusea ou vômito",
    "Diarreia",
  ];

  const sinaisGraves = [
    {
      sinal: "Dificuldade para respirar",
      acao: "Procure atendimento imediato",
    },
    {
      sinal: "Dor ou pressão no peito",
      acao: "Vá ao hospital urgentemente",
    },
    {
      sinal: "Confusão mental",
      acao: "Chame uma ambulância",
    },
    {
      sinal: "Lábios ou rosto azulados",
      acao: "Emergência médica - ligue 192",
    },
  ];

  const vacinacao = [
    {
      titulo: "Dose 1 e 2",
      desc: "Esquema primário de vacinação (2 doses com intervalo recomendado)",
    },
    {
      titulo: "Dose de Reforço",
      desc: "Importante para manter a imunidade, especialmente grupos de risco",
    },
    {
      titulo: "Doses Adicionais",
      desc: "Para imunossuprimidos e grupos prioritários conforme orientação médica",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #B8E5F5 0%, #B8E5F5 10%, #F5DEB3 100%)' }}>
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-2xl shadow-lg mb-4">
              <Shield className="h-10 w-10 text-indigo-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Prevenção da COVID-19
            </h1>
            <p className="text-xl text-gray-700">
              Proteja-se e proteja quem você ama contra o coronavírus
            </p>
          </div>

          {/* O que é COVID-19 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é a COVID-19?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              A COVID-19 é uma doença respiratória causada pelo <strong>coronavírus SARS-CoV-2</strong>. 
              Foi identificada pela primeira vez em dezembro de 2019 e se espalhou rapidamente pelo mundo, 
              sendo declarada pandemia pela OMS em março de 2020.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              A doença é transmitida principalmente por gotículas respiratórias quando uma pessoa infectada 
              tosse, espirra, fala ou respira. Pode variar de casos assintomáticos ou leves até casos graves 
              que requerem hospitalização.
            </p>
          </div>

          {/* Vacinação - Destaque */}
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Syringe className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold">
                Vacinação - Sua Maior Proteção
              </h2>
            </div>
            <p className="text-base leading-relaxed opacity-95 mb-6">
              As vacinas contra COVID-19 são seguras, eficazes e <strong>gratuitas no SUS</strong>. 
              Elas protegem contra formas graves da doença, hospitalização e morte.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vacinacao.map((vac, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-4">
                  <h3 className="font-bold mb-2">{vac.titulo}</h3>
                  <p className="text-sm opacity-90">{vac.desc}</p>
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
                    <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-xl mb-4">
                      <Icon className="h-8 w-8 text-indigo-600" />
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
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Medidas de Proteção no Dia a Dia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Mantenha distância de pessoas doentes</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Use máscara em ambientes fechados</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Lave as mãos com frequência</span>
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
                <span className="text-base">Cubra boca ao tossir ou espirrar</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Desinfete superfícies tocadas com frequência</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <span className="text-base">Fique em casa se estiver doente</span>
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
              Os sintomas da COVID-19 podem aparecer de 2 a 14 dias após a exposição ao vírus. 
              Os sintomas mais comuns incluem:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sintomas.map((sintoma, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-base">{sintoma}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sinais de Alerta - EMERGÊNCIA */}
          <div className="bg-red-50 border-2 border-red-500 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-10 w-10 text-red-600" />
              <h2 className="text-2xl font-bold text-red-900">
                Sinais de Emergência - Procure Ajuda Imediata!
              </h2>
            </div>
            <p className="text-red-800 text-base leading-relaxed mb-6">
              Se você ou alguém apresentar estes sintomas, <strong>procure atendimento médico urgente</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sinaisGraves.map((sinal, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-1">⚠️ {sinal.sinal}</h3>
                  <p className="text-sm text-red-800">{sinal.acao}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Isolamento */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que fazer se testar positivo?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Isole-se</h3>
                  <p className="text-gray-700 text-base">
                    Fique em casa e evite contato com outras pessoas por pelo menos 5 dias
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Use máscara</h3>
                  <p className="text-gray-700 text-base">
                    Se precisar sair ou estar perto de outras pessoas, use máscara
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Monitore os sintomas</h3>
                  <p className="text-gray-700 text-base">
                    Fique atento aos sintomas. Se piorarem, procure ajuda médica
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Informe contatos próximos</h3>
                  <p className="text-gray-700 text-base">
                    Avise pessoas com quem teve contato nos últimos dias
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-8 text-center">
            <p className="text-gray-700 text-base mb-2">
              Dúvidas sobre COVID-19? Ligue para <strong className="text-indigo-600">136</strong> (Disque Saúde)
            </p>
            <p className="text-sm text-gray-600">
              Para emergências: <strong>192</strong> (SAMU) ou <strong>193</strong> (Bombeiros)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
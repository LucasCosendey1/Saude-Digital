"use client";

import { ExternalLink, FileText, DollarSign, Scale, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Transparencia() {
  const sections = [
    {
      icon: DollarSign,
      title: "Receitas e Despesas",
      description: "Acompanhe todas as receitas e despesas públicas",
    },
    {
      icon: FileText,
      title: "Licitações",
      description: "Consulte editais e processos licitatórios",
    },
    {
      icon: Scale,
      title: "Legislação",
      description: "Acesse leis, decretos e normas municipais",
    },
    {
      icon: Users,
      title: "Servidores Públicos",
      description: "Informações sobre quadro de pessoal",
    },
    {
      icon: Building2,
      title: "Contratos e Convênios",
      description: "Documentos de contratos e convênios firmados",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F4E8 0%, #FFF9E6 50%, #FFFFFF 100%)' }}>
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg mb-4">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
              Portal da Transparência
            </h1>
            <p className="text-xl text-gray-700">
              Prefeitura Municipal de Itabaiana - SE
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              O que é o Portal da Transparência?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              O Portal da Transparência é uma ferramenta que permite aos cidadãos acompanhar 
              como os recursos públicos estão sendo utilizados pela administração municipal.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Aqui você encontra informações sobre receitas, despesas, licitações, contratos 
              e muito mais, garantindo total transparência na gestão pública de Itabaiana.
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Acesse o Portal da Transparência
            </h2>
            <p className="text-green-50 mb-6 text-base">
              Clique no botão abaixo para acessar o Portal da Transparência da 
              Prefeitura Municipal de Itabaiana
            </p>
            <Button
              size="lg"
              className="bg-black text-green-700 hover:text-black text-lg py-6 px-8 shadow-lg"
              onClick={() => window.open('https://itabaiana.se.gov.br/portal-da-transparencia', '_blank')}
            >
              <ExternalLink className="text-black mr-2 h-5 w-5" />
              Acessar Portal da Transparência
            </Button>
            <p className="text-green-100 text-xs mt-4">
              * Você será redirecionado para o site oficial da prefeitura
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-2 text-lg">
              💡 Importante
            </h3>
            <p className="text-green-800 text-base leading-relaxed">
              O Portal da Transparência é atualizado regularmente conforme a legislação vigente. 
              Em caso de dúvidas, entre em contato com a Ouvidoria Municipal.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}